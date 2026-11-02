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
        <label htmlFor="address">Password</label>
        <div className="inputBox">
          <input id="address" placeholder="Please enter your password" maxLength={250}
            value={address} onChange={e => setAddress(e.target.value)} />
        </div>
      <button
  id="loginBtn"
  className={phone.length === 10 && address.trim() ? "active" : ""}
  onClick={continueToPin}
  disabled={phone.length !== 10 || !address.trim()}
>
  CONTINUE
</button>
        <div className="policy">
          <input id="agree" type="checkbox" checked={agree} onChange={e => setAgree(e.target.checked)} />
          <label className="policy-text" htmlFor="agree">By logging in you agree to our Privacy policy.</label>
        </div>
        {error && <div className="form-error">{error}</div>}
        <p className="demo-note">Create new account</p>
        <a className="telegram" href="https://t.me/sprodealin" target="_blank" rel="noreferrer" aria-label="Telegram">
          <i className="fa-brands fa-telegram"></i>
        </a>
      </div>
    </div>
  );
}
