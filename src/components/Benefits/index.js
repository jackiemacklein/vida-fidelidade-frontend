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
            <span>Desconto</span>Clínico Geral
          </Title>
          <Line className="through">
            Particular: <span>R$ 200</span>
          </Line>
          <Line>
            Vida Fidelidade: <span>R$ 85</span>
          </Line>
        </Item>

        <Item>
          <Icone>
            <BenefitsIcon width="30px" height="30px" fill="#FFF" />
          </Icone>
          <Title>
            <span>Desconto</span>Ortopedia
          </Title>
          <Line className="through">
            Particular: <span>R$ 250</span>
          </Line>
          <Line>
            Vida Fidelidade: <span>R$ 85</span>
          </Line>
        </Item>

        <Item>
          <Icone>
            <BenefitsIcon width="30px" height="30px" fill="#FFF" />
          </Icone>
          <Title>
            <span>Desconto</span>Oftalmologia
          </Title>
          <Line className="through">
            Particular: <span>R$ 200</span>
          </Line>
          <Line>
            Vida Fidelidade: <span>R$ 85</span>
          </Line>
        </Item>

        <Item>
          <Icone>
            <BenefitsIcon width="30px" height="30px" fill="#FFF" />
          </Icone>
          <Title>
            <span>Desconto</span>Otorrinolaringologia
          </Title>
          <Line className="through">
            Particular: <span>R$ 300</span>
          </Line>
          <Line>
            Vida Fidelidade: <span>R$ 85</span>
          </Line>
        </Item>

        <Item>
          <Icone>
            <BenefitsIcon width="30px" height="30px" fill="#FFF" />
          </Icone>
          <Title>
            <span>Desconto</span>Hepatologia
          </Title>
          <Line className="through">
            Particular: <span>R$ 300</span>
          </Line>
          <Line>
            Vida Fidelidade: <span>R$ 85</span>
          </Line>
        </Item>

        <Item>
          <Icone>
            <BenefitsIcon width="30px" height="30px" fill="#FFF" />
          </Icone>
          <Title>
            <span>Desconto</span>Oncologia
          </Title>
          <Line className="through">
            Particular: <span>R$ 300</span>
          </Line>
          <Line>
            Vida Fidelidade: <span>R$ 150</span>
          </Line>
        </Item>

        <Item>
          <Icone>
            <BenefitsIcon width="30px" height="30px" fill="#FFF" />
          </Icone>
          <Title>
            <span>Desconto</span>Proctologia
          </Title>
          <Line className="through">
            Particular: <span>R$ 300</span>
          </Line>
          <Line>
            Vida Fidelidade: <span>R$ 85</span>
          </Line>
        </Item>

        <Item>
          <Icone>
            <BenefitsIcon width="30px" height="30px" fill="#FFF" />
          </Icone>
          <Title>
            <span>Desconto</span>Vascular
          </Title>
          <Line className="through">
            Particular: <span>R$ 250</span>
          </Line>
          <Line>
            Vida Fidelidade: <span>R$ 85</span>
          </Line>
        </Item>

        <Item>
          <Icone>
            <BenefitsIcon width="30px" height="30px" fill="#FFF" />
          </Icone>
          <Title>
            <span>Desconto</span>Gastroenterologia
          </Title>
          <Line className="through">
            Particular: <span>R$ 300</span>
          </Line>
          <Line>
            Vida Fidelidade: <span>R$ 85</span>
          </Line>
        </Item>

        <Item>
          <Icone>
            <BenefitsIcon width="30px" height="30px" fill="#FFF" />
          </Icone>
          <Title>
            <span>Desconto</span>Urologia
          </Title>
          <Line className="through">
            Particular: <span>R$ 200</span>
          </Line>
          <Line>
            Vida Fidelidade: <span>R$ 85</span>
          </Line>
        </Item>

        <Item>
          <Icone>
            <BenefitsIcon width="30px" height="30px" fill="#FFF" />
          </Icone>
          <Title>
            <span>Desconto</span>Mastologia
          </Title>
          <Line className="through">
            Particular: <span>R$ 300</span>
          </Line>
          <Line>
            Vida Fidelidade: <span>R$ 85</span>
          </Line>
        </Item>

        <Item>
          <Icone>
            <BenefitsIcon width="30px" height="30px" fill="#FFF" />
          </Icone>
          <Title>
            <span>Desconto</span>Ginecologia
          </Title>
          <Line className="through">
            Particular: <span>R$ 200</span>
          </Line>
          <Line>
            Vida Fidelidade: <span>R$ 95</span>
          </Line>
        </Item>

        <Item>
          <Icone>
            <BenefitsIcon width="30px" height="30px" fill="#FFF" />
          </Icone>
          <Title>
            <span>Desconto</span>Dermatologia
          </Title>
          <Line className="through">
            Particular: <span>R$ 250</span>
          </Line>
          <Line>
            Vida Fidelidade: <span>R$ 100</span>
          </Line>
        </Item>

        <Item>
          <Icone>
            <BenefitsIcon width="30px" height="30px" fill="#FFF" />
          </Icone>
          <Title>
            <span>Desconto</span>Pediatria
          </Title>
          <Line className="through">
            Particular: <span>R$ 300</span>
          </Line>
          <Line>
            Vida Fidelidade: <span>R$ 100</span>
          </Line>
        </Item>

        <Item>
          <Icone>
            <BenefitsIcon width="30px" height="30px" fill="#FFF" />
          </Icone>
          <Title>
            <span>Desconto</span>Cardiologia - Incluindo - ECG
          </Title>
          <Line className="through">
            Particular: <span>R$ 310</span>
          </Line>
          <Line>
            Vida Fidelidade: <span>R$ 140</span>
          </Line>
        </Item>
      </Items>
    </Container>
  );
}

export default Benefits;
