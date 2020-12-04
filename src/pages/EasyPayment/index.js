import "./../../configs/dotenv";
import "isomorphic-fetch";

import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

/* import Kieee Rendering */
import { KieeeHead, useInitialData } from "./../../components/Kieee";

/* import utils */
import { openLink, parseInteger, maskCpfCnpj } from "./../../utils/functions";
import { ModalContext } from "./../../components/Forms/Modal";

/* import components */
import InternalTitle from "./../../components/InternalTitle";
import Input from "./../../components/Forms/Input";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";

/* import images */

/* import icons */

/* import services */
import api from "./../../services/api";

/* import styles */
import { Container, About, Description, Button } from "./styles";
import { Content, ContentTitle, Row } from "./styles";

function Component(props) {
  const modal = useContext(ModalContext);
  const history = useHistory();

  const [openedMenu, setOpenedMenu] = useState(false);
  const initialData = useInitialData(props, requestInitialData);

  const [cpf, setCpf] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLoadPayment = async event => {
    event.preventDefault();

    try {
      if (!cpf) {
        return false;
      }

      setLoading(true);

      const { data } = await api.get(`/contratos/getcpfsite/${parseInteger(cpf)}`);

      if ((data.statusContrato === "TRIAL" || data.statusContrato === "ACTIVE") && data.linkBoleto) {
        modal.show(
          true,
          "Boleto gerado com sucesso!",
          "Seu boleto para pagamento de sua assinatura foi gerado com sucesso!",
          "Se deseja imprimir o seu boleto agora clique em imprimir meu boleto.",
          "IMPRIMIR MEU BOLETO",
          () => () => window.open(data.linkBoleto, "_blank"),
          "",
          "",
          true,
        );
      } else if (data.statusContrato === "OVERDUE") {
        modal.show(
          true,
          "Sua assinatura encontra vencida!",
          "(65) 3029-9700 ou pelo e-mail fernando.rodrigues@vidavg.com.br",
          "Para emitir o seu boleto para pagamento fale com a nossa equipe!",

          "",
          () => () => {},
          "Fechar",
          () => () => modal.hide(),
          true,
        );
      } else {
        modal.show(
          true,
          "Não existe fatura aberta.",
          "Identificamos que você está em dias com a suas mensalidades!",
          "Desfrute dos benefícios que só o Vida Cartão Fidelidade têm!",
          "ACESSAR MINHA CONTA",
          () => () => history.push("/login"),
          "Fechar",
          () => () => modal.hide(),
          true,
        );
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      modal.show(
        true,
        "Erro ao tentar gerar o seu boleto para pagamento",
        "Identificamos um erro ao tentar gerar o seu pagamento!",
        "Por favor tente novamente ou se preferir ligue ou fale com a nossa equipe (65) 3029-9700  ",
        "",
        "",
        "Tentar novamente",
        () => () => modal.hide(),
        true,
      );

      setLoading(false);
    }
  };

  useEffect(() => {}, [initialData]);

  return (
    <>
      <Header setOpenedMenu={setOpenedMenu} openedMenu={openedMenu} />
      <Container onClick={() => setOpenedMenu(false)}>
        <About>
          <InternalTitle title1="Vida Pagamento" title2="Fácil" styles={{ marginBottom: "20px" }} />

          <Description>
            <span className="black">
              Permaneça em dias com a sua mensalidade e desfrute dos <span className="orange">benefícios</span> que só o{" "}
              <strong className="green">Vida Cartão Fidelidade </strong>
              têm.
              <br />
              Digite seu CPF para emitir o seu boleto para pagamento, <span className="orange">Simples</span>, <span className="orange">Rápido</span> e
              <span className="orange"> Fácil</span>.
            </span>
          </Description>
          <Content autoComplete="off" autocomplete="off" onSubmit={handleLoadPayment}>
            <ContentTitle>&nbsp;</ContentTitle>
            <Row>
              <Input
                name="cpf"
                id="cpf"
                initialValue={cpf}
                onChange={text => setCpf(maskCpfCnpj(text))}
                label="CPF *"
                infoText="Campo obrigatório"
                required
                type="text"
                maxLength={11}
              />
            </Row>

            <Button disabled={loading}>{loading ? "CARREGANDO..." : "GERAR PAGAMENTO"}</Button>
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
        title="Vida Pagamento Fácil - Vida Fidelidade"
        description="Como é fácil estar em dias com a sua mensalidade para aproveitar os descontos em consultas e exames que fazem parte do complexo Vida e muitos outros Benefícios."
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
