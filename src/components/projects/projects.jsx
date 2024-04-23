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
          width: 650,
          height: "fit-content",
          userSelect: "text",
          zIndex: 2,
        }}
      >
        <R.WindowHeader
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          meus_projetos.exe
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
              meu tcc
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
              landing page sos
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
              esse portfolio!
            </R.Tab>
          </R.Tabs>
          <R.TabBody>
            {activeTab === 0 && (
              <R.GroupBox
                label="visao geral"
                style={{
                  display: "flex",
                  gap: 20,
                }}
              >
                <div className="text-container">
                  <h1>bem vindo aos meus projetos!</h1>
                  <R.Divider />
                  <h2>
                    nessa sessao vc vai poder ver algum dos meus projetos,{" "}
                    <br /> mas apenas os destaques :v
                    <br />
                    voce pode ver mais no meu {""}
                    <R.Anchor href="https://github.com/arthurzop">
                      github
                    </R.Anchor>{" "}
                    ou entrar em contato, se quiser!
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
                    <h1>espaco maker 3d</h1>
                    <R.Divider />
                    <h2>
                      esse e o projeto final do senai, para conclusao do curso.
                      ele e um sistema que permite os estudantes agendem e
                      imprimam usando as impressoras 3d da escola.
                    </h2>
                    <h2>
                      <R.Anchor
                        href="https://github.com/arthurzop/tcc-front.git"
                        target="_blank"
                      >
                        repositorio no github
                      </R.Anchor>
                      <br />
                      <R.Anchor
                        href="https://www.figma.com/file/qDJCO4VNlhh9HOTGCemF69/TCC?type=design&node-id=0%3A1&mode=design&t=BPq1wcYIyGpSIVHH-1"
                        target="_blank"
                      >
                        projeto no figma
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
                    <h1>sos - landing page</h1>
                    <R.Divider />
                    <h2>
                      esse projeto e focado 100% no design, fiz para minhas
                      aulas de web design. é uma landing page baseada no album
                      sos, da sza. nesse aqui deixei minha imaginacao correr
                      livre para criar mais uma 'arte' do que um site.
                    </h2>
                    <h2>
                      <R.Anchor
                        href="https://github.com/arthurzop/sos.git"
                        target="_blank"
                      >
                        repositorio no github
                      </R.Anchor>
                      <br />
                      <R.Anchor
                        href="https://www.figma.com/file/IYA9A4wRi4m05ywpyVd9O5/SOS-landing?type=design&mode=design&t=BPq1wcYIyGpSIVHH-1"
                        target="_blank"
                      >
                        projeto no figma
                      </R.Anchor>
                    </h2>
                  </div>
                </div>
              </R.GroupBox>
            )}
            {activeTab === 3 && (
              <R.GroupBox>
                <div className="text-container">
                  <h1>esse portfolio por si so!!</h1>
                  <R.Divider />
                  <h2>
                    eu to muito muito orgulhoso desse aqui. eu ja conheco a lib
                    react95 faz uns meses mas nunca tive a oportunidade de usar
                    ela, ate chegar na ideia de usar ela para criar meu proprio
                    portfolio pessoal :) e eu, sendo eu, coloquei meu maximo
                    nesse projeto aqui.
                    <br />
                    <br />
                    eu amo essa estetica de internet antiga e computadores
                    antigos! entao poder usar para expressar meu trabalho, meus
                    gostos e minha estetica é bem recompensador!
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
