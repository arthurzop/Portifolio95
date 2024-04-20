import React, { useEffect, useState } from "react";
import "./App.css";
import * as R from "react95";
import { createGlobalStyle, ThemeProvider } from "styled-components";

//imagens
import Windows from "./assets/windows_logo.ico";
import Dark_Agent from "./assets/Dark_Agent.ico";
import Book from "./assets/Book.ico";
import Users from "./assets/Users.ico";

/*Pegando o tema original do React 95*/
import original from "react95/dist/themes/original";

// Importando as fontes do React 95
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import AppIcon from "./components/appIcon/appIcon";

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
  let [gen1, setGen1] = useState(false)

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  });

  const handleClick = (item) => {
    //item = setado no onclick
    if (item == "github") {
      //pega o nome pelo onClick e compara
      const win = window.open("https://github.com/arthurzop", "_blank"); // seta uma varivel (link)
      win.focus(); //redireciona pro link da variavel
    } else if (item == "notion") {
      const win = window.open(
        "https://trusted-surfboard-d28.notion.site/Documenta-o-PokeApi-React95-ec201bb47a4e4df5aa5c4280e24ae84e?pvs=4",
        "_blank"
      );
      win.focus();
    }
  };

  const handleIconClick = (icon) => {
    if (icon == 'gen1'){
      setGen1(!gen1)
    }
  } 

  return (
      <body>
        <GlobalStyles />
        <ThemeProvider theme={original}>
          <div className="apps-container">
            <AppIcon label={'Generation 1'} img={Users} logic={() => {handleIconClick('gen1')}}/>
            {gen1 && (
              <>
                adssad
              </>
            )}
            <AppIcon label={'Generation 2'} img={Windows}/>
            <AppIcon label={'Generation 3'} img={Dark_Agent}/>
           
            
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
  );
}
