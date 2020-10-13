import "./../../configs/dotenv";
import "isomorphic-fetch";

import React, { useState, useEffect, useContext } from "react";
import { useHistory, Link } from "react-router-dom";

/* import Kieee Rendering */
import { KieeeHead, useInitialData } from "./../../components/Kieee";

/* import utils */
import { ModalContext } from "./../../components/Forms/Modal";

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

/* import styles */
import { Container, About, Description, Button } from "./styles";
import { Content, ContentTitle, Row, FormGroup, Label, Label2 } from "./styles";

function Component(props) {
  const modal = useContext(ModalContext);
  const history = useHistory();

  const [openedMenu, setOpenedMenu] = useState(false);
  const initialData = useInitialData(props, requestInitialData);

  const [method, setMethod] = useState("card-credit");
  const [card_number, setCard_number] = useState("");
  const [name, setName] = useState("");
  const [validate, setValidate] = useState("");
  const [cvc, setCvc] = useState("");
  const [indicated_by, setIndicated_by] = useState("");

  const [plan_name, setPlan_name] = useState("VIDA FIDELIDADE");
  const [plan_price, setPlan_price] = useState("39,90");
  const [plan_adesao, setPlan_adesao] = useState("80,00");

  const handlePayment = () => {
    try {
      modal.show(
        true,
        "Pagamento efetuado com sucesso!",
        "Obrigado!",
        "Seu pagamento através do cartão de crédito foi efetuado com sucesso.",
        "ACESSAR MINHA CONTA",
        () => () => history.push("/"),
        "",
        "",
        true,
      );
    } catch (error) {
      console.log(error);
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
    }
  };

  const loadUser = () => {};

  const loadPlan = () => {};

  useEffect(() => {}, [initialData]);

  return (
    <>
      <Header setOpenedMenu={setOpenedMenu} openedMenu={openedMenu} internalPage />
      <Container onClick={() => setOpenedMenu(false)}>
        <About>
          <InternalTitle title1="Pagamento" title2="do Pedido" styles={{ marginBottom: "20px" }} />

          <Description>
            <span className="black">Informe corretamente os dados para realizar o pagamento.</span>
          </Description>
          <Content autoComplete="off" autocomplete="off" onSubmit={() => handlePayment()}>
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
                    onChange={text => setValidate(text)}
                    label="Validade (MM/AAAA) *"
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

            <Button>{method === "billet" ? "Gerar Boleto" : "Realizar Pagamento"}</Button>
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
