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
