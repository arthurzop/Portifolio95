import React from "react";
import './appIcon.css'


export default function AppIcon({img, label, logic}) {
  return (
    <>
      <div className="app" onDoubleClick={logic}>
        <img src={img} alt=" " className="app-icon" />
        <p>{label}</p>
      </div>
    </>
  );
}
