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
          width: 650,
          height: "fit-content",
          userSelect: "text",
          zIndex: 3,
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
                textWrap: "nowrap",
              }}
            >
              Overview
            </R.Tab>
            <R.Tab
              value={1}
              style={{
                cursor: "pointer",
                paddingInline: 15,
                marginInline: 2,
                textWrap: "nowrap",
              }}
            >
              Working On
            </R.Tab>
            <R.Tab
              value={2}
              style={{
                cursor: "pointer",
                paddingInline: 15,
                marginInline: 2,
                textWrap: "nowrap",
              }}
            >
              Skills
            </R.Tab>
          </R.Tabs>
          <R.TabBody>
            {activeTab === 0 && (
              <R.GroupBox
                label="About Me"
                style={{
                  display: "flex",
                  gap: 20,
                  width: "fit-content",
                }}
              >
                <img src={Eu} className="about-image" />
                <div className="about-text">
                  <h1>Artur Medeiros</h1>
                  <p>São Paulo, Brasil</p>
                  <R.Divider />
                  <h2>
                    I'm 20 years old, full time student at Senai-SP. Front-End &
                    Design focused.
                  </h2>
                  <h3>Welcome to my Portfolio!</h3>
                </div>
              </R.GroupBox>
            )}
            {activeTab === 1 && (
              <R.GroupBox label="Working On">
                <R.ScrollView>
                <div className="currently-text">
                  <h2>Studying:</h2>
                  <ul>
                    <li>React</li>
                    <li>PHP</li>
                    <li>Web Design</li>
                    <li>UI/UX Interface</li>
                  </ul>
                  <R.Divider />
                  <h2>Projects:</h2>
                  <ul>
                    <li>Personal Portfolio</li>
                    <li>
                      Final Project (React)
                      <li>
                        <R.Anchor
                          href="https://github.com/arthurzop/tcc-front.git"
                          target="_blank"
                        >
                          Github Repo
                        </R.Anchor>
                      </li>
                    </li>
                    <li>
                      Mobile Applications (React Native)
                      <li>
                        <R.Anchor
                          href="https://github.com/arthurzop/calcChurras-native.git"
                          target="_blank"
                        >
                          Github Repo
                        </R.Anchor>
                      </li>
                    </li>
                  </ul>
                </div>
                </R.ScrollView>
              </R.GroupBox>
            )}
            {activeTab === 2 && (
              <R.GroupBox label="Skills">
                <R.ScrollView style={{ height: 400 }}>
                  <div className="currently-text">
                    <h2>Languages & Frameworks:</h2>
                    <ul>
                      <li>JavaScript</li>
                      <li>ReactJS</li>
                      <li>React Native</li>
                      <li>Styled Components</li>
                      <li>HTML / CSS</li>
                      <li>BootStrap</li>
                    </ul>
                    <R.Divider />
                    <h2>Tech:</h2>
                    <ul>
                      <li>Git</li>
                      <li>Figma</li>
                      <li>Notion</li>
                    </ul>
                    <R.Divider />
                    <h2>Agile Methodology:</h2>
                    <ul>
                      <li>Scrum</li>
                      <li>Kanbam</li>
                    </ul>
                  </div>
                </R.ScrollView>
              </R.GroupBox>
            )}
          </R.TabBody>
        </R.WindowContent>
      </R.Window>
    </>
  );
}
