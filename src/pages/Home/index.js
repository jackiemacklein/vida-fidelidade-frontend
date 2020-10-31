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
import Footer from "./../../components/Footer";

/* import images */

/* import icons */

/* import styles */
import { Container, About, Description, Button } from "./styles";

function Component(props) {
  const [openedMenu, setOpenedMenu] = useState(false);

  const initialData = useInitialData(props, requestInitialData);
  //const [aboutConfig, setAboutConfig] = useState(initialData?.aboutConfig ?? {});
  //const [consultingConfig, setConsultingConfigConfig] = useState(initialData?.consultingConfig ?? {});
  //const [pressOfficeConfig, setPressOfficeConfig] = useState(initialData?.pressOfficeConfig ?? {});
  //const [teams, setTeams] = useState(initialData.teams?.data ?? []);
  //const [partners, setPartners] = useState(initialData.partners?.data ?? []);

  useEffect(() => {
    //setAboutConfig(initialData?.aboutConfig ?? {});
    //setConsultingConfigConfig(initialData?.consultingConfig ?? {});
    //setPressOfficeConfig(initialData?.pressOfficeConfig ?? {});
    //setTeams(initialData.teams?.data ?? []);
    //setPartners(initialData.partners?.data ?? []);
  }, [initialData]);

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
              <span className="orange">seguro de vida</span> e <span className="orange">auxílio funeral</span> para o titular.
            </span>
          </Description>

          <Button onClick={() => handleAnchor("planos")}>Assine agora</Button>
        </About>
        <Plans />
        <Questions />
      </Container>
      <Footer onClick={() => setOpenedMenu(false)} />
    </>
  );
}

//Function essential to get data initial in server side
async function requestInitialData() {
  let siteConfig = { sucesss: true };
  let plans = [];

  plans = await fetch(`${process.env.REACT_APP_API}/produtos/`, {
    method: "GET",
    headers: {
      Authorization:
        "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjhkOTZhMjhjNDQ2NmNlOGI3MDExMzkiLCJuYW1lIjoiSmFja2nDqiBNYWNrbGVpbiIsImVtYWlsIjoiamFja2llbWFja2xlaW5AZ21haWwuY29tIiwidHlwZSI6MCwiaWF0IjoxNjAzNzA4Nzc3LCJleHAiOjE2MDM3MzAzNzd9.noCWInXySy2PEJT97oZPtcmgin6ebNfLKtWb-6_-LbA",
    },
  })
    .then(response => response.json())
    .catch(error => {
      console.log("erro: ", error);
      return [];
    });

  console.log("initial:", plans);

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
