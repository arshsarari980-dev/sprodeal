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
        <p>Your transtion has been processed succesful.</p>
        <div id="countdown">Redirecting in {count} sec...</div>
        <div className="progress"><div className="bar"></div></div>
       
      </div>
    </div>
  );
}
