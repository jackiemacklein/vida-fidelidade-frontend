import "./../../configs/dotenv";
import "isomorphic-fetch";

import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";

/* import Kieee Rendering */
import { KieeeHead, useInitialData } from "./../../components/Kieee";

/* import utils */
import { ModalContext } from "./../../components/Forms/Modal";
import { getCardFlag, maskCurrencyReal, maskCardExpiration } from "./../../utils/functions";

/* import services */
import api from "./../../services/api";
import { isAuthenticated, getUser } from "./../../services/auth";

/* import components */
import InternalTitle from "./../../components/InternalTitle";
import Input from "./../../components/Forms/Input";
import Checkbox from "./../../components/Forms/Checkbox";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";

/* import images */
import accept_cards from "./../../assets/images/accept_cards.png";

/* import icons */
import EditIcon from "./../../assets/icons/edit";

import { Container, About, Description, Button } from "./styles";
import { Content, ContentTitle, Row, FormGroup, Label, Label2 } from "./styles";

function Component(props) {
  const modal = useContext(ModalContext);
  const history = useHistory();
  const params = useParams();

  const [openedMenu, setOpenedMenu] = useState(false);
  const initialData = useInitialData(props, requestInitialData);

  const [method, setMethod] = useState("card-credit");
  const [card_number, setCard_number] = useState("");
  const [name, setName] = useState("");
  const [validate, setValidate] = useState("");
  const [cvc, setCvc] = useState("");
  const [indicated_by, setIndicated_by] = useState("");

  const [plan_name, setPlan_name] = useState("");
  const [plan_price, setPlan_price] = useState("");
  const [plan_adesao, setPlan_adesao] = useState("");

  const [client_id, setClient_id] = useState("");
  const [plan_id, setPlan_id] = useState("");

  const [loading, setLoading] = useState(false);

  const [clientContract, setClientContract] = useState(false);

  const checkCardValidate = () => {
    const check = validate.split("/");
    if (check.length === 2 && parseInt(check[0]) <= 31 && check[0].length === 2 && check[1].length === 2) return true;
    else return false;
  };

  const getMonth = () => {
    const val = validate.split("/");
    return val[0];
  };

  const getYear = () => {
    const val = validate.split("/");
    return val[1];
  };

  const clearFields = () => {
    setMethod("");
    setCard_number("");
    setName("");
    setValidate("");
    setCvc("");
    setIndicated_by("");
  };

  const handlePayment = async event => {
    event.preventDefault();

    if (method === "card-credit" && !checkCardValidate()) {
      modal.show(true, "Atenção!", "Informe corretamente a validade do cartão!", "Padrão: MM/AA", "", "", "Tentar novamente", () => () => modal.hide(), true);

      return false;
    }

    setLoading(true);

    try {
      let res = {};
      // console.log(localStorage.getItem("CLIENT_PAYMENT"));
      if (localStorage.getItem("CLIENT_PAYMENT") === null && clientContract === false) {
        res = await api.post("/contratos/criacliente", {
          CodigoEmpresa: "5f8da1658c4466ce8b70113a",
          CodigoCliente: client_id,
          CodigoVendedor: "5f98c54ee75ab2fdf19c0e6c",
          NomedoIndicador: indicated_by,
          TipoPagamento: method === "card-credit" ? "Cartao" : "Boleto",
          ClientexContrato: [
            {
              CodigoCliente: client_id,
              CodigoProduto: plan_id,
            },
          ],
          CobrancaxContrato: {
            NumeroCartao: method === "card-credit" ? card_number : "",
            TipoCartao: method === "card-credit" ? getCardFlag(card_number) : "",
            NomeCartao: method === "card-credit" ? name : "",
            MesCartao: method === "card-credit" ? getMonth() : "",
            AnoCartao: method === "card-credit" ? getYear() : "",
            CVVCarta: method === "card-credit" ? cvc : "",
          },
        });
      }

      //if (localStorage.getItem("CLIENT_PAYMENT") || clientContract === true) {
      setClientContract(true);

      //DEFINA UM ADAPTAÇÃO PARA QUE NÃO PRECISE CRIAR NOVAMENTE O CLIENTE NA WIRECARD
      await localStorage.setItem("CLIENT_PAYMENT", client_id);

      const { data } = await api.post("/contratos", {
        CodigoEmpresa: "5f8da1658c4466ce8b70113a",
        CodigoCliente: client_id,
        CodigoVendedor: "5f98c54ee75ab2fdf19c0e6c",
        NomedoIndicador: indicated_by,
        TipoPagamento: method === "card-credit" ? "Cartao" : "Boleto",
        ClientexContrato: [
          {
            CodigoCliente: client_id,
            CodigoProduto: plan_id,
          },
        ],
        CobrancaxContrato: {
          NumeroCartao: method === "card-credit" ? card_number : "",
          TipoCartao: method === "card-credit" ? getCardFlag(card_number) : "",
          NomeCartao: method === "card-credit" ? name : "",
          MesCartao: method === "card-credit" ? getMonth() : "",
          AnoCartao: method === "card-credit" ? getYear() : "",
          CVVCarta: method === "card-credit" ? cvc : "",
        },
      });

      if (data) {
        if (method === "card-credit" && data.status === "ACTIVE") {
          modal.show(
            true,
            "Processando Pagamento!",
            "No momento estamos processando o seu pagamento, você receberá uma confirmação por e-mail quando o processo for concluído.",
            "Clque no botão abaixo e acompanhe seu pedido.",
            "ACESSAR MINHA CONTA",
            () => () => {
              clearFields();
              if (isAuthenticated()) {
                history.push(process.env.REACT_APP_PAGE_CONSTRUCTION === "true" ? "/site/portal/meu-plano" : "/portal/meu-plano");
              } else {
                history.push(process.env.REACT_APP_PAGE_CONSTRUCTION === "true" ? "/site/login" : "/login");
              }
            },
            "",
            "",
            false,
          );
        } else if (method === "billet" && data._links.boleto.redirect_href) {
          modal.show(
            true,
            "Boleto gerado com sucesso!",
            "Seu boleto para pagamento foi gerado com sucesso! Enviamos uma cópia para o seu e-mail",
            `Se desejar imprimir o seu boleto, clique no botão abaixo.<br />O processamento de pagamento dos boletos podem ocorrer em até 3 dias uteis.<br /><br />`,
            "IMPRIMIR MEU BOLETO",
            () => () => {
              clearFields();
              window.open(data._links.boleto.redirect_href, "_blank");
            },
            "ACESSAR MINHA CONTA",
            () => () => {
              clearFields();
              if (isAuthenticated()) {
                history.push(process.env.REACT_APP_PAGE_CONSTRUCTION === "true" ? "/site/portal/meu-plano" : "/portal/meu-plano");
              } else {
                history.push(process.env.REACT_APP_PAGE_CONSTRUCTION === "true" ? "/site/portal/meu-plano" : "/portal/meu-plano");
              }
            },
            false,
          );
        } else {
          modal.show(
            true,
            "Erro ao processar pagamento",
            "Identificamos um erro ao tentar gerar o seu pagamento!",
            "Por favor tente novamente mais tarde.",
            "",
            "",
            "Tentar novamente",
            () => () => modal.hide(),
            true,
          );
        }
      } else {
        modal.show(
          true,
          "Erro",
          "Identificamos uma instabilidade na operadora de pagamentos!",
          "Por favor tente novamente mais tarde.",
          "",
          "",
          "Tentar novamente",
          () => () => modal.hide(),
          true,
        );
      }
      /*     } else {
        modal.show(
          true,
          "Erro",
          "Identificamos uma instabilidade na operadora de pagamento!",
          "Por favor tente novamente mais tarde.",
          "",
          "",
          "Tentar novamente",
          () => () => modal.hide(),
          true,
        );
      }*/

      setLoading(false);
    } catch (error) {
      console.log(error);

      if (method === "card-credit") {
        modal.show(
          true,
          "Erro",
          "Infelizmente não conseguimos processar o seu pagamento através do cartão de crédito.",
          "Verifique as informações digitadas e tente novamente ou escolha outra forma de pagamento.",
          "",
          "",
          "Tentar novamente",
          () => () => modal.hide(),
          true,
        );
      } else {
        modal.show(
          true,
          "Erro",
          "Infelizmente não foi possivel gerar o seu boleto para pagamento.",
          "Tente novamente!",
          "",
          "",
          "Tentar novamente",
          () => () => modal.hide(),
          true,
        );
      }

      setLoading(false);
    }
  };

  useEffect(() => {
    if (params.plan_id && params.user_id) {
      setPlan_id(params.plan_id);
      setClient_id(params.user_id);
    } else {
      history.goBack();
    }
  }, []);

  useEffect(() => {
    async function loadPlan() {
      const { data } = await api.get(`/produtos/${params.plan_id}`);
      if (data) {
        setPlan_name(data.DescricaoProduto);
        setPlan_price(maskCurrencyReal(data.ValorProduto ?? 0));
        setPlan_adesao(maskCurrencyReal(data.ValorAdesao ?? 0));
      }
    }
    loadPlan();
  }, []);
  return (
    <>
      <Header setOpenedMenu={setOpenedMenu} openedMenu={openedMenu} internalPage />
      <Container onClick={() => setOpenedMenu(false)}>
        <About>
          <InternalTitle title1="Pagamento" title2="do Pedido" styles={{ marginBottom: "20px" }} />

          <Description>
            <span className="black">Informe corretamente os dados para realizar o pagamento.</span>
          </Description>
          <Content autoComplete="off" autocomplete="off" onSubmit={handlePayment}>
            <ContentTitle style={{ textAlign: "center" }}>
              Seu Pedido{" "}
              <a href="/#planos" title="Alterar Pedido">
                <EditIcon width="12px" height="11.94px" />
              </a>
            </ContentTitle>

            <Row>
              <Label2>
                PRODUTO: <span>{plan_name}</span>
              </Label2>
              <Label2>
                MENSALIDADE: R$ <span>{plan_price}</span>
              </Label2>
              <Label2>
                TAXA ADESÃO: R$ <span>{plan_adesao}</span>
              </Label2>
            </Row>
            {isAuthenticated() ? (
              <>
                <Row>
                  <Label2>
                    SEU NOME: <span>{getUser()?.name}</span>
                  </Label2>
                  <Label2>
                    SEU E-MAIL:<span>{getUser()?.email}</span>
                  </Label2>
                </Row>
              </>
            ) : (
              <></>
            )}

            <ContentTitle>Forma de pagamento</ContentTitle>
            <Row style={{ marginBottom: "25px" }}>
              <Checkbox
                name="method-card-credit"
                id="method-card-credit"
                initialValue={"card-credit"}
                onChange={(text, checked) => setMethod("card-credit")}
                label="Cartão de Crédito"
                checked={method === "card-credit"}
              />
              {/*<Checkbox
                name="method-card-debit"
                id="method-card-debit"
                initialValue={"card-debit"}
                onChange={text => setMethod("card-debit")}
                label="Débito em Conta"
                checked={method === "card-debit"}
              />*/}

              <Checkbox
                name="method-billet"
                id="method-billet"
                initialValue={"billet"}
                onChange={(text, checked) => setMethod("billet")}
                label="Boleto Bancário"
                checked={method === "billet"}
              />
            </Row>
            {method === "card-credit" ? (
              <>
                <Row>
                  <Input
                    name="card_number"
                    id="card_number"
                    initialValue={card_number}
                    onChange={text => setCard_number(text)}
                    label="Número do cartão *"
                    infoText="Campo obrigatório"
                    required={method === "card-credit"}
                    type="text"
                  />

                  <Input
                    name="name"
                    id="name"
                    initialValue={name}
                    onChange={text => setName(text)}
                    label="Nome do titular*"
                    infoText="Conforme impresso no cartão"
                    required={method === "card-credit"}
                    type="text"
                  />
                </Row>

                <Row>
                  <Input
                    name="validate"
                    id="validate"
                    initialValue={validate}
                    onChange={text => setValidate(maskCardExpiration(text))}
                    label="Validade (MM/AA) *"
                    infoText="Campo obrigatório"
                    required={method === "card-credit"}
                    type="text"
                    maxLength={7}
                  />

                  <Input
                    name="cvc"
                    id="cvc"
                    initialValue={cvc}
                    onChange={text => setCvc(text)}
                    label="CVC *"
                    infoText="Código de segurança"
                    required={method === "card-credit"}
                    maxLength={4}
                    type="text"
                  />
                </Row>

                <Row>
                  <FormGroup>
                    <Label>Cartões aceitos</Label>
                    <img src={accept_cards} alt="Cartões aceitos" title="Cartões aceitos" />
                  </FormGroup>
                </Row>
              </>
            ) : (
              <></>
            )}

            <ContentTitle>Outras Informações</ContentTitle>

            <Row>
              <Input
                name="indicated_by"
                id="indicated_by"
                initialValue={indicated_by}
                onChange={text => setIndicated_by(text)}
                label="Indicado Por:"
                infoText="Se foi uma indicação, por favor informe o nome da Pessoa"
                type="text"
              />
            </Row>
            <Button disabled={loading}>{loading ? `PROCESSANDO PAGAMENTO...` : method === "billet" ? "Gerar Boleto" : "Realizar Pagamento"}</Button>
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
        title="Pagamento - Vida Fidelidade"
        description="Realize seu pagamento para você e seus dependentes aproveitrem os descontos em consultas e exames que fazem parte do complexo Vida e muitos outros Benefícios."
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
