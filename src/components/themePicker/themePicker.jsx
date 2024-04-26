import React from "react";
import * as T from "react95/dist/themes";
import * as R from "react95";
import "./themePicker.css";
import { ThemeProvider } from "styled-components";

export default function ThemePicker({ logic, handle, childToParent }) {
  return (
    <>
      <R.Window>
        <div className={`${handle}`}>
          <R.WindowHeader
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            temas.exe
            <R.Button onClick={logic}>X</R.Button>
          </R.WindowHeader>
        </div>
        <R.WindowContent>
          <div className="grid">
            <ThemeProvider theme={T.original}>
              <R.Button
                onClick={() => {
                  childToParent(T.original);
                }}
              >
                original
              </R.Button>
            </ThemeProvider>
            <ThemeProvider theme={T.rainyDay}>
              <R.Button
                onClick={() => {
                  childToParent(T.rainyDay);
                }}
              >
                rainyDay
              </R.Button>
            </ThemeProvider>
            <ThemeProvider theme={T.tokyoDark}>
              <R.Button
                onClick={() => {
                  childToParent(T.tokyoDark);
                }}
              >
                tokyoDark
              </R.Button>
            </ThemeProvider>{" "}
            <ThemeProvider theme={T.matrix}>
              <R.Button
                onClick={() => {
                  childToParent(T.matrix);
                }}
              >
                matrix
              </R.Button>
            </ThemeProvider>{" "}
            <ThemeProvider theme={T.modernDark}>
              <R.Button
                onClick={() => {
                  childToParent(T.modernDark);
                }}
              >
                modernDark
              </R.Button>
            </ThemeProvider>{" "}
            <ThemeProvider theme={T.rose}>
              <R.Button
                onClick={() => {
                  childToParent(T.rose);
                }}
              >
                rose
              </R.Button>
            </ThemeProvider>{" "}
            <ThemeProvider theme={T.counterStrike}>
              <R.Button
                onClick={() => {
                  childToParent(T.counterStrike);
                }}
              >
                counterStrike
              </R.Button>
            </ThemeProvider>{" "}
            <ThemeProvider theme={T.slate}>
              <R.Button
                onClick={() => {
                  childToParent(T.slate);
                }}
              >
                slate
              </R.Button>
            </ThemeProvider>{" "}
            <ThemeProvider theme={T.ninjaTurtles}>
              <R.Button
                onClick={() => {
                  childToParent(T.ninjaTurtles);
                }}
              >
                ninjaTurtles
              </R.Button>
            </ThemeProvider>{" "}
            <ThemeProvider theme={T.fxDev}>
              <R.Button
                onClick={() => {
                  childToParent(T.fxDev);
                }}
              >
                fxDev
              </R.Button>
            </ThemeProvider>{" "}
            <ThemeProvider theme={T.molecule}>
              <R.Button
                onClick={() => {
                  childToParent(T.molecule);
                }}
              >
                molecule
              </R.Button>
            </ThemeProvider>{" "}
            <ThemeProvider theme={T.vistaesqueMidnight}>
              <R.Button
                onClick={() => {
                  childToParent(T.vistaesqueMidnight);
                }}
              >
                vistaesqueMidnight
              </R.Button>
            </ThemeProvider>
            <ThemeProvider theme={T.polarized}>
              <R.Button
                onClick={() => {
                  childToParent(T.polarized);
                }}
              >
                polarized
              </R.Button>
            </ThemeProvider>
            <ThemeProvider theme={T.vermillion}>
              <R.Button
                onClick={() => {
                  childToParent(T.vermillion);
                }}
              >
                vermillion
              </R.Button>
            </ThemeProvider>
            <ThemeProvider theme={T.candy}>
              <R.Button
                onClick={() => {
                  childToParent(T.candy);
                }}
              >
                candy
              </R.Button>
            </ThemeProvider>
          </div>
        </R.WindowContent>
      </R.Window>
    </>
  );
}
