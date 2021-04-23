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
import MethodPayment from "./MethodPayment";

/* import images */

/* import icons */

/* import styles */
import { Container, About, Description, Button } from "./styles";
import { Content, ContentTitle, Row, FormGroup, ItemButton } from "./styles";

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

  const [modalPaymentOpen, setModalPaymentOpen] = useState(false);
  const [paymentData, setPaymentData] = useState({});

  const getFiles = async data => {
    let celular = `${data?.clientes[0]?.DDDCelular}${data?.clientes[0]?.Celular}`;
    let phone = `${data?.clientes[0]?.DDDResidencial}${data?.clientes[0]?.FoneResidencial}`;

    const dependentes = await data?.clientesDependentes.map(item => {
      return { ...item, DataDeNascimento: getDateByTimeZoneCba(item.DataDeNascimento, "dd'/'MM'/'yyyy") };
    });

    let apolice = "";
    if (!data.CodigoSeguro) {
      const clien = data.ClientexContrato.find(item => item.CodigoCliente === data.client_id);
      if (clien) {
        if (clien.ApoliceSeguro) {
          apolice = clien.ApoliceSeguro;
        }
      }
    } else {
      apolice = data?.CodigoSeguro ?? "";
    }

    let JsonProposta = {
      portalink: "",
      iddoproduto: data?.produtos[0]?._id,
      client_id: data?.clientes[0]?._id,
      nomedoproduto: data?.produtos[0]?.DescricaoProduto,
      nomedocliente: data?.clientes[0]?.NomeCliente,
      datadenascimento: getDateByTimeZoneCba(data?.clientes[0]?.DataNascimento, "dd'/'MM'/'yyyy"),
      cpfcnpj: data?.clientes[0]?.CpfCNPJ,
      email: data?.clientes[0]?.EmailPrincipal,
      cep: data?.clientes[0]?.Cep,
      endereco: `${data?.clientes[0]?.Endereco}, ${data?.clientes[0]?.Bairro}, ${data?.clientes[0]?.Cidade}-${data?.clientes[0]?.UF}`,
      rua: data?.clientes[0]?.Endereco,
      bairro: data?.clientes[0]?.Bairro,
      cidade: `${data?.clientes[0]?.Cidade}-${data?.clientes[0]?.UF}`,
      endereco: `${data?.clientes[0]?.Endereco}, ${data?.clientes[0]?.Bairro}, ${data?.clientes[0]?.Cidade}-${data?.clientes[0]?.UF}`,
      enderecocompleto: `${data?.clientes[0]?.Endereco}, nº ${data?.clientes[0]?.Numero}, ${data?.clientes[0]?.Complemento}, ${data?.clientes[0]?.Bairro}, ${data?.clientes[0]?.Cidade}-${data?.clientes[0]?.UF}`,
      numero: data?.clientes[0]?.Numero,
      complemento: data?.clientes[0]?.Complemento,
      telefoneprincipal: celular ?? phone,
      vigenciainicial: getDateByTimeZoneCba(data?.VigenciaInicial, "dd'/'MM'/'yyyy"),
      vigenciafinal: getDateByTimeZoneCba(data?.VigenciaFinal, "dd'/'MM'/'yyyy"),
      tipodepagamento: data?.TipoPagamento,
      recorrencia: "Mensal",
      apolice: apolice,
      datadecriacaoformatada: getDateByTimeZoneCba(data.DataContrato ? data.DataContrato : data.VigenciaInicial, "dd'/'MM'/'yyyy"),
      dependentes: dependentes,
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
      const resLinkCertificadoSeguro = await apiNoBaseURL.post(`https://adm.vidavg.com.br/createlinkcertificadoseguro`, JsonProposta);

      if (resLinkCertificadoSeguro.data.link) {
        setLinkCertificadoSeguro(resLinkCertificadoSeguro.data.link);
      }
    } catch (errorResLinkCertificadoSeguro) {
      console.log("errorResLinkCertificadoSeguro:", errorResLinkCertificadoSeguro);
    }

    try {
      celular = `${data?.clientecontrato[0]?.DDDCelular}${data?.clientes[0]?.Celular}`;
      phone = `${data?.clientecontrato[0]?.DDDResidencial}${data?.clientes[0]?.FoneResidencial}`;

      JsonProposta = {
        portalink: "",
        iddoproduto: data?.produtos[0]?._id,
        client_id: data?.clientecontrato[0]?._id,
        nomedoproduto: data?.produtos[0]?.DescricaoProduto,
        nomedocliente: data?.clientecontrato[0]?.NomeCliente,
        datadenascimento: getDateByTimeZoneCba(data?.clientecontrato[0]?.DataNascimento, "dd'/'MM'/'yyyy"),
        cpfcnpj: data?.clientecontrato[0]?.CpfCNPJ,
        email: data?.clientecontrato[0]?.EmailPrincipal,
        cep: data?.clientecontrato[0]?.Cep,
        endereco: `${data?.clientecontrato[0]?.Endereco}, ${data?.clientecontrato[0]?.Bairro}, ${data?.clientecontrato[0]?.Cidade}-${data?.clientecontrato[0]?.UF}`,
        rua: data?.clientecontrato[0]?.Endereco,
        bairro: data?.clientecontrato[0]?.Bairro,
        cidade: `${data?.clientecontrato[0]?.Cidade}-${data.clientecontrato[0]?.UF}`,
        endereco: `${data?.clientecontrato[0]?.Endereco}, ${data?.clientecontrato[0]?.Bairro}, ${data?.clientecontrato[0]?.Cidade}-${data?.clientecontrato[0]?.UF}`,
        enderecocompleto: `${data?.clientecontrato[0]?.Endereco}, nº ${data?.clientecontrato[0]?.Numero}, ${data?.clientecontrato[0]?.Complemento}, ${data?.clientecontrato[0]?.Bairro}, ${data?.clientecontrato[0]?.Cidade}-${data?.clientecontrato[0]?.UF}`,
        numero: data?.clientecontrato[0]?.Numero,
        complemento: data?.clientecontrato[0]?.Complemento,
        telefoneprincipal: celular ?? phone,
        vigenciainicial: getDateByTimeZoneCba(data?.VigenciaInicial, "dd'/'MM'/'yyyy"),
        vigenciafinal: getDateByTimeZoneCba(data?.VigenciaFinal, "dd'/'MM'/'yyyy"),
        tipodepagamento: data?.TipoPagamento,
        recorrencia: "Mensal",
        apolice: apolice,
        datadecriacaoformatada: getDateByTimeZoneCba(data.DataContrato ? data.DataContrato : data.VigenciaInicial, "dd'/'MM'/'yyyy"),
        dependentes: dependentes,
      };
      const resLinkContratoAdesao = await apiNoBaseURL.post(`https://adm.vidavg.com.br/createlinkcontratoadesao`, JsonProposta);

      if (resLinkContratoAdesao.data.link) {
        setLinkContratoAdesao(resLinkContratoAdesao.data.link);
      }
    } catch (errorResLinkContratoAdesao) {
      console.log("errorResLinkContratoAdesao:", errorResLinkContratoAdesao);
    }

    setPreLoading(false);
  };

  const loadContract = async () => {
    try {
      const { data } = await api.get(`/contratos/getFull/${getUser()?.id}`);

      if (data.length >= 1 && data[data.length - 1].StatusContrato != "CANCELADA") {
        if (data[data.length - 1].produtos.length >= 0) {
          setPlan(data[data.length - 1]?.produtos[0]?.DescricaoProduto);
          setPlan_adesao(maskCurrencyReal(data[data.length - 1]?.produtos[0]?.ValorAdesao));
          setPlan_price(maskCurrencyReal(data[data.length - 1]?.produtos[0]?.ValorProduto));
          setState(data[data.length - 1].StatusContrato);
          setPlan_id(data[data.length - 1].CodigoProduto);

          setPaymentData(data[data.length - 1]);
        } else {
          setPlan(data[data.length - 1]?.produtos?.DescricaoProduto);
          setPlan_id(data[data.length - 1].CodigoProduto);
          setPlan_adesao(maskCurrencyReal(data[data.length - 1]?.produtos?.ValorAdesao));
          setPlan_price(maskCurrencyReal(data[data.length - 1]?.produtos?.ValorProduto));
          setState(data[data.length - 1].StatusContrato);

          setPaymentData(data[data.length - 1]);
        }

        if (
          data[data.length - 1].StatusContrato === "Ativa" ||
          data[data.length - 1].StatusContrato === "Trial" ||
          data[data.length - 1].StatusContrato === "ATIVA" ||
          data[data.length - 1].StatusContrato === "TRIAL"
        ) {
          const doc = await api.get(`/contratos/gerardocumentos/${getUser()?.id}`);
          if (doc.data) {
            getFiles(doc.data);
          }
        } else {
          setPreLoading(false);
        }
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
              {preLoading || paymentData?.clientes[0]._id !== paymentData?.clientecontrato[0]._id ? (
                <></>
              ) : (
                <>
                  <ItemButton
                    type="button"
                    className="edit"
                    title="editar"
                    onClick={() => {
                      setModalPaymentOpen(true);
                    }}>
                    ALTERAR FORMA DE PAGAMENTO <i className="fa fa-address-card"></i>
                  </ItemButton>
                </>
              )}

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
      <MethodPayment modalPaymentOpen={modalPaymentOpen} setModalPaymentOpen={setModalPaymentOpen} data={paymentData} />
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
