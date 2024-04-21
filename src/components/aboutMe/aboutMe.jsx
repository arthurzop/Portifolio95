import React, { useState } from "react";
import "./aboutMe.css";
import * as R from "react95";

//images
import Eu from "../../assets/Eu.png";

export default function AboutMe({ logic }) {
  const [state, setState] = useState({
    activeTab: 0,
  });

  const handleChange = (value, event) => {
    console.log(event);
    setState({ activeTab: value });
  };

  const { activeTab } = state;

  return (
    <>
      <R.Window
        style={{
          position: "absolute",
          top: "10%",
          left: "30%",
          width: 600,
          height: 600,
        }}
      >
        <R.WindowHeader
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          about me .exe
          <R.Button onClick={logic}>X</R.Button>
        </R.WindowHeader>
        <R.WindowContent>
          <R.Tabs value={activeTab} onChange={handleChange}>
            <R.Tab
              value={0}
              style={{
                cursor: "pointer",
                paddingInline: 15,
                marginInline: 2,
              }}
            >
              Me
            </R.Tab>
            <R.Tab
              value={1}
              style={{ cursor: "pointer", paddingInline: 15, marginInline: 2 }}
            >
              Currently Doing
            </R.Tab>
            <R.Tab
              value={2}
              style={{ cursor: "pointer", paddingInline: 15, marginInline: 2 }}
            >
              My Focus
            </R.Tab>
            <R.Tab
              value={3}
              style={{ cursor: "pointer", paddingInline: 15, marginInline: 2 }}
            >
              Socials
            </R.Tab>
          </R.Tabs>
          <R.TabBody>
            {activeTab === 0 && (
              <R.GroupBox
                style={{
                  display: "flex",
                  gap: 20,
                  flexDirection: "column",
                  width: "fit-content",
                }}
              >
                <img src={Eu} className="about-image" />
                <div className="about-text">
                  <h1>Artur Medeiros</h1>
                </div>
              </R.GroupBox>
            )}
            {activeTab === 1 && <R.GroupBox>1</R.GroupBox>}
            {activeTab === 2 && <R.GroupBox>2</R.GroupBox>}
            {activeTab === 3 && <R.GroupBox>3</R.GroupBox>}
          </R.TabBody>
        </R.WindowContent>
      </R.Window>
    </>
  );
}
