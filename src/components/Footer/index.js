import React from "react";

/* import components */

/* import images */
import white from "./../../assets/logos/white.png";

/* import utils */
import { getYear } from "date-fns";

/* import icons */
import FacebookIcon from "./../../assets/icons/facebook";
import InstagramIcon from "./../../assets/icons/instagram";

/* import styles */
import { Container, Section, LogoFigure, Logo, Address, Social, Copy } from "./styles";

function Footer({ onClick }) {
  return (
    <Container id="footer" onClick={() => onClick()} className="hiddenInPrint">
      <Section>
        <LogoFigure title="Logo Vida Cartão Fidelidade - Cartão de descontos" alt="Logo Vida Cartão Fidelidade - Cartão de descontos">
          <Logo src={white} alt="Logo Vida Cartão Fidelidade - Cartão de descontos" title="Logo Vida Cartão Fidelidade - Cartão de descontos" />
        </LogoFigure>
        <Address>
          Rua Mamede Untar, 127 - Centro Sul Várzea Grande - MT
          <br />
          CEP: 78110-315
        </Address>

        <Social>
          <a href="https://www.facebook.com/vidadiagnosticoesaude/" rel="opener referrer follow" target="_blank" title="Acesse nossa página no facebook">
            <FacebookIcon width="30px" height="30px" fill="#FFF" />
          </a>

          <a href="https://www.instagram.com/vida.vg/" rel="opener referrer follow" target="_blank" title="Acesse nosso perfil no Instagram">
            <InstagramIcon width="30px" height="30px" fill="#FFF" />
          </a>
        </Social>

        <Copy>&copy; {getYear(new Date())} VidaVg CNPJ: 36.108.599.0001-29. Todos os direitos reservados</Copy>
      </Section>
    </Container>
  );
}

export default Footer;
