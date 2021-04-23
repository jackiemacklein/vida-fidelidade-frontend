import "./../../configs/dotenv";
import "isomorphic-fetch";

import React, { useState, useEffect } from "react";

/* import Kieee Rendering */
import { KieeeHead, useInitialData } from "./../../components/Kieee";

/* import utils */
import { handleAnchor } from "./../../utils/functions";

/* import components */
import Title from "./../../components/Title";
import Header from "./../../components/Header";
import Benefits from "./../../components/Benefits";
import Plans from "./../../components/Plans";
import Questions from "./../../components/Questions";
import Links from "./../../components/Links";
import Footer from "./../../components/Footer";

/* import images */
import logoBetoni from "./../../assets/images/logoBetoni.png";
import logoGenerali from "./../../assets/images/logoGenerali.png";
import siteSecurity from "./../../assets/images/siteSecurity.gif";

/* import icons */

/* import styles */
import { Container, About, Description, Button, Partners } from "./styles";

function Component(props) {
  const [openedMenu, setOpenedMenu] = useState(false);

  const initialData = useInitialData(props, requestInitialData);

  useEffect(() => {}, [initialData]);

  return (
    <>
      <Header setOpenedMenu={setOpenedMenu} openedMenu={openedMenu} showHeader />
      <Container onClick={() => setOpenedMenu(false)}>
        <About>
          <Description className="mt90">
            Conheça o <span className="green">cartão de descontos</span> em saúde para a sua <span className="orange">família!</span>
            <br />
            <span className="black">
              Preços <strong>acessíveis</strong>, descontos <strong>reais</strong> e muitas <strong>vantagens</strong>.
            </span>
          </Description>
          <Button onClick={() => handleAnchor("planos")}>Assine agora</Button>
        </About>
        <Benefits />
        <About>
          <Title title1="O que é o" title2=" Vida cartão de fidelidade?" styles={{ marginBottom: "20px" }} />

          <Description>
            <span className="black">
              Com o <strong>Vida Cartão Fidelidade</strong> você cuida da sua saúde e de quem mais ama, com ótimos descontos e sem filas. Pagando apenas uma
              mensalidade, você e seus dependentes tem acesso a <span className="orange">consultas</span>,<span className="orange">vacinas</span> e{" "}
              <span className="orange">exames</span> que fazem parte do complexo <span className="orange">Vida</span>, além do plano odontológico,{" "}
              <span className="orange">seguro de vida</span> e <span className="orange">assistência funeral</span> para o titular.
            </span>
          </Description>

          <Button onClick={() => handleAnchor("planos")}>Assine agora</Button>
        </About>
        <Plans />
        <Links />
        <Questions />

        <Partners>
          <a href="https://clinicabetoni.com.br/" target="_blank" title="Site da Betoni Odontologia" alt="Site da Betoni Odontologia" rel="opener referrer">
            <img src={logoBetoni} alt="Betoni Odontologia" title="Betoni Odontologia" />
          </a>

          <a href="https://www.generali.com.br/" target="_blank" title="Site da Generali Seguros" alt="Site da Generali Seguros" rel="opener referrer">
            <img src={logoGenerali} alt="Generali Seguros" title="Generali Seguros" />
          </a>

          <a href="javascript:vopenw()">
            <img
              src={siteSecurity}
              border="0"
              align="center"
              alt="Um site validado pela Certisign indica que nossa empresa concluiu satisfatoriamente todos os procedimentos para determinar que o domínio validado é de propriedade ou se encontra registrado por uma empresa ou organização autorizada a negociar por ela ou exercer qualquer atividade lícita em seu nome."
            />
          </a>
        </Partners>
      </Container>
      <Footer onClick={() => setOpenedMenu(false)} />
    </>
  );
}

//Function essential to get data initial in server side
async function requestInitialData() {
  let siteConfig = { sucesss: true };
  let plans = [];

  /*  plans = await fetch(`${process.env.REACT_APP_API}/produtos/`, {
    method: "GET",
    headers: {
      Authorization:
        "bearer ",
    },
  })
    .then(response => response.json())
    .catch(error => {
      console.log("erro: ", error);
      return [];
    });

  console.log("initial:", plans);*/

  return { siteConfig, plans };
}

//Preload to render head of html by data server side
function Head({ siteConfig }) {
  if (siteConfig) {
    return (
      <KieeeHead
        themeColor="#0D756F"
        title="Vida Fidelidade - Cartão de descontos em saúde"
        description="Pagando uma pequena mensalidade, você e seus dependentes tem descontos em consultas e exames que fazem parte do complexo Vida, além do plano odontológico e muitos outros Benefícios."
        appleIcon="https://fidelidade.vidavg.com.br/logo512.png"
        icon="https://fidelidade.vidavg.com.br/logo512.png"
        imagePath="https://fidelidade.vidavg.com.br/logo512.png"
        siteName="Vida Fidelidade"
        url={process.env.REACT_APP_SITE_HOST}
        favicon="/static/favicon.png"
        manifest="/static/manifest.json"
        canonical="https://fidelidade.vidavg.com.br"
      />
    );
  } else {
    return <></>;
  }
}

export default { Component, requestInitialData, Head };
