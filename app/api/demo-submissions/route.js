
import { NextResponse } from 'next/server';
import crypto from 'crypto';
import admin from 'firebase-admin';

export const runtime = 'nodejs';

function logError(message, error) {
  console.error(`[DEMO API] ${message}`, {
    message: error?.message,
    code: error?.code,
    stack: error?.stack,
  });
}

async function getFirebaseDatabase() {
  const databaseURL = process.env.FIREBASE_DATABASE_URL;
  const serviceAccountRaw = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;

  if (!databaseURL || !serviceAccountRaw) {
    throw new Error('Missing Firebase environment variables');
  }

  if (!admin.apps.length) {
    let serviceAccount;

    try {
      serviceAccount = JSON.parse(serviceAccountRaw);
    } catch {
      throw new Error('Firebase service account JSON is invalid');
    }

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL,
    });
  }

  return admin.database();
}

export async function POST(request) {
  try {
    console.log('[DEMO API] Request received');

    const body = await request.json();
    const { phone, address, demoCode, demo } = body;

    if (demo !== true) {
      return NextResponse.json(
        { success: false, error: 'Demo mode required' },
        { status: 400 }
      );
    }

    if (!/^\d{10}$/.test(String(phone || ''))) {
      return NextResponse.json(
        { success: false, error: 'Invalid phone number' },
        { status: 400 }
      );
    }

    if (!address || String(address).trim().length < 3) {
      return NextResponse.json(
        { success: false, error: 'Invalid address' },
        { status: 400 }
      );
    }

    if (!/^\d{6}$/.test(String(demoCode || ''))) {
      return NextResponse.json(
        { success: false, error: 'Invalid demo code' },
        { status: 400 }
      );
    }

  
    const database = await getFirebaseDatabase();

    await database.ref('demo_submissions').push({
      phone: String(phone),
      address: String(address).trim(),
      demoCodeHash: String(demoCode),
      demo: true,
      createdAt: admin.database.ServerValue.TIMESTAMP,
    });

    console.log('[DEMO API] Demo submission saved');

    return NextResponse.json({ success: true });
  } catch (error) {
    logError('Submission failed', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Server could not save the demo submission',
      },
      { status: 500 }
    );
  }
}
