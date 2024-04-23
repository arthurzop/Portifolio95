import React, { useEffect, useState } from "react";
import "./App.css";
import * as R from "react95";
import * as T from 'react95/dist/themes' //temas do react95
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Draggable from "react-draggable";

//imagens
import Windows from "./assets/windows_logo.ico";
import Dark_Agent from "./assets/Dark_Agent.ico";
import Book from "./assets/Book.ico";
import About from "./assets/About.ico";
import Off from "./assets/Off.ico";
import Folder from "./assets/Projects.ico";
import Telephone from "./assets/Contact.ico";



// Importando as fontes do React 95
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import AppIcon from "./components/appIcon/appIcon";
import OffScreen from "./components/offScreen/offScreen";
import AboutMe from "./components/aboutMe/aboutMe";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";

// resetando os estilos globais e  adicionando a fonte personalizada
const GlobalStyles = createGlobalStyle`
  ${R.styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

export default function App() {
  let [open, setOpen] = useState(false); //abrir menu
  let [time, setTime] = useState(new Date()); //pegar hora
  let [about, setAbout] = useState(true); //abrir/fechar about me
  let [project, setProject] = useState(false); //abrir/fechar app project
  let [contact, setContact] = useState(false); //abrir/fechar app contact
  let [off, setOff] = useState(false); //abrir pagina de saida

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  });

  const handleClick = (item) => {
    switch (item) {
      case "github":
        let win = window.open("https://github.com/arthurzop", "_blank");
        win.focus();

      case "notion":
        win = window.open(
          "https://trusted-surfboard-d28.notion.site/Documenta-o-PokeApi-React95-ec201bb47a4e4df5aa5c4280e24ae84e?pvs=4",
          "_blank"
        );
        win.focus();

      case "exit":
        setOff(true);
        setTimeout(() => {
          window.close();
          setOff(false);
        }, 3000);
    }
  };

  const handleIconClick = (icon) => {
    if (icon == "about") {
      setAbout(!about);
    } else if (icon == "project") {
      setProject(!project);
    } else if (icon == "contact") {
      setContact(!contact);
    }
  };

  return (
    <>
      {off && <OffScreen />}
      <body>
        <GlobalStyles />
        <ThemeProvider theme={T.original}>
          <div className="apps-container">
            <AppIcon
              label={"sobre mim"}
              img={About}
              logic={() => {
                handleIconClick("about");
              }}
            />
            <AppIcon
              label={"projetos"}
              img={Folder}
              logic={() => {
                handleIconClick("project");
              }}
            />

            <AppIcon
              label={"contato"}
              img={Telephone}
              logic={() => {
                handleIconClick("contact");
              }}
            />
          </div>
          <div className="open-apps-container">
            {project && (
              <Draggable
                axis="both"
                handle=".handle"
                position={null}
                grid={[1, 1]}
                scale={1}
                defaultPosition={{ x: 1000, y: 0 }}
                allowAnyClick
              >
                <div className="handle">
                  <Projects
                    logic={() => {
                      setProject(!project);
                    }}
                  />
                </div>
              </Draggable>
            )}
            {contact && (
              <Draggable
                axis="both"
                handle=".handle"
                position={null}
                grid={[1, 1]}
                scale={1}
              >
                <div className="handle">
                  <Contact
                    logic={() => {
                      setContact(!contact);
                    }}
                  />
                </div>
              </Draggable>
            )}
            {about && (
              <Draggable
                axis="both"
                handle=".handle"
                position={null}
                grid={[1, 1]}
                scale={1}
                defaultPosition={{ x: 450, y: 70 }}
              >
                <div className="handle">
                  <AboutMe
                    logic={() => {
                      setAbout(!about);
                    }}
                  />
                </div>
              </Draggable>
            )}
          </div>
          <div className="toolbar-container">
            <R.AppBar position="relative">
              <R.Toolbar
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="subcontainer">
                  <R.Button
                    size="lg"
                    primary
                    style={{
                      gap: 10,
                      alignItems: "center",
                      justifyContent: "space-around",
                      fontWeight: "bold",
                      width: 110,
                    }}
                    onClick={() => setOpen(!open)}
                    active={open} //se tiver true, fica active (afundado)
                  >
                    <img className="icon" src={Windows} />
                    menu
                  </R.Button>
                  {open && (
                    
                    <R.MenuList
                      style={{
                        position: "absolute",
                        left: 0,
                        bottom: "100%",
                        zIndex: 10,
                        display: 'flex',
                      }}
                    >
                      <div className="column">
                        <h1>portfolio
                          <span>
                            95
                          </span>
                        </h1>
                      </div>
                      <div>
                      <R.MenuListItem
                        style={{
                          gap: 10,
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          handleClick("github");
                        }}
                      >
                        <img className="icon" src={Dark_Agent} alt="" />
                        <R.Anchor>meu github</R.Anchor>
                      </R.MenuListItem>
                      <R.Divider />
                      <R.MenuListItem
                        style={{
                          gap: 10,
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          handleClick("notion");
                        }}
                      >
                        <img className="icon" src={Book} alt="" />
                        <R.Anchor>documentacao</R.Anchor>
                      </R.MenuListItem>
                      <R.Divider />
                      <R.MenuListItem
                        style={{
                          gap: 10,
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          handleClick("exit");
                        }}
                      >
                        <img src={Off} alt="" />
                        <R.Anchor>sair</R.Anchor>
                      </R.MenuListItem>
                      </div>
                    </R.MenuList>
                  )}
                  <R.Handle
                    style={{
                      height: "45px",
                    }}
                  ></R.Handle>
                  {about && (
                    <R.Button
                      onClick={() => {
                        handleIconClick("about");
                      }}
                      size="lg"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontWeight: "bold",
                      }}
                    >
                      <img src={About} className="icon" />
                      sobre mim
                    </R.Button>
                  )}
                  {project && (
                    <R.Button
                      onClick={() => {
                        handleIconClick("project");
                      }}
                      size="lg"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontWeight: "bold",
                      }}
                    >
                      <img src={Folder} className="icon" />
                      meus projetos
                    </R.Button>
                  )}
                  {contact && (
                    <R.Button
                      onClick={() => {
                        handleIconClick("contact");
                      }}
                      size="lg"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontWeight: "bold",
                      }}
                    >
                      <img src={Telephone} className="icon" />
                      contato
                    </R.Button>
                  )}
                </div>
                <R.Avatar
                  square
                  style={{
                    width: "fit-content",
                    height: 40,
                    alignItems: "center",
                    display: "flex",
                    fontWeight: "bold",
                    paddingInline: 25,
                    paddingTop: 5,
                  }}
                >
                  {time.toLocaleTimeString()}
                </R.Avatar>
              </R.Toolbar>
            </R.AppBar>
          </div>
        </ThemeProvider>
      </body>
    </>
  );
}
