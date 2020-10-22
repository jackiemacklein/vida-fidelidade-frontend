import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/* import Kieee Rendering */
import { InitialDataContext } from "./../Kieee";

/* import components */
import Title from "./../Title";

/* import images */

/* import utils */
import { maskCurrencyReal } from "./../../utils/functions";

/* import icons */

/* import styles */
import { Container, Description, Items, Item, Header, HeaderTitle, Content } from "./styles";
import { Line, Price, SmalLine, Button } from "./styles";

function Plans() {
  const initialData = InitialDataContext;
  const [plans, setPlans] = useState(initialData?.plans ?? []);

  const getLines = lines => {
    const items = lines.split("\n");

    return items;
  };

  useEffect(() => {
    setPlans(initialData?.plans ?? []);
  }, [InitialDataContext]);

  return (
    <Container id="planos">
      <Title title1="Conheça nossos" title2="Planos" styles={{ marginBottom: "20px" }} />

      <Description>
        <span className="black">
          Não perca está oportunidade e garanta já, mais segurança e saúde para você e toda família. Preços <strong>acessíveis</strong>, descontos{" "}
          <strong>reais</strong> e muitas <strong>vantagens</strong>.
        </span>
      </Description>

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
              {getLines(item.BeneficiosProduto).map(line => (
                <Line key={line}>{line}</Line>
              ))}

              {getLines(item.DiferencialProduto).map(line => (
                <Line key={line}>{line}</Line>
              ))}

              <Price>
                <span>R$</span>
                {item.ValorProduto ? maskCurrencyReal(item.ValorProduto) : "Sob Consulta"}
              </Price>
              {item.ValorAdesao ? <SmalLine>+ adesão de R$ {maskCurrencyReal(item.ValorAdesao)}</SmalLine> : <></>}

              <Link to={`/criar-conta/${item._id}`}>
                <Button>ASSINE AGORA</Button>
              </Link>
            </Content>
          </Item>
        ))}
      </Items>
    </Container>
  );
}

export default Plans;
