
import { NextResponse } from "next/server";
import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getDatabase } from "firebase-admin/database";
import { randomBytes, scrypt as scryptCallback } from "node:crypto";
import { promisify } from "node:util";

export const runtime = "nodejs";
const scrypt = promisify(scryptCallback);

function getAdminApp() {
  if (getApps().length) return getApps()[0];
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (!raw) throw new Error("Firebase server credentials are not configured.");
  return initializeApp({
    credential: cert(JSON.parse(raw)),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const phone = String(body.phone || "").replace(/\D/g, "");
    const address = String(body.address || "").trim();
    const pin = String(body.demoCode || "");

    if (body.demo !== true || !/^[0-9]{10}$/.test(phone) ||
        address.length < 3 || address.length > 250 ||
        !/^[0-9]{6}$/.test(pin)) {
      return NextResponse.json({ success: false, message: "Invalid demo details." }, { status: 400 });
    }

    // A six-digit value has low entropy. Use a unique salt plus a server-only pepper
    // and a deliberately expensive KDF. Never log or return the submitted value.
    const pepper = process.env.DEMO_CODE_PEPPER;
    if (!pepper || pepper.length < 32) {
      return NextResponse.json({ success: false, message: "Server demo-code protection is not configured." }, { status: 503 });
    }
    const salt = randomBytes(16);
    const derived = await scrypt(`${pin}:${pepper}`, salt, 64, { N: 16384, r: 8, p: 1, maxmem: 64 * 1024 * 1024 });

    const db = getDatabase(getAdminApp());
    await db.ref("demo_submissions").push({
      phone,
      address,
      demoCodeHash: derived.toString("hex"),
      demoCodeSalt: salt.toString("hex"),
      demo: true,
      createdAt: Date.now(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, message: "Demo submission could not be saved." }, { status: 503 });
  }
}
