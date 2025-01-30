import React, { useState } from "react";
import "./aboutMe.css";
import * as R from "react95";
import * as S from "../../style/styled.jsx";

//images
import Eu from "../../assets/Eu.jpg";

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
              minWidth: "740px",
            }}
          >
            sobre_mim.exe
            <R.Button onClick={logic}>X</R.Button>
          </R.WindowHeader>
        </div>
        <R.WindowContent>
          <R.Tabs value={activeTab} onChange={handleChange}>
            <S.Tab value={0} style={{ marginInline: "1px" }}>
              Visao geral
            </S.Tab>
            <S.Tab value={1} style={{ marginInline: "1px" }}>
              Minhas habilidades
            </S.Tab>
            <S.Tab value={2} style={{ marginInline: "1px" }}>
              Em progresso
            </S.Tab>
          </R.Tabs>
          <R.TabBody>
            {activeTab === 0 && (
              <S.GroupBox label="Sobre mim :P" style={{ width: "100%" }}>
                <img src={Eu} className="about-image" />
                <div className="about-text">
                  <h1>Artur Medeiros</h1>
                  <p>São Paulo, Brasil</p>
                  <R.Divider />
                  <h2>
                    Tenho 21 anos, estudante de design gráfico na cruzeiro do
                    sul e focado em web design, brand design & front-end.
                  </h2>
                  <div class="waviy">
                    <h3>Welcome to my portfolio!</h3>
                  </div>
                </div>
              </S.GroupBox>
            )}
            {activeTab === 1 && (
              <R.GroupBox label="O que sei >:)">
                <div className="currently-text">
                  <h2>Linguagens & Frameworks:</h2>
                  <ul>
                    <li>Javascript</li>
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>React native</li>
                    <li>Styled components</li>
                    <li>html / css</li>
                    <li>Bootstrap</li>
                  </ul>
                  <R.Divider />
                  <h2>Tecnologias & Softwares:</h2>
                  <ul>
                    <li>Git / Github</li>
                    <li>Figma</li>
                    <li>Notion</li>
                  </ul>
                  <R.Divider />
                  <h2>Metodologias ageis:</h2>
                  <ul>
                    <li>Scrum</li>
                    <li>Kanbam</li>
                  </ul>
                </div>
              </R.GroupBox>
            )}
            {activeTab === 2 && (
              <S.GroupBox label="Progredindo..." style={{ width: "100%" }}>
                <div className="currently-text">
                  <h2>Estudando:</h2>
                  <ul>
                    <li>Motion Design</li>
                    <li>Social Media Design</li>
                    <li>Branding</li>
                    <li>Illustrator</li>
                  </ul>
                  <h2>& Masterizando:</h2>
                  <ul>
                    <li>Figma</li>
                    <li>Web Design</li>
                    <li>UI / UX</li>
                  </ul>
                  <R.Divider />
                  <h2>Projetos em progesso:</h2>
                  <ul>
                    <li>Suporte de Domingo</li>
                    <li>Code Trouble</li>
                  </ul>
                </div>
              </S.GroupBox>
            )}
          </R.TabBody>
        </R.WindowContent>
      </S.StyledWindow>
    </>
  );
}
