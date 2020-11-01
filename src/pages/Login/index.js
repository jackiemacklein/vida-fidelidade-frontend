import "./../../configs/dotenv";
import "isomorphic-fetch";

import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

/* import Kieee Rendering */
import { KieeeHead, useInitialData } from "./../../components/Kieee";

/* import services */
import api from "./../../services/api";
import { login } from "./../../services/auth";

/* import utils */
import { ModalContext } from "./../../components/Forms/Modal";

/* import components */
import InternalTitle from "./../../components/InternalTitle";
import Input from "./../../components/Forms/Input";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";

/* import images */

/* import icons */

/* import styles */
import { Container, About, Description, Button } from "./styles";
import { Content, ContentTitle, Row } from "./styles";

function Component(props) {
  const modal = useContext(ModalContext);
  const history = useHistory();

  const [openedMenu, setOpenedMenu] = useState(false);
  const initialData = useInitialData(props, requestInitialData);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async event => {
    event.preventDefault();

    try {
      setLoading(true);
      const { data } = await api.post("/auth/login", { type: 1, email, password });
      if (data) {
        console.log(data);
        await login(data.access_token, data.id, data.email, data.user);
        history.push(process.env.REACT_APP_PAGE_CONSTRUCTION === "true" ? "/site/portal/meus-dados" : "/portal/meus-dados");
      }
    } catch (e) {
      console.log(e);
      if (e.response && e.response.status === 401) {
        modal.show(true, "Tente novamente!", "", "Verifique seu usuário e senha!", "", "", "Tentar novamente", () => () => modal.hide(), true);
      } else {
        modal.show(
          true,
          "Ocorreu um erro!",
          "Desculpe o transtorno! Identificamos um instabilidade em nossos serviços!",
          "Tente novamente!",
          "",
          "",
          "Tentar novamente",
          () => () => modal.hide(),
          true,
        );
      }
    }

    setLoading(false);
  };

  useEffect(() => {}, [initialData]);

  return (
    <>
      <Header setOpenedMenu={setOpenedMenu} openedMenu={openedMenu} internalPage />
      <Container onClick={() => setOpenedMenu(false)}>
        <About>
          <InternalTitle title1="" title2="Login" styles={{ marginBottom: "20px" }} />

          <Description>
            <span className="black">Acesse aqui o seu portal de assinante</span>
          </Description>
          <Content autoComplete="off" autocomplete="off" onSubmit={handleLogin}>
            <ContentTitle>&nbsp;</ContentTitle>
            <Row>
              <Input
                name="email"
                id="email"
                initialValue={email}
                onChange={text => setEmail(text)}
                label="E-mail *"
                infoText="Campo obrigatório"
                required
                type="email"
              />
              <Input
                name="password"
                id="password"
                initialValue={password}
                onChange={text => setPassword(text)}
                label="Senha *"
                infoText="Campo obrigatório"
                required
                type="password"
              />
            </Row>

            <Button disabled={loading}>{loading ? `CARREGANDO...` : "ACESSAR"}</Button>
          </Content>
        </About>
      </Container>
      <Footer onClick={() => setOpenedMenu(false)} />
    </>
  );
}

//Function essential to get data initial in server side
async function requestInitialData() {
  let siteConfig = { sucesss: true };

  return { siteConfig };
}

//Preload to render head of html by data server side
function Head({ siteConfig }) {
  if (siteConfig) {
    return (
      <KieeeHead
        themeColor="#0D756F"
        title="Portal do assinante - Vida Fidelidade"
        description="Acesse e veja como é fácil administrar seus dados e dependentes"
        appleIcon="https://fidelidade.vidavg.com.br/logo512.png"
        icon="https://fidelidade.vidavg.com.br/logo512.png"
        imagePath="https://fidelidade.vidavg.com.br/logo512.png"
        siteName="Vida Fidelidade"
        url={process.env.REACT_APP_SITE_HOST}
        favicon="/static/favicon.png"
        manifest="/static/manifest.json"
      />
    );
  } else {
    return <></>;
  }
}

export default { Component, requestInitialData, Head };
