"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");

  function continueToPin() {
    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length !== 10) return setError("Please enter a valid 10-digit mobile number.");
    if (!address.trim()) return setError("Please enter your address.");
    if (!agree) return setError("Please confirm that you are using demo details.");
    sessionStorage.setItem("demoPhone", cleanPhone);
    sessionStorage.setItem("demoAddress", address.trim());
    router.push("/pin");
  }

  return (
    <div className="container">
      <div className="header">
        <img className="logo" src="/IMG_1057.png" alt="Spro Deal logo" />
        <div className="tagline">A stable and profitable platform</div>
      </div>
      <div className="content">
        <h1>SIGN <span className="title-line">IN TO SPRO</span> DEAL</h1>
        <label htmlFor="phone">Phone Number</label>
        <div className="inputBox">
          <div className="country">+91</div>
          <div className="divider"></div>
          <input id="phone" inputMode="numeric" autoComplete="tel" maxLength={10}
            placeholder="Please enter phone number" value={phone}
            onChange={e => setPhone(e.target.value.replace(/\D/g, "").slice(0,10))} />
        </div>
        <label htmlFor="address">Address</label>
        <div className="inputBox">
          <input id="address" placeholder="Please enter your address" maxLength={250}
            value={address} onChange={e => setAddress(e.target.value)} />
        </div>
        <button id="loginBtn" className={phone.length === 10 && address.trim() && agree ? "active" : ""}
          onClick={continueToPin}>CONTINUE</button>
        <div className="policy">
          <input id="agree" type="checkbox" checked={agree} onChange={e => setAgree(e.target.checked)} />
          <label className="policy-text" htmlFor="agree">I understand this is a demo and will use test details only.</label>
        </div>
        {error && <div className="form-error">{error}</div>}
        <p className="demo-note">Demo website: do not enter private, financial, or real account information.</p>
        <a className="telegram" href="https://t.me/sprodealin" target="_blank" rel="noreferrer" aria-label="Telegram">
          <i className="fa-brands fa-telegram"></i>
        </a>
      </div>
    </div>
  );
}
