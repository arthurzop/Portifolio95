import React, { useState } from "react";
import "./curriculo.css";
import * as R from "react95";
import pdf from "../../assets/pdf/Curriculum_Artur.pdf";

export default function CurriculoApp({ logic, handle }) {
  const handleClick = (op) => {
    if (op == "online") {
      window.open(pdf, "_blank");
    } else if (op == "baixar") {
      const link = document.createElement("a");
      link.href = pdf;
      link.download = "CV_Artur_Medeiros.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <>
      <R.Window
        style={{
          position: "absolute",
          width: 400,
          height: "fit-content",
          userSelect: "text",
          zIndex: 3,
        }}
      >
        <div className={`${handle}`}>
          <R.WindowHeader
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            meu_curriculo.exe
            <R.Button onClick={logic}>X</R.Button>
          </R.WindowHeader>
        </div>
        <R.WindowContent>
          <R.GroupBox
            label=".pdf!!"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1vw",
            }}
          >
            <h1 className="curriculo-text">
              aqui voce pode ver <br /> (ou baixar :3) meu curriculo!!
            </h1>
            <div className="button-container">
              <R.Button
                style={{
                  width: 140,
                  height: 50,
                  display: "flex",
                  alignItems: "center",
                  fontSize: "24px",
                }}
                onClick={() => {
                  handleClick("online");
                }}
              >
                ver online ↥
              </R.Button>
              <R.Button
                style={{
                  width: 140,
                  height: 50,
                  display: "flex",
                  alignItems: "center",
                  fontSize: "24px",
                }}
                onClick={() => {
                  handleClick("baixar");
                }}
              >
                baixar ↧
              </R.Button>
            </div>
          </R.GroupBox>
        </R.WindowContent>
      </R.Window>
    </>
  );
}
