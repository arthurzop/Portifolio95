import React, { useState } from "react";
import "./projects.css";
import * as R from "react95";

//imagens
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project5 from "../../assets/project5.png";
import comic from "../../assets/comic.gif";
import link from "../../assets/Link.svg";

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
          <R.Tabs rows={2} value={activeTab} onChange={handleChange}>
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
              Prof Correa (em progresso)
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
              Luiz Brito
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
              Code Trouble
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
                    Nesta janela voce vai poder ver alguns dos meus projetos,
                    nas areas de Web Design e Brand Design.
                    <br />
                    Voce pode ver mais no meu {""}
                    <R.Anchor href="https://github.com/arthurzop">
                      github <img src={link} alt="" className="link" />
                    </R.Anchor>{" "}
                    ou no meu {""}
                    <R.Anchor href="https://behance.net/arthurzop">
                      behance <img src={link} alt="" className="link" />
                    </R.Anchor>{" "}
                  </h2>
                  <img src={comic} alt="" className="comic" />
                </div>
              </R.GroupBox>
            )}
            {activeTab === 1 && (
              <R.GroupBox
                label="work in progress..."
                style={{
                  display: "flex",
                  gap: 20,
                }}
              >
                <div className="project-container">
                  <div className="image-container">
                    <img src={project1} alt="" className="project-image" />
                    {/* <img src={project2} alt="" className="project-image" /> */}
                  </div>
                  <div className="text-container">
                    <h1>Identidade Visual: Prof Correa</h1>
                    <R.Divider />
                    <h2>
                      Esse e o projeto no qual estou trabalhando atualmente,
                      finalizando a identidade visual e partindo para o web
                      design do portifolio do meu chefinho.
                      <br />
                      <br />
                      Tentamos implementar muito da heranca africana dele nessa
                      identidade, aplicando tanto na logo quanto na paleta de
                      cores.
                    </h2>
                    <h2>
                      <R.Anchor
                        href="https://www.behance.net/gallery/218017203/Prof-Correa-Brand-Design"
                        target="_blank"
                      >
                        projeto completo no behance
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
                  </div>
                  <div className="text-container">
                    <h1>
                      Identidade visual & Web design: <br /> Luiz Brito
                    </h1>
                    <R.Divider />
                    <h2>
                      Nesse projeto fui contratado por outro ex-aluno do SENAI
                      para desenvolver uma identidade visual e prototipar o
                      portfólio dele.
                      <br />
                      Para a identidade visual criei a logo e uma paleta
                      condizente com a area dele (DevOps e Cloud Architect), ja
                      para o site em sí projetei o light/dark mode com uma
                      estetica moderna.
                    </h2>
                    <h2>
                      <R.Anchor
                        href="https://www.behance.net/gallery/218014731/Luiz-Brito-Branding-Web-Design"
                        target="_blank"
                      >
                        projeto completo no behance
                      </R.Anchor>
                    </h2>
                  </div>
                </div>
              </R.GroupBox>
            )}
            {activeTab === 3 && (
              <R.GroupBox
                style={{
                  display: "flex",
                  gap: 20,
                }}
              >
                <div className="project-container">
                  <div className="image-container">
                    <img src={project5} alt="" className="project-image" />
                  </div>
                  <div className="text-container">
                    <h1>
                      Identidade visual e Web Design: <br />
                      Suporte de Domingo
                    </h1>
                    <R.Divider />
                    <h2>
                      A suporte foi criada pelo meu ex-professor (e hoje chefe)
                      com o intuito de criar uma forte comunidade de devs e
                      designers.
                      <br />
                      <br />
                      Eu tive a oportunidade de desenvolver toda a identidade
                      visual (alem do símbolo) e prototipar o website responsivo
                      da Suporte.
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
                style={{
                  display: "flex",
                  gap: 20,
                }}
              >
                <div className="text-container">
                  <h1>Data Mastery</h1>
                  <R.Divider />
                  <h2>
                    Tambem para um ex-professor do SENAI, estou tendo a
                    oportunidade de participar como web designer na craicao da
                    landing page e outras paginas em conjunto para sua empresa
                    de ciencia de dados e power BI.
                    <br />
                    Nesse projeto e na Suporte de Domingo estou exclusivamente
                    na area do web design, sendo assim nao estou codando o
                    front-end.
                  </h2>
                </div>
              </R.GroupBox>
            )}
            {activeTab === 5 && (
              <R.GroupBox>
                <div className="project-container">
                  <div className="image-container">
                    <img src={project2} alt="" className="project-image" />
                  </div>
                  <div className="text-container">
                    <h1>
                      Identidade visual, prototipacao web e mobile:{" "}
                      <br />
                      Code Trouble
                    </h1>
                    <R.Divider />
                    <h2>
                      Acho que o maior projeto que ja desenvolvi enquanto Web
                      Designer. A code Trouble foi pensada como uma plataforma
                      brasileira de interacao entre desenvolvedores.
                      <br />
                      <br />
                      Nesse projeto eu fiquei responsavel por desenvolver uma
                      identidade visual concisa, que aguentasse o enorme tamanho
                      do website E do aplicativo que seriam criados a partir
                      dela.
                      <br />
                      Inclsuive, tambem prototipipamos todas as telas do website
                      e do aplicativo mobile, levando como base do projeto o
                      conceito de Atomic Design.
                    </h2>
                  </div>
                </div>
              </R.GroupBox>
            )}
          </R.TabBody>
        </R.WindowContent>
      </R.Window>
    </>
  );
}
