import "./../../../configs/dotenv";
import "isomorphic-fetch";

import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

/* import Kieee Rendering */
import { KieeeHead, useInitialData } from "./../../../components/Kieee";

/* import services */
import api, { apiNoBaseURL } from "./../../../services/api";
import { getUser } from "./../../../services/auth";

/* import utils */
import { ModalContext } from "./../../../components/Forms/Modal";
import { maskCurrencyReal } from "./../../../utils/functions";

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

  const [linkPropostaSeguro, setLinkPropostaSeguro] = useState("");
  const [linkContratoAdesao, setLinkContratoAdesao] = useState("");
  const [linkCertificadoSeguro, setLinkCertificadoSeguro] = useState("");

  const getFiles = async data => {
    const linkPropostaSeguro = await apiNoBaseURL.get(`https://adm.vidavg.com.br/createfiletemplate`, { data });
    const linkContratoAdesao = await apiNoBaseURL.get(`/contratos/getFull/${getUser()?.id}`);
    const linkCertificadoSeguro = await apiNoBaseURL.get(`/contratos/getFull/${getUser()?.id}`);
  };

  const loadContract = async () => {
    try {
      const { data } = await api.get(`/contratos/getFull/${getUser()?.id}`);
      if (data.length >= 0) {
        if (data[0].produtos.length >= 0) {
          console.log(data[0].produtos[0]);
          setPlan(data[0]?.produtos[0]?.DescricaoProduto);
          setPlan_adesao(maskCurrencyReal(data[0]?.produtos[0]?.ValorAdesao));
          setPlan_price(maskCurrencyReal(data[0]?.produtos[0]?.ValorProduto));
          setState(data[0].StatusContrato);
        } else {
          console.log(data[0].produtos);
          setPlan(data[0]?.produtos?.DescricaoProduto);
          setPlan_adesao(maskCurrencyReal(data[0]?.produtos?.ValorAdesao));
          setPlan_price(maskCurrencyReal(data[0]?.produtos?.ValorProduto));
          setState(data[0].StatusContrato);
        }
      } else {
        if (data[0].produtos.length >= 0) {
          console.log(data.produtos[0]);
          setPlan(data?.produtos[0]?.DescricaoProduto);
          setPlan_adesao(maskCurrencyReal(data?.produtos[0]?.ValorAdesao));
          setPlan_price(maskCurrencyReal(data?.produtos[0]?.ValorProduto));
          setState(data[0].StatusContrato);
        } else {
          console.log(data.produtos);
          setPlan(data?.produtos?.DescricaoProduto);
          setPlan_adesao(maskCurrencyReal(data?.produtos?.ValorAdesao));
          setPlan_price(maskCurrencyReal(data?.produtos?.ValorProduto));
          setState(data.StatusContrato);
        }
      }
    } catch (error) {
      console.log("erro ao carregar planos: ", error);
    }
  };

  useEffect(() => {
    loadContract();
  }, []);

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

              <Input name="plan_price" id="plan_price" initialValue={`R$ ${plan_price}`} label="Recorrência" type="text" disabled readonly />
            </Row>

            <Row>
              <Input name="state" id="state" initialValue={state} label="Situação" disabled readonly />

              {state === "Ativo" ? (
                <>
                  <FormGroup>
                    {linkPropostaSeguro ? (
                      <>
                        <a href="">
                          <Button>Adesão Seguro</Button>
                        </a>
                      </>
                    ) : (
                      <></>
                    )}

                    {linkContratoAdesao ? (
                      <>
                        <a href="">
                          <Button>Contrato de Adesão</Button>
                        </a>
                      </>
                    ) : (
                      <></>
                    )}

                    {linkCertificadoSeguro ? (
                      <>
                        <a href="">
                          <Button>Certificado Seguro</Button>
                        </a>
                      </>
                    ) : (
                      <></>
                    )}
                  </FormGroup>
                </>
              ) : (
                <></>
              )}
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
