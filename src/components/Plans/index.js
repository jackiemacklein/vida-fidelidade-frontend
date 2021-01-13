import "./../../configs/dotenv";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

/* import Kieee Rendering */
import { InitialDataContext } from "./../Kieee";

/* import components */
import Title from "./../Title";
import { ModalContext } from "./../Forms/Modal";

/* import images*/

/* import utils */
import { maskCurrencyReal } from "./../../utils/functions";

/* import services */
import api from "./../../services/api";
import { isAuthenticated } from "./../../services/auth";

/* import styles */
import { Container, Description, Items, Item, Header, HeaderTitle, Content } from "./styles";
import { Line, Price, SmalLine, Button } from "./styles";

function Plans({ header = true }) {
  const modal = useContext(ModalContext);
  //const initialData = InitialDataContext;

  //console.log("dentro: ", initialData);

  const [plans, setPlans] = useState([]);

  const getLines = lines => {
    const items = lines.split("\n");

    return items;
  };

  const showModalInfo = () => {
    modal.show(
      true,
      "Informação Importante!",
      "Ligue: (65) 3029-9700 ou pelo e-mail fernando.rodrigues@vidavg.com.br e contrate agora mesmo.",
      "Visando garantir a validade da Certidão de Casamento e/ou Documento de União Estável, esse plano só pode ser contratado através de um representante comercial.",
      "",
      () => () => {},
      "Fechar",
      () => () => modal.hide(),
      true,
    );
  };

  const getButton = _id => {
    if (_id === "5fbbfaecd97422bfcb015cdf") {
      return <Button onClick={() => showModalInfo()}>ASSINE AGORA</Button>;
    } else {
      if (localStorage.getItem("USER_ID") !== null && localStorage.getItem("USER_ID") !== "") {
        return (
          <Link
            to={
              process.env.REACT_APP_PAGE_CONSTRUCTION === "true"
                ? `/site/pagamento/${_id}/${localStorage.getItem("USER_ID")}`
                : `/pagamento/${_id}/${localStorage.getItem("USER_ID")}`
            }>
            <Button>ASSINE AGORA</Button>
          </Link>
        );
      } else {
        return (
          <Link to={process.env.REACT_APP_PAGE_CONSTRUCTION === "true" ? `/site/criar-conta/${_id}` : `/criar-conta/${_id}`}>
            <Button>ASSINE AGORA</Button>
          </Link>
        );
      }
    }
  };

  useEffect(() => {
    async function load() {
      const { data } = await api.get("/produtos/tipovenda/Site");
      //const { data } = await api.get("/produtos/situacao/ativo");
      if (data) {
        setPlans(data);
      }
    }

    load();
  }, [InitialDataContext]);

  return (
    <Container id="planos">
      {header ? (
        <>
          <Title title1="Conheça nossos" title2="Planos" styles={{ marginBottom: "20px" }} />

          <Description>
            <span className="black">
              Não perca está oportunidade e garanta já, mais segurança e saúde para você e toda família. Preços <strong>acessíveis</strong>, descontos{" "}
              <strong>reais</strong> e muitas <strong>vantagens</strong>.
            </span>
          </Description>
        </>
      ) : (
        <></>
      )}

      <Items>
        {plans.map((item, index) => (
          <Item key={index}>
            <Header>
              <HeaderTitle>
                <span>Vida</span>
                {item.DescricaoProduto}
              </HeaderTitle>
            </Header>
            <Content>
              <div style={{ flex: 1 }}>
                {getLines(item.BeneficiosProduto).map(line => (
                  <Line key={line}>{line}</Line>
                ))}

                {getLines(item.DiferencialProduto).map(line => (
                  <Line key={line}>{line}</Line>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end" }}>
                <Price>
                  <span>R$</span>
                  {item.ValorProduto ? maskCurrencyReal(item.ValorProduto) : "Sob Consulta"}*
                </Price>
                {item.ValorAdesao ? <SmalLine>+ adesão de R$ {maskCurrencyReal(item.ValorAdesao)} **</SmalLine> : <></>}
                {getButton(item._id)}
                <SmalLine>*Mensalidade&nbsp;**Parcela Única</SmalLine>
              </div>
            </Content>
          </Item>
        ))}
      </Items>
    </Container>
  );
}

export default Plans;
