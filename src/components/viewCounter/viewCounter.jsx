import React, { useState, useEffect } from "react";
import "./viewCounter.css";
import * as R from "react95";

export default function ViewCounter({ handle, counter }) {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const storedVisits = Number(localStorage.getItem("visitCounter")) || 0;
    setVisits(storedVisits + 1);
    console.log(storedVisits);
}, []);

useEffect(() => {
    localStorage.setItem("visitCounter", visits);
}, [visits]);

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
            view_counter.exe
          </R.WindowHeader>
        </div>
        <R.WindowContent>
          <R.GroupBox
            label="contador de acessos!"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1vw",
            }}
          >
            <R.Counter value={visits} style={{ width: 200 }} minLength={8} />
            {/* <R.Button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              Add !
            </R.Button> */}
          </R.GroupBox>
        </R.WindowContent>
      </R.Window>
    </>
  );
}
