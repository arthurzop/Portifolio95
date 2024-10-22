import React, { useEffect, useState } from "react";
import "./App.css";
import * as R from "react95";
import * as T from "react95/dist/themes"; //temas do react95
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Draggable from "react-draggable";
import { Analytics } from "@vercel/analytics/react";

//imagens
import Windows from "./assets/windows_logo.ico";
import Dark_Agent from "./assets/Dark_Agent.ico";
import Book from "./assets/Book.ico";
import About from "./assets/About.ico";
import Off from "./assets/Off.ico";
import Folder from "./assets/Projects.ico";
import Telephone from "./assets/Contact.ico";
import Palette from "./assets/Theme.ico";
import Form from "./assets/Form.ico";

// Importando as fontes do React 95
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

//componentes e telas
import AppIcon from "./components/appIcon/appIcon";
import OffScreen from "./components/offScreen/offScreen";
import AboutMe from "./components/aboutMe/aboutMe";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import SplashScreen from "./components/splashScreen/splashScreen";
import ThemePicker from "./components/themePicker/themePicker";
import CurriculoApp from "./components/curriculo/curriculo";

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
  let [themePicker, setThemePicker] = useState(false); //abrir/fechar app contact
  let [off, setOff] = useState(false); //abrir pagina de saida
  let [isLoading, setIsLoading] = useState(false); //loading pra splash screen
  let [curriculo, setCurriculo] = useState(false);

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  const handleClick = (item) => {
    switch (item) {
      case "github":
        let win = window.open(
          "https://github.com/arthurzop/Portifolio95",
          "_blank"
        );
        win.focus();

      case "notion":
        win = window.open(
          "https://trusted-surfboard-d28.notion.site/Documenta-o-PokeApi-React95-ec201bb47a4e4df5aa5c4280e24ae84e?pvs=4",
          "_blank"
        );
        win.focus();

      case "exit":
        setNull();
        setOff(true);

        setTimeout(() => {
          window.close();
          setOff(false);
        }, 2500);
    }
  };

  const setNull = () => {
    setAbout(false);
    setContact(false);
    setProject(false);
  };

  const handleIconClick = (icon) => {
    if (icon == "about") {
      setAbout(!about);
    } else if (icon == "project") {
      setProject(!project);
    } else if (icon == "contact") {
      setContact(!contact);
    } else if (icon == "themes") {
      setThemePicker(!themePicker);
    } else if (icon == "curriculo") {
      setCurriculo(!curriculo);
    }
  };

  let [choosenTheme, setChoosenTheme] = useState(T.original);

  const childToParent = (childdata) => {
    setChoosenTheme(childdata);
  };

  return isLoading ? (
    <SplashScreen />
  ) : (
    <>
      {off && <OffScreen />}
      <body>
        <Analytics />
        <GlobalStyles />
        <ThemeProvider theme={choosenTheme}>
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

            <AppIcon
              label={"temas"}
              img={Palette}
              logic={() => {
                handleIconClick("themes");
              }}
            />
            <AppIcon
              label={`currículo`}
              img={Form}
              logic={() => {
                handleIconClick("curriculo");
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
                allowAnyClick
                defaultPosition={{ x: 700, y: 100 }}
              >
                <div className="">
                  <Projects
                    logic={() => {
                      setProject(!project);
                    }}
                    handle="handle"
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
                <div className="">
                  <Contact
                    logic={() => {
                      setContact(!contact);
                    }}
                    handle="handle"
                  />
                </div>
              </Draggable>
            )}
            {about && (
              <Draggable
                axis="both"
                handle=".handle" //coloca na classe que pode ser arrastada
                grid={[1, 1]} //a fluidez do drag (1 é o normal, fluido)
                scale={1} //quanta 'força' precisa pra arrastar (1 é o normal, fluido)
                defaultPosition={{ x: 450, y: 50 }}
              >
                <div className="">
                  <AboutMe
                    logic={() => {
                      setAbout(!about);
                    }}
                    handle="handle"
                  />
                </div>
              </Draggable>
            )}
            {themePicker && (
              <Draggable
                axis="both"
                handle=".handle" //coloca na classe que pode ser arrastada
                grid={[1, 1]} //a fluidez do drag (1 é o normal, fluido)
                scale={1} //quanta 'força' precisa pra arrastar (1 é o normal, fluido)
                defaultPosition={{ x: 500, y: 20 }}
              >
                <div className="">
                  <ThemePicker
                    childToParent={childToParent}
                    logic={() => {
                      setThemePicker(!themePicker);
                    }}
                    handle="handle"
                  />
                </div>
              </Draggable>
            )}
            {curriculo && (
              <Draggable
                axis="both"
                handle=".handle" //coloca na classe que pode ser arrastada
                grid={[1, 1]} //a fluidez do drag (1 é o normal, fluido)
                scale={1} //quanta 'força' precisa pra arrastar (1 é o normal, fluido)
                defaultPosition={{ x: 400, y: 20 }}
              >
                <div className="">
                  <CurriculoApp
                    logic={() => {
                      setCurriculo(!curriculo);
                    }}
                    handle="handle"
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
                    <img className="icon" src={Windows} alt="icone windows 95 menu"/>
                    menu
                  </R.Button>
                  {open && (
                    <R.MenuList
                      style={{
                        position: "absolute",
                        left: 0,
                        bottom: "100%",
                        zIndex: 9,
                        display: "flex",
                      }}
                    >
                      <div className="column">
                        <h1>
                          portfolio
                          <span>95</span>
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
                          <img
                            className="icon"
                            src={Dark_Agent}
                            alt="icone windows 95 agente"
                          />
                          <h1>Repositorio github</h1>
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
                          <img
                            className="icon"
                            src={Book}
                            alt="icone windows 95 livro"
                          />
                          <h1>Documentacao</h1>
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
                          <img src={Off} alt="icone windows 95 computador" />
                          <h1>Sair</h1>
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
                      <img src={About} className="icon" alt="icone windows 95 lupa com cd"/>
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
                      <img src={Folder} className="icon" alt="icone windows 95 pasta de arquivos"/>
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
                      <img src={Telephone} className="icon" alt="icone windows 95 telefone"/>
                      contato
                    </R.Button>
                  )}
                  {themePicker && (
                    <R.Button
                      onClick={() => {
                        handleIconClick("themes");
                      }}
                      size="lg"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontWeight: "bold",
                      }}
                    >
                      <img src={Palette} className="icon" alt="icone windows 95 paleta de cores"/>
                      temas
                    </R.Button>
                  )}
                  {curriculo && (
                    <R.Button
                      onClick={() => {
                        handleIconClick("curriculo");
                      }}
                      size="lg"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontWeight: "bold",
                      }}
                    >
                      <img src={Form} className="icon" alt="icone windows 95 lapis no papel"/>
                      curriculo
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
                    paddingInline: 20,
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
