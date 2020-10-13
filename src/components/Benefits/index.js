import React, { useEffect } from "react";

/* import Kieee Rendering */
import { KieeeHead, useInitialData } from "./../../components/Kieee";

/* import components */

/* import images */

/* import icons */
import BenefitsIcon from "./../../assets/icons/benefits_plus";

/* import styles */
import { Container, Items, Item, Icone, Title, Line } from "./styles";

function Benefits() {
  useEffect(() => {
    document.querySelector("#beneficios").addEventListener("wheel", event => {
      if (event.deltaY > 0) {
        event.target.scrollBy(300, 0);
      } else {
        event.target.scrollBy(-300, 0);
      }
    });
  }, []);

  return (
    <Container id="beneficios">
      <Items>
        <Item>
          <Icone>
            <BenefitsIcon width="30px" height="30px" fill="#FFF" />
          </Icone>
          <Title>
            <span>Desconto</span>Exames clínicos
          </Title>
          <Line className="through">
            Particular: <span>R$ 150</span>
          </Line>
          <Line>
            Vida Fidelidade: <span>R$ 50</span>
          </Line>
        </Item>

        <Item>
          <Icone>
            <BenefitsIcon width="30px" height="30px" fill="#FFF" />
          </Icone>
          <Title>
            <span>Desconto</span>Exames clínicos
          </Title>
          <Line className="through">
            Particular: <span>R$ 150</span>
          </Line>
          <Line>
            Vida Fidelidade: <span>R$ 50</span>
          </Line>
        </Item>

        <Item>
          <Icone>
            <BenefitsIcon width="30px" height="30px" fill="#FFF" />
          </Icone>
          <Title>
            <span>Desconto</span>Exames clínicos
          </Title>
          <Line className="through">
            Particular: <span>R$ 150</span>
          </Line>
          <Line>
            Vida Fidelidade: <span>R$ 50</span>
          </Line>
        </Item>

        <Item>
          <Icone>
            <BenefitsIcon width="30px" height="30px" fill="#FFF" />
          </Icone>
          <Title>
            <span>Desconto</span>Exames clínicos
          </Title>
          <Line className="through">
            Particular: <span>R$ 150</span>
          </Line>
          <Line>
            Vida Fidelidade: <span>R$ 50</span>
          </Line>
        </Item>

        <Item>
          <Icone>
            <BenefitsIcon width="30px" height="30px" fill="#FFF" />
          </Icone>
          <Title>
            <span>Desconto</span>Exames clínicos
          </Title>
          <Line className="through">
            Particular: <span>R$ 150</span>
          </Line>
          <Line>
            Vida Fidelidade: <span>R$ 50</span>
          </Line>
        </Item>

        <Item>
          <Icone>
            <BenefitsIcon width="30px" height="30px" fill="#FFF" />
          </Icone>
          <Title>
            <span>Desconto</span>Exames clínicos
          </Title>
          <Line className="through">
            Particular: <span>R$ 150</span>
          </Line>
          <Line>
            Vida Fidelidade: <span>R$ 50</span>
          </Line>
        </Item>
      </Items>
    </Container>
  );
}

export default Benefits;
