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
          sobre_mim.exe
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
              visao geral
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
              em progresso
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
              habilidades
            </R.Tab>
          </R.Tabs>
          <R.TabBody>
            {activeTab === 0 && (
              <R.GroupBox
                label="sobre mim"
                style={{
                  display: "flex",
                  gap: 20,
                  width: "fit-content",
                }}
              >
                <img src={Eu} className="about-image" />
                <div className="about-text">
                  <h1>artur medeiros</h1>
                  <p>são paulo, brasil</p>
                  <R.Divider />
                  <h2>
                    tenho 20 anos, estudante do senai sao paulo.
                    focado em front-end & web design
                  </h2>
                  <h3>welcome to my portfolio!!</h3>
                </div>
              </R.GroupBox>
            )}
            {activeTab === 1 && (
              <R.GroupBox label="progredindo...">
                <R.ScrollView>
                <div className="currently-text">
                  <h2>estudando:</h2>
                  <ul>
                    <li>react</li>
                    <li>php</li>
                    <li>web design</li>
                    <li>interface ui/ux</li>
                  </ul>
                  <R.Divider />
                  <h2>projetos:</h2>
                  <ul>
                    <li>portfolio pessoal</li>
                    <li>
                      trabalho de conclusao de curso (tcc)
                      <li>
                        <R.Anchor
                          href="https://github.com/arthurzop/tcc-front.git"
                          target="_blank"
                        >
                          repositorio no github
                        </R.Anchor>
                      </li>
                    </li>
                    <li>
                      aplicacoes mobile (em react native)
                      <li>
                        <R.Anchor
                          href="https://github.com/arthurzop/calcChurras-native.git"
                          target="_blank"
                        >
                          repositorio no github
                        </R.Anchor>
                      </li>
                    </li>
                  </ul>
                </div>
                </R.ScrollView>
              </R.GroupBox>
            )}
            {activeTab === 2 && (
              <R.GroupBox label="minhas habilidades >:)">
                <R.ScrollView style={{ height: 400 }}>
                  <div className="currently-text">
                    <h2>linguagens & frameworks:</h2>
                    <ul>
                      <li>javascript</li>
                      <li>react.js</li>
                      <li>react native</li>
                      <li>styled components</li>
                      <li>html / css</li>
                      <li>bootstrap</li>
                    </ul>
                    <R.Divider />
                    <h2>tecnologias:</h2>
                    <ul>
                      <li>git / github</li>
                      <li>figma</li>
                      <li>notion</li>
                    </ul>
                    <R.Divider />
                    <h2>metodologias ageis:</h2>
                    <ul>
                      <li>scrum</li>
                      <li>kanbam</li>
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
