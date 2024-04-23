import React, { useRef, useState } from "react";
import * as R from "react95";
import "./contact.css";
import emailjs from "@emailjs/browser";

//images
import Linkedin from "../../assets/Linkedin.ico";
import Instagram from "../../assets/Instagram.ico";
import Github from "../../assets/Github.ico";

export default function Contact({ logic }) {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const [open, isOpen] = useState(true);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (email == "" || nome == "" || mensagem == "") {
      alert("Please fill every area!");
      e.target.reset()
    } else {
      

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
      
    }
    setNull()
    e.target.reset();
  };

  const setNull = () => {
    setEmail('')
    setNome('')
    setMensagem('')
  }

  const [state, setState] = useState({
    activeTab: 0,
  });

  const handleChange = (value, event) => {
    setState({ activeTab: value });
  };

  const { activeTab } = state;

  const handleClick = (name) => {
    switch (name) {
      case "linkedin":
        let win = window.open(
          "https://www.linkedin.com/in/artur-medeiros-7169b8266/",
          "_blank"
        );
        win.focus();

      case "github":
        win = window.open("https://github.com/arthurzop", "_blank");
        win.focus();

      case "instagram":
        win = window.open("https://instagram.com/arthurzop", "_blank");
        win.focus();
    }
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
          contato.exe
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
              enviar um email
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
              redes sociais
            </R.Tab>
          </R.Tabs>
          <R.TabBody>
            {activeTab === 0 && (
              <R.GroupBox label="Contact App">
                <form onSubmit={sendEmail} ref={form}>
                  <h1>sinta-se livre pra me mandar perguntas ou qualquer coisa em mente !</h1>

                  <>
                    <label htmlFor="">seu nome:</label>
                    <R.TextInput
                      type="text"
                      name="from_name"
                      placeholder="artur O.o"
                      value={nome}
                      onChange={(e) => {
                        setNome(e.target.value);
                      }}
                    />
                  </>
                  <>
                    <label>seu email:</label>
                    <R.TextInput
                      type="email"
                      name="email"
                      placeholder="email@email.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </>
                  <>
                    <label>mensagens/perguntas</label>
                    <R.TextInput
                      multiline
                      rows={6}
                      type="text"
                      name="message"
                      placeholder="fale sobre voce tambem!"
                      value={mensagem}
                      onChange={(e) => {
                        setMensagem(e.target.value);
                      }}
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
                    value="enviar"
                  >
                    enviar !!
                  </R.Button>
                </form>
              </R.GroupBox>
            )}
            {activeTab === 1 && (
              <R.GroupBox>
                <div className="social-container">
                  <a
                    className="row-container"
                    onClick={() => {
                      handleClick("linkedin");
                    }}
                  >
                    <img src={Linkedin} className="social-image" />
                    <R.Anchor>linkedin</R.Anchor>
                  </a>
                  <a
                    className="row-container"
                    onClick={() => {
                      handleClick("github");
                    }}
                  >
                    <img src={Github} className="social-image" />
                    <R.Anchor>github</R.Anchor>
                  </a>
                  <a
                    className="row-container"
                    onClick={() => {
                      handleClick("instagram");
                    }}
                  >
                    <img src={Instagram} className="social-image" />
                    <R.Anchor>instagram</R.Anchor>
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
