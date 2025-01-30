import React, { useState } from "react";
import "./appIcon.css";

export default function AppIcon({ img, label, logic }) {
  const [border, setBorder] = useState("none");

  const toggleBorder = () => {
    setBorder((prevBorder) =>
      prevBorder === "none" ? "1.5px dashed #7070709c" : "none"
    );
  };

  return (
    <>
      <div
        className="app"
        onClick={toggleBorder}
        onDoubleClick={logic}
        style={{ border: border }}
      >
        <img src={img} alt=" " className="app-icon" />
        <p>{label}</p>
      </div>
    </>
  );
}
