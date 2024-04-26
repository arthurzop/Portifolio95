import React, { useEffect, useState } from "react";
import "./splashSceen.css";
import { ProgressBar } from "react95";

//images
import Logo from "../../assets/logo2.png";
import SplashLogo from "../../assets/splash_logo.png";

export default function SplashScreen() {
  let [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((previousPercent) => {
        if (previousPercent === 100) {
          return 0;
        }
        const diff = 1;
        return Math.min(previousPercent + diff, 100);
      });
    }, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="splash-container">
        <div className="image-container">
          <img src={SplashLogo} className="windows-logo" />
          <img src={Logo} className="logo" />
        </div>
        <div className="progress-container">
          <ProgressBar value={percent} variant="tile"/>
        </div>
      </div>
    </>
  );
}
