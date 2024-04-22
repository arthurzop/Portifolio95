import React, { useState } from "react";
import "./projects.css";
import * as R from "react95";

//imagens
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import comic from "../../assets/comic.gif";

export default function Projects({ logic }) {
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
          top:  "15%",
          left: "55%",
          width: 650,
          height: "fit-content",
          userSelect: "text",
          zIndex: 2

        }}
      >
        <R.WindowHeader
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          my projects.exe
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
              Final Project
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
              SOS Landing Page
            </R.Tab>
            <R.Tab
              value={3}
              style={{
                cursor: "pointer",
                paddingInline: 15,
                marginInline: 2,
                textWrap: "nowrap",
              }}
            >
              This Portfolio
            </R.Tab>
          </R.Tabs>
          <R.TabBody>
            {activeTab === 0 && (
              <R.GroupBox
                label="Overview"
                style={{
                  display: "flex",
                  gap: 20,
                }}
              >
                <div className="text-container">
                  <h1>Welcome to My Projects!</h1>
                  <R.Divider />
                  <h2>
                    In this section you'll be able to see some of my projects,
                    oly the most remarklable ones :P
                    <br />
                    You can always see some more in my{" "}
                    <R.Anchor href="https://github.com/arthurzop">
                      Github page
                    </R.Anchor>{" "}
                    or get in touch, if you want to!
                  </h2>
                  <img src={comic} alt="" className="comic" />
                </div>
              </R.GroupBox>
            )}
            {activeTab === 1 && (
              <R.GroupBox
                label=""
                style={{
                  display: "flex",
                  gap: 20,
                }}
              >
                <div className="project-container">
                  <div className="image-container">
                    <img src={project1} alt="" className="project-image" />
                    <img src={project2} alt="" className="project-image" />
                  </div>
                  <div className="text-container">
                    <h1>Espaco Maker 3D</h1>
                    <R.Divider />
                    <h2>
                      This is the final project of my school, so i can graduate.
                      It's a system, for the school itself, that lets the
                      students schedule a 3D Printer and print the desired
                      piece.
                    </h2>
                    <h2>
                      <R.Anchor
                        href="https://github.com/arthurzop/tcc-front.git"
                        target="_blank"
                      >
                        Github Repo
                      </R.Anchor>
                      <br />
                      <R.Anchor
                        href="https://www.figma.com/file/qDJCO4VNlhh9HOTGCemF69/TCC?type=design&node-id=0%3A1&mode=design&t=BPq1wcYIyGpSIVHH-1"
                        target="_blank"
                      >
                        Figma File
                      </R.Anchor>
                    </h2>
                  </div>
                </div>
              </R.GroupBox>
            )}
            {activeTab === 2 && (
              <R.GroupBox
                label=""
                style={{
                  display: "flex",
                  gap: 20,
                }}
              >
                <div className="project-container">
                  <div className="image-container">
                    <img src={project3} alt="" className="project-image" />
                    <img src={project4} alt="" className="project-image" />
                  </div>
                  <div className="text-container">
                    <h1>Landing Page - SOS</h1>
                    <R.Divider />
                    <h2>
                      This one is a design focused project, I made it for my web
                      design class. It's a Landing Page inspired by Sza's record
                      'SOS'. In this one i let my imagination free to create
                      more of an art than a website.
                    </h2>
                    <h2>
                      <R.Anchor
                        href="https://github.com/arthurzop/sos.git"
                        target="_blank"
                      >
                        Github Repo
                      </R.Anchor>
                      <br />
                      <R.Anchor
                        href="https://www.figma.com/file/IYA9A4wRi4m05ywpyVd9O5/SOS-landing?type=design&mode=design&t=BPq1wcYIyGpSIVHH-1"
                        target="_blank"
                      >
                        Figma File
                      </R.Anchor>
                    </h2>
                  </div>
                </div>
              </R.GroupBox>
            )}
            {activeTab === 3 && (
              <R.GroupBox>
                <div className="text-container">
                  <h1>This Portfolio Itself!!</h1>
                  <R.Divider />
                  <h2>
                    I'm very very proud of this one. I've knew this React95 Lib
                    for months and never got to use it, then came to the idea to
                    do my own personal portfolio with it :D and, being me, i put
                    my max into this one.
                    <br />
                    <br />I love this 'old' internet / computer aesthetic and
                    geting to use it to express myself and my work it's very
                    rewarding.
                  </h2>
                </div>
              </R.GroupBox>
            )}
          </R.TabBody>
        </R.WindowContent>
      </R.Window>
    </>
  );
}
