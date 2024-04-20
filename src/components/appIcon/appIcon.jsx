import React from "react";
import * as R from 'react95';
import './appIcon.css'


export default function AppIcon({img, label, logic}) {
  return (
    <>
      <div className="app" onDoubleClick={logic}>
        <img src={img} alt=" " className="app-icon" />
        <R.Anchor>{label}</R.Anchor>
      </div>
    </>
  );
}
