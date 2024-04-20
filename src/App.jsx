import React, { useEffect, useState } from "react";
import "./App.css";
import * as R from "react95";
import { createGlobalStyle, ThemeProvider } from "styled-components";

//imagens
import Windows from "./assets/windows_logo.ico";
import Dark_Agent from "./assets/Dark_Agent.ico";
import Book from "./assets/Book.ico";
import About from "./assets/About.ico";
import Off from "./assets/Off.ico";
import Projects from "./assets/Projects.ico";
import Contact from "./assets/Contact.ico";

/*Pegando o tema original do React 95*/
import original from "react95/dist/themes/original";

// Importando as fontes do React 95
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import AppIcon from "./components/appIcon/appIcon";
import OffScreen from "./components/offScreen/offScreen";

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
  let [open, setOpen] = useState(false);
  let [time, setTime] = useState(new Date());
  let [about, setAbout] = useState(false);
  let [off, setOff] = useState(false);

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
        }, 3000);
    }
  };

  const handleIconClick = (icon) => {
    if (icon == "about") {
      setAbout(!about);
    }
  };

  return (
    <>
      {off && <OffScreen />}
      <body>
        <GlobalStyles />
        <ThemeProvider theme={original}>
          <div className="apps-container">
            <AppIcon
              label={"About Me"}
              img={About}
              logic={() => {
                handleIconClick("about");
              }}
            />
            {about && <>adssad</>}
            <AppIcon label={"Projects"} img={Projects} />
            <AppIcon label={"Contact"} img={Contact} />
          </div>
          <div className="toolbar-container">
            <R.AppBar position="relative">
              <R.Toolbar
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
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
                  Menu
                </R.Button>
                {open && (
                  <R.MenuList
                    style={{
                      position: "absolute",
                      left: 0,
                      bottom: "100%",
                    }}
                  >
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
                      <R.Anchor>My Github</R.Anchor>
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
                      <R.Anchor>Documentation</R.Anchor>
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
                      <R.Anchor>Exit</R.Anchor>
                    </R.MenuListItem>
                  </R.MenuList>
                )}
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
