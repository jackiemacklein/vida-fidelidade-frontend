import React from "react";

/* import Kieee Rendering */
import { InitialDataContext } from "./../Kieee";

/* import components */
import Title from "./../Title";

/* import images */

/* import utils */

/* import icons */

/* import styles */
import { Container, Description, Items, Item, Header, HeaderTitle, Content } from "./styles";
import { Line, Price, SmalLine, Button } from "./styles";

function Plans() {
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
        <Item>
          <Header>
            <HeaderTitle>
              <span>Vida</span>
              Fidelidade
            </HeaderTitle>
          </Header>
          <Content>
            <Line>Descontos em consultas</Line>

            <Line>Descontos em exames de imagem</Line>

            <Line>Descontos em exames laboratoriais</Line>

            <Line>Assistência Funeral para o Titular</Line>

            <Line>Seguro de morte acidental para o titular</Line>

            <Price>
              <span>R$</span>
              39,90
            </Price>
            <SmalLine>+ adesão de R$ 80</SmalLine>

            <Button>ASSINE AGORA</Button>
          </Content>
        </Item>

        <Item>
          <Header>
            <HeaderTitle>
              <span>Vida</span>
              Fidelidade
            </HeaderTitle>
          </Header>
          <Content>
            <Line>Descontos em consultas</Line>

            <Line>Descontos em exames de imagem</Line>

            <Line>Descontos em exames laboratoriais</Line>

            <Line>Assistência Funeral para o Titular</Line>

            <Line>Seguro de morte acidental para o titular</Line>

            <Price>
              <span>R$</span>
              39,90
            </Price>
            <SmalLine>+ adesão de R$ 80</SmalLine>

            <Button>ASSINE AGORA</Button>
          </Content>
        </Item>

        <Item>
          <Header>
            <HeaderTitle>
              <span>Vida</span>
              Fidelidade
            </HeaderTitle>
          </Header>
          <Content>
            <Line>Descontos em consultas</Line>

            <Line>Descontos em exames de imagem</Line>

            <Line>Descontos em exames laboratoriais</Line>

            <Line>Assistência Funeral para o Titular</Line>

            <Line>Seguro de morte acidental para o titular</Line>

            <Price>
              <span>R$</span>
              39,90
            </Price>
            <SmalLine>+ adesão de R$ 80</SmalLine>

            <Button>ASSINE AGORA</Button>
          </Content>
        </Item>
      </Items>
    </Container>
  );
}

export default Plans;
