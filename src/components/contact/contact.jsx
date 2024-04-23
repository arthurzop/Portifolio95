import React, { useRef, useState } from "react";
import * as R from "react95";
import "./contact.css";
import emailjs from "@emailjs/browser";

export default function Contact({ logic }) {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_slt4q1m', 'template_6vh5wgf', form.current, {
        publicKey: '2ZityfBO0AZhFtPQP'
      } )
      .then(
        () => {
         console.log('success!') 
        },
        (error) => {
          console.log('failed', error.text)
        }
      );
    e.target.reset();
  };

  return (
    <>
      <R.Window
        style={{
          position: "absolute",
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
            <form onSubmit={sendEmail} ref={form}>
              <h1>Feel free to send me anything on your mind !</h1>
              <R.Divider />
              <>
                <label htmlFor="">Name:</label>
                <R.TextInput type="text" name="from_name" />
              </>
              <>
                <label>Your E-mail:</label>
                <R.TextInput type="email" name="email" />
              </>
              <>
                <label>Message/Questions:</label>
                <R.TextInput multiline rows={6} name="message" />
              </>
              <R.Button
                size="md"
                style={{ width: 200, alignSelf: "center", fontWeight: 'bold'}}
                type="submit"
                value='Send'
              >Send!</R.Button>
            </form>
          </R.GroupBox>
        </R.WindowContent>
      </R.Window>
    </>
  );
}
