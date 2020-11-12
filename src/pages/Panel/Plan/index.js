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
import { maskCurrencyReal, getDateByTimeZoneCba } from "./../../../utils/functions";

/* import components */
import InternalTitle from "./../../../components/InternalTitle";
import Input from "./../../../components/Forms/Input";
import Header from "./../../../components/Panel/Header";
import Footer from "./../../../components/Footer";
import Plans from "./../../../components/Plans";

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
  const [plan_id, setPlan_id] = useState("");
  const [plan_adesao, setPlan_adesao] = useState("");
  const [plan_price, setPlan_price] = useState("");
  const [state, setState] = useState("");

  const [preLoading, setPreLoading] = useState(true);

  const [linkPropostaSeguro, setLinkPropostaSeguro] = useState("");
  const [linkContratoAdesao, setLinkContratoAdesao] = useState("");
  const [linkCertificadoSeguro, setLinkCertificadoSeguro] = useState("");

  const getFiles = async data => {
    const celular = `${data[0]?.clientes[0]?.DDDCelular}${data[0]?.clientes[0]?.Celular}`;
    const phone = `${data[0]?.clientes[0]?.DDDResidencial}${data[0]?.clientes[0]?.FoneResidencial}`;
    const JsonProposta = {
      client_id: data[0]?.clientes[0]?._id,
      nomedoproduto: data[0]?.produtos[0]?.DescricaoProduto,
      nomedocliente: data[0]?.clientes[0]?.NomeCliente,
      datadenascimento: getDateByTimeZoneCba(data[0]?.clientes[0]?.DataNascimento, "dd'/'MM'/'yyyy"),
      cpfcnpj: data[0]?.clientes[0]?.CpfCNPJ,
      email: data[0]?.clientes[0]?.EmailPrincipal,
      cep: data[0]?.clientes[0]?.Cep,
      endereco: `${data[0]?.clientes[0]?.Endereco}, ${data[0]?.clientes[0]?.Bairro}, ${data[0]?.clientes[0]?.Cidade}-${data[0]?.clientes[0]?.UF}`,
      rua: data[0]?.clientes[0]?.Endereco,
      bairro: data[0]?.clientes[0]?.Bairro,
      cidade: `${data[0]?.clientes[0]?.Cidade}-${data[0]?.clientes[0]?.UF}`,
      endereco: `${data[0]?.clientes[0]?.Endereco}, ${data[0]?.clientes[0]?.Bairro}, ${data[0]?.clientes[0]?.Cidade}-${data[0]?.clientes[0]?.UF}`,
      enderecocompleto: `${data[0]?.clientes[0]?.Endereco}, nº ${data[0]?.clientes[0]?.Numero}, ${data[0]?.clientes[0]?.Complemento}, ${data[0]?.clientes[0]?.Bairro}, ${data[0]?.clientes[0]?.Cidade}-${data[0]?.clientes[0]?.UF}`,
      numero: data[0]?.clientes[0]?.Numero,
      complemento: data[0]?.clientes[0]?.Complemento,
      telefoneprincipal: celular ?? phone,
      vigenciainicial: getDateByTimeZoneCba(data[0]?.VigenciaInicial, "dd'/'MM'/'yyyy"),
      vigenciafinal: getDateByTimeZoneCba(data[0]?.VigenciaFinal, "dd'/'MM'/'yyyy"),
      tipodepagamento: data[0]?.TipoPagamento,
      recorrencia: "Mensal",
      apolice: data[0]?.CodigoSeguro,
      datadecriacaoformatada: getDateByTimeZoneCba(data[0]?.VigenciaInicial, "dd'/'MM'/'yyyy"),
    };

    try {
      const resLinkPropostaSeguro = await apiNoBaseURL.post(`https://adm.vidavg.com.br/createlinkpropostaseguro`, JsonProposta);

      if (resLinkPropostaSeguro.data.link) {
        setLinkPropostaSeguro(resLinkPropostaSeguro.data.link);
      }
    } catch (errorResLinkPropostaSeguro) {
      console.log("errorResLinkPropostaSeguro:", errorResLinkPropostaSeguro);
    }

    try {
      const resLinkContratoAdesao = await apiNoBaseURL.post(`https://adm.vidavg.com.br/createlinkcontratoadesao`, JsonProposta);

      if (resLinkContratoAdesao.data.link) {
        setLinkContratoAdesao(resLinkContratoAdesao.data.link);
      }
    } catch (errorResLinkContratoAdesao) {
      console.log("errorResLinkContratoAdesao:", errorResLinkContratoAdesao);
    }

    try {
      const resLinkCertificadoSeguro = await apiNoBaseURL.post(`https://adm.vidavg.com.br/createlinkcertificadoseguro`, JsonProposta);

      if (resLinkCertificadoSeguro.data.link) {
        setLinkCertificadoSeguro(resLinkCertificadoSeguro.data.link);
      }
    } catch (errorResLinkCertificadoSeguro) {
      console.log("errorResLinkCertificadoSeguro:", errorResLinkCertificadoSeguro);
    }

    setPreLoading(false);
  };

  const loadContract = async () => {
    try {
      const { data } = await api.get(`/contratos/getFull/${getUser()?.id}`);
      console.log(data.length);

      if (data.length >= 1) {
        if (data[0].produtos.length >= 0) {
          setPlan(data[0]?.produtos[0]?.DescricaoProduto);
          setPlan_adesao(maskCurrencyReal(data[0]?.produtos[0]?.ValorAdesao));
          setPlan_price(maskCurrencyReal(data[0]?.produtos[0]?.ValorProduto));
          setState(data[0].StatusContrato);
          setPlan_id(data[0].CodigoProduto);
        } else {
          setPlan(data[0]?.produtos?.DescricaoProduto);
          setPlan_id(data[0].CodigoProduto);
          setPlan_adesao(maskCurrencyReal(data[0]?.produtos?.ValorAdesao));
          setPlan_price(maskCurrencyReal(data[0]?.produtos?.ValorProduto));
          setState(data[0].StatusContrato);
        }
        getFiles(data);
      } else {
        setPlan_id(null);
        setPreLoading(false);
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
          {preLoading ? (
            <>
              <InternalTitle title1="Carregando" title2="Dados..." styles={{ marginBottom: "20px" }} />
            </>
          ) : (
            <>
              {plan_id === null ? (
                <>
                  <InternalTitle title1="Adiquira" title2="Já" styles={{ marginBottom: "20px" }} />
                </>
              ) : (
                <>
                  <InternalTitle title1="Meu" title2="Plano" styles={{ marginBottom: "20px" }} />
                </>
              )}
            </>
          )}

          <Description>
            {plan_id === null ? (
              <>
                <span className="black">
                  Você ainda não assinou nenhum dos nossos planos! Não perca está oportunidade e Assine hoje mesmo e desfrute dos{" "}
                  <span className="orange">benefícios</span> que só o <strong className="green">Vida Cartão Fidelidade </strong>
                  têm.
                  <br />
                  Escolha um dos planos abaixo e clique em ASSINE AGORA. É <span className="orange">Simples</span>, <span className="orange">Rápido</span> e
                  <span className="orange"> Fácil</span>.
                </span>
              </>
            ) : (
              <>
                <span className="black">Conheça o seu plano e tenha acesso à todas as documentações relacionadas a sua assinatura</span>
              </>
            )}
          </Description>
          {plan_id === null ? (
            <>
              <Plans header={false} />
            </>
          ) : (
            <>
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
                </Row>
                <Row>
                  {state === "Ativa" || state === "Trial" || state === "ATIVA" || state === "TRIAL" ? (
                    <>
                      <FormGroup>
                        {linkPropostaSeguro ? (
                          <>
                            <a href={linkPropostaSeguro} target="_blank" rel="noopener norefferer">
                              <Button type="button">Adesão Seguro</Button>
                            </a>
                          </>
                        ) : (
                          <></>
                        )}

                        {linkContratoAdesao ? (
                          <>
                            <a href={linkContratoAdesao} target="_blank" rel="noopener norefferer">
                              <Button type="button">Contrato de Adesão</Button>
                            </a>
                          </>
                        ) : (
                          <></>
                        )}

                        {linkCertificadoSeguro ? (
                          <>
                            <a href={linkCertificadoSeguro} target="_blank" rel="noopener norefferer">
                              <Button type="button">Certificado Seguro</Button>
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
            </>
          )}
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
