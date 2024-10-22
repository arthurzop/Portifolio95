import React, { useState } from "react";
import "./projects.css";
import * as R from "react95";

//imagens
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";
import comic from "../../assets/comic.gif";

export default function Projects({ logic, handle }) {
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
          width: 860,
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
            meus_projetos.exe
            <R.Button onClick={logic}>X</R.Button>
          </R.WindowHeader>
        </div>
        <R.WindowContent>
          <R.Tabs value={activeTab} onChange={handleChange}>
            <R.Tab
              value={0}
              style={{
                cursor: "pointer",
                paddingInline: 15,
                marginInline: 1,
                textWrap: "nowrap",
              }}
            >
              Visao geral
            </R.Tab>
            <R.Tab
              value={1}
              style={{
                cursor: "pointer",
                paddingInline: 15,
                marginInline: 1,
                textWrap: "nowrap",
              }}
            >
              TCC SENAI
            </R.Tab>
            <R.Tab
              value={2}
              style={{
                cursor: "pointer",
                paddingInline: 15,
                marginInline: 1,
                textWrap: "nowrap",
              }}
            >
              Landing page SOS
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
              Suporte de Domingo
            </R.Tab>
            <R.Tab
              value={4}
              style={{
                cursor: "pointer",
                paddingInline: 15,
                marginInline: 1,
                textWrap: "nowrap",
              }}
            >
              Data Mastery
            </R.Tab>
            <R.Tab
              value={5}
              style={{
                cursor: "pointer",
                paddingInline: 15,
                marginInline: 1,
                textWrap: "nowrap",
              }}
            >
              Esse portfolio!
            </R.Tab>
          </R.Tabs>
          <R.TabBody>
            {activeTab === 0 && (
              <R.GroupBox
                label="visao geral"
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  gap: 20,
                }}
              >
                <div className="text-container">
                  <h1>Bem vindo aos meus projetos!</h1>
                  <R.Divider />
                  <h2>
                    Nessa sessao vc vai poder ver algum dos meus projetos, mas
                    apenas os destaques. :v
                    <br />
                    Voce pode ver mais no meu {""}
                    <R.Anchor href="https://github.com/arthurzop">
                      github
                    </R.Anchor>{" "}
                    ,ou entrar em contato, se quiser!
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
                      Esse e o projeto final do senai, para conclusao do curso.
                      Ele e um sistema que permite os estudantes agendem e
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
                    <h1>SOS - Landing page</h1>
                    <R.Divider />
                    <h2>
                      Ja esse projeto e focado 100% no design, fiz para minhas
                      aulas de web design. é uma landing page baseada no album
                      sos, da sza. Nesse daqui deixei minha imaginacao correr
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
              <R.GroupBox
                label="work in progress..."
                style={{
                  display: "flex",
                  gap: 20,
                }}
              >
                <div className="project-container">
                  <div className="image-container">
                    <img src={project5} alt="" className="project-image" />
                    <img src={project6} alt="" className="project-image" />
                  </div>
                  <div className="text-container">
                    <h1>Suporte de Domingo</h1>
                    <R.Divider />
                    <h2>
                      A suporte foi criada pelo meu ex-professor (e hoje chefe)
                      com o intuito de criar uma forte comunidade de devs e
                      designers. Eu criei o desing da marca suporte e todo o
                      web-design das páginas.
                    </h2>
                    <h2>
                      <R.Anchor
                        href="https://suportededomingo.com.br"
                        target="_blank"
                      >
                        website upado
                      </R.Anchor>
                      <br />
                      <R.Anchor
                        href="https://discord.gg/qB42JUJquU"
                        target="_blank"
                      >
                        nossa comunidade no discord
                      </R.Anchor>
                    </h2>
                  </div>
                </div>
              </R.GroupBox>
            )}
            {activeTab === 4 && (
              <R.GroupBox
                label="work in progress..."
                style={{
                  display: "flex",
                  gap: 20,
                }}
              >
                <div className="text-container">
                  <h1>Data Mastery</h1>
                  <R.Divider />
                  <h2>
                    Também para um ex-professor do SENAI, estou tendo a
                    oportunidade de participar como web designer na craição da
                    landing page e outras páginas em conjunto para sua empresa
                    de ciencia de dados e power BI.
                    <br />
                    Nesse projeto e na Suporte de Domingo estou exclusivamente
                    na área do web design, sendo assim nao estou codando o
                    front-end.
                  </h2>
                </div>
              </R.GroupBox>
            )}
            {activeTab === 5 && (
              <R.GroupBox>
                <div className="text-container">
                  <h1>Esse portfolio por si so!!</h1>
                  <R.Divider />
                  <h2>
                    Eu to muito muito orgulhoso desse aqui. Eu ja conhecia a lib
                    react95 fazia alguns meses mas nunca tive a oportunidade de
                    usar ela, ate chegar na ideia de usar ela para criar meu
                    proprio portfolio pessoal :) e eu, sendo eu, coloquei meu
                    maximo nesse projeto aqui.
                    <br />
                    <br />
                    Eu amo essa estetica de internet antiga e computadores
                    antigos! Entao poder usar para expressar meu trabalho, meus
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
