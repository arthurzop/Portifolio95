import React, { useRef, useState } from "react";
import * as R from "react95";
import "./contact.css";
import emailjs from "@emailjs/browser";

//images
import Linkedin from '../../assets/Linkedin.ico'
import Instagram from '../../assets/Instagram.ico'
import Github from '../../assets/Github.ico'

export default function Contact({ logic }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_slt4q1m", "template_6vh5wgf", form.current, {
        publicKey: "2ZityfBO0AZhFtPQP",
      })
      .then(
        () => {
          console.log("success!");
        },
        (error) => {
          console.log("failed", error.text);
        }
      );
    e.target.reset();
  };

  const [state, setState] = useState({
    activeTab: 0,
  });

  const handleChange = (value, event) => {
    setState({ activeTab: value });
  };

  const { activeTab } = state;

  const handleClick = (name) => {
    switch (name){
      case 'linkedin':
        let win = window.open('https://www.linkedin.com/in/artur-medeiros-7169b8266/', '_blank');
        win.focus();

      case 'github':
        win = window.open("https://github.com/arthurzop", "_blank");
        win.focus();

      case 'instagram':
        win = window.open("https://instagram.com/arthurzop", "_blank");
        win.focus();

    }
  }

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
              Email-me
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
              Other Socials
            </R.Tab>
          </R.Tabs>
          <R.TabBody>
            {activeTab === 0 && (
              <R.GroupBox label="Contact App">
                <form onSubmit={sendEmail} ref={form}>
                  <h1>Feel free to send me anything on your mind !</h1>

                  <>
                    <label htmlFor="">Your Name:</label>
                    <R.TextInput
                      type="text"
                      name="from_name"
                      placeholder="Artur :)"
                    />
                  </>
                  <>
                    <label>Your E-mail:</label>
                    <R.TextInput
                      type="email"
                      name="email"
                      placeholder="email@email.com"
                    />
                  </>
                  <>
                    <label>Message/Questions:</label>
                    <R.TextInput
                      multiline
                      rows={6}
                      type="text"
                      name="message"
                      placeholder="Talk about you too!!"
                    />
                  </>
                  <R.Button
                    size="md"
                    style={{
                      width: 200,
                      alignSelf: "center",
                      fontWeight: "bold",
                    }}
                    type="submit"
                    value="Send"
                  >
                    Send!
                  </R.Button>
                </form>
              </R.GroupBox>
            )}
            {activeTab === 1 && (
              <R.GroupBox>
                <div className="social-container">
                  <a className="row-container" onClick={() => {handleClick('linkedin')}}>
                      <img src={Linkedin} className="social-image"/>
                    <R.Anchor>
                      Linkedin
                    </R.Anchor>
                  </a>
                  <a className="row-container" onClick={() => {handleClick('github')}}>
                      <img src={Github} className="social-image"/>
                    <R.Anchor>
                      Github
                    </R.Anchor>
                  </a>
                  <a className="row-container" onClick={() => {handleClick('instagram')}}>
                      <img src={Instagram} className="social-image"/>
                    <R.Anchor>
                      Instagram
                    </R.Anchor>
                  </a>
                </div>
              </R.GroupBox>
            )}
          </R.TabBody>
        </R.WindowContent>
      </R.Window>
    </>
  );
}
