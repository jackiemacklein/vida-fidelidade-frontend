import "./../../../configs/dotenv";
import "isomorphic-fetch";

import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

/* import Kieee Rendering */
import { KieeeHead, useInitialData } from "./../../../components/Kieee";

/* import utils */
import { ModalContext } from "./../../../components/Forms/Modal";
import states from "./../../../utils/states.json";

/* import components */
import InternalTitle from "./../../../components/InternalTitle";
import Input from "./../../../components/Forms/Input";
import Header from "./../../../components/Panel/Header";
import Footer from "./../../../components/Footer";

/* import images */

/* import icons */

/* import styles */
import { Container, About, Description, Button } from "./styles";
import { Content, ContentTitle, Row, FormGroup } from "./styles";

function Component(props) {
  const { modal } = useContext(ModalContext);
  const history = useHistory();

  const [openedMenu, setOpenedMenu] = useState(false);
  const initialData = useInitialData(props, requestInitialData);

  const [plan, setPlan] = useState("");
  const [plan_adesao, setPlan_adesao] = useState("");
  const [plan_price, setPlan_price] = useState("");
  const [state, setState] = useState("");

  return (
    <>
      <Header setOpenedMenu={setOpenedMenu} openedMenu={openedMenu} />
      <Container onClick={() => setOpenedMenu(false)}>
        <About>
          <InternalTitle title1="Meu" title2="Plano" styles={{ marginBottom: "20px" }} />

          <Description>
            <span className="black">Conheça o seu plano</span>
          </Description>
          <Content autoComplete="off" autocomplete="off">
            <ContentTitle>Seu plano atual</ContentTitle>
            <Row>
              <Input name="plan" id="plan" initialValue={plan} label="Plano" type="text" readonly disabled />
            </Row>

            <Row>
              <Input name="plan_adesao" id="plan_adesao" initialValue={`R$ ${plan_adesao}`} label="Taxa de adesão" type="text" disabled readonly />

              <Input name="plan_price" id="plan_price" initialValue={`R$ ${plan_price}`} label="Mensalidade" type="text" disabled readonly />
            </Row>

            <Row>
              <Input name="state" id="state" initialValue={state} label="Situação" disabled readonly />

              <FormGroup>
                <Button>Termo de Adesão</Button>

                <Button>Contrato</Button>
              </FormGroup>
            </Row>
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
        title="Meu Plano - Vida Fidelidade"
        description="Conheça o seu plano"
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
