import React, { useState } from "react";
import * as R from "react95";
import "./contact.css";

export default function Contact({ logic }) {
  const handleSubmit = () => {};
  return (
    <>
      <R.Window
        style={{
          position: "absolute",
          top: "25%",
          left: "10%",
          width: 650,
          height: "fit-content",
          userSelect: "text",
          zIndex: 1,
        }}
      >
        <R.WindowHeader
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          contact me.exe
          <R.Button onClick={logic}>X</R.Button>
        </R.WindowHeader>
        <R.WindowContent>
          <R.GroupBox label="Contact App">
            <form onSubmit={handleSubmit}>
              <h1>Feel free to send me questions or anything on your mind !</h1>
              <R.Divider />
              <>
                <label htmlFor="">Name:</label>
                <R.TextInput />
              </>
              <>
                <label>E-mail:</label>
                <R.TextInput />
              </>
              <>
                <label>Comment/Questions:</label>
                <R.TextInput />
              </>
              <R.Button size="md" style={{ width: 200, alignSelf: "center" }}>
                <input type="submit" value="Send" />
              </R.Button>
            </form>
          </R.GroupBox>
        </R.WindowContent>
      </R.Window>
    </>
  );
}
