import React, { useState } from "react";
import "./aboutMe.css";
import * as R from "react95";
import * as S from '../../style/styled.jsx'

//images
import Eu from "../../assets/Eu.png";

export default function AboutMe({ logic, handle }) {
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
      <S.StyledWindow>
        <div className={`${handle}`}>
          <R.WindowHeader
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              minWidth: '180px'
            }}
          >
            sobre_mim.exe
            <R.Button onClick={logic}>X</R.Button>
          </R.WindowHeader>
        </div>
        <R.WindowContent>
          <R.Tabs value={activeTab} onChange={handleChange}>
            <S.Tab
              value={0}
            >
              visao geral
            </S.Tab>
            <S.Tab
              value={1}
            >
              em progresso
            </S.Tab>
            <S.Tab
              value={2}
            >
              minhas habilidades
            </S.Tab>
          </R.Tabs>
          <R.TabBody>
            {activeTab === 0 && (
              <S.GroupBox
                label="sobre mim"

              >
                <img src={Eu} className="about-image" />
                <div className="about-text">
                  <h1>artur medeiros</h1>
                  <p>são paulo, brasil</p>
                  <R.Divider />
                  <h2>
                    tenho 20 anos, estudante da cruzeiro do sul.
                    focado em front-end & web design
                  </h2>
                  <h3>welcome to my portfolio!!</h3>
                </div>
              </S.GroupBox>
            )}
            {activeTab === 1 && (
              <S.GroupBox label="progredindo...">

                <div className="currently-text">
                  <h2>estudando:</h2>
                  <ul>
                    <li>react</li>
                    <li>next js</li>
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

                  </ul>
                </div>

              </S.GroupBox>
            )}
            {activeTab === 2 && (
              <R.GroupBox label="minhas habilidades >:)">
                <div className="currently-text">
                  <h2>linguagens & frameworks:</h2>
                  <ul>
                    <li>javascript</li>
                    <li>react.js</li>
                    <li>next.js</li>
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
              </R.GroupBox>
            )}
          </R.TabBody>
        </R.WindowContent>
      </S.StyledWindow>
    </>
  );
}
