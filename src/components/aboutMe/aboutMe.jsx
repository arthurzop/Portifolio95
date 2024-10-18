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
              minWidth: "180px",
            }}
          >
            sobre_mim.exe
            <R.Button onClick={logic}>X</R.Button>
          </R.WindowHeader>
        </div>
        <R.WindowContent>
          <R.Tabs value={activeTab} onChange={handleChange}>
            <S.Tab value={0}>Visao geral</S.Tab>
            <S.Tab value={1}>Minhas habilidades</S.Tab>
            <S.Tab value={2}>Em progresso</S.Tab>
          </R.Tabs>
          <R.TabBody>
            {activeTab === 0 && (
              <S.GroupBox label="Quem sou">
                <img src={Eu} className="about-image" />
                <div className="about-text">
                  <h1>Artur Medeiros</h1>
                  <p>São Paulo, Brasil</p>
                  <R.Divider />
                  <h2>
                    Tenho 21 anos, estudante de analise e desenvolvimento de
                    sistemas na cruzeiro do sul. <br />
                    Focado em web design & front-end
                  </h2>
                  <h3>welcome to my portfolio!!</h3>
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
                    <li>notion</li>
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
              <S.GroupBox label="Progredindo...">
                <div className="currently-text">
                  <h2>Estudando:</h2>
                  <ul>
                    <li>Motion Design</li>
                    <li>Social Media Design</li>
                    <li>Branding</li>
                    <li>Illustrator</li>
                  </ul>
                  <h2>
                    & <br />
                    Masterizando:
                  </h2>
                  <ul>
                    <li>Figma</li>
                    <li>Web Design</li>
                    <li>UI / UX</li>
                  </ul>
                  <R.Divider />
                  <h2>Projetos como Web Designer <br />& Front-End:</h2>
                  <ul>
                    <li>Suporte de Domingo</li>
                    <li>Data Mastery</li>
                    <li>Zone</li>
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
