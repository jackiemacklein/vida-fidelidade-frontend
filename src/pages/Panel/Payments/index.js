import "./../../../configs/dotenv";
import "isomorphic-fetch";

import React, { useState, useEffect, useContext } from "react";
import { useHistory, Link } from "react-router-dom";

/* import Kieee Rendering */
import { KieeeHead, useInitialData } from "./../../../components/Kieee";

/* import utils */
import { ModalContext } from "./../../../components/Forms/Modal";

/* import components */
import InternalTitle from "./../../../components/InternalTitle";
import Input from "./../../../components/Forms/Input";
import Select from "./../../../components/Forms/Select";
import Header from "./../../../components/Panel/Header";
import Footer from "./../../../components/Footer";

import Table from "./table.js";

/* import images */

/* import icons */

/* import styles */
import { Container, About, Description, Button } from "./styles";
import { Content, ContentTitle, Row, ButtonLink } from "./styles";

function Component(props) {
  const { modal } = useContext(ModalContext);
  const history = useHistory();

  const [openedMenu, setOpenedMenu] = useState(false);
  const initialData = useInitialData(props, requestInitialData);

  const [initialDate, setInitialDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [state, setState] = useState("");

  const loadPayments = async () => {};

  useEffect(() => {
    loadPayments();
  }, [endDate, state, initialDate]);

  return (
    <>
      <Header setOpenedMenu={setOpenedMenu} openedMenu={openedMenu} />
      <Container onClick={() => setOpenedMenu(false)}>
        <About>
          <InternalTitle title1="Meus" title2="Pagamentos" styles={{ marginBottom: "20px" }} />

          <Description>
            <span className="black">Confira aqui a relação dos seus pagamentos</span>
          </Description>
          <Content autoComplete="off" autocomplete="off">
            <ContentTitle>Filtro</ContentTitle>
            <Row>
              <Input
                name="initialDate"
                id="initialDate"
                initialValue={initialDate}
                onChange={text => setInitialDate(text)}
                label="Data de início"
                type="date"
              />

              <Input name="endDate" id="endDate" initialValue={endDate} onChange={text => setEndDate(text)} label="Até" type="date" />

              <Select
                name="state"
                id="state"
                initialValue={state}
                onChange={text => setState(text)}
                label="Situação"
                options={[
                  { value: "", text: "Todas" },
                  { value: "P", text: "Pagas" },
                  { value: "N", text: "Não Pagas" },
                  { value: "C", text: "Canceladas" },
                ]}
              />
            </Row>

            <ContentTitle>Pagamentos</ContentTitle>

            <Row>
              <Table />
            </Row>

            <ButtonLink href={"/static/files/politica_reembolso.pdf"} target="_blank">
              Política de reembolso
            </ButtonLink>
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
        title="Meus Pagamentos - Vida Fidelidade"
        description="Confira aqui a relação dos seus pagamentos"
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
