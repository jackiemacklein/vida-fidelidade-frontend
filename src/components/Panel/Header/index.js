import React, { useState, useEffect } from "react";

/* navigation */
import { Link, useHistory } from "react-router-dom";

/* import Kieee Rendering */
import { InitialDataContext } from "./../../Kieee";

/* import componets */

/* import services */
import { logout } from "./../../../services/auth";

/* import utils */
import { activeUrl } from "./../../../utils/functions";

/* import logos */
import color from "./../../../assets/logos/color.png";

/* import icons */
import MenuIcon from "./../../../assets/icons/menu";
import MenuCloseIcon from "./../../../assets/icons/menuClose";

/* import images */

/* import styles */
import { Container, LogoContainer, Logo, Nav, List, ListItem } from "./styles";

let timer;
function Header({ setOpenedMenu, openedMenu }) {
  const history = useHistory();
  const initialData = InitialDataContext;

  useEffect(() => {}, [InitialDataContext]);

  return (
    <Container id="home">
      <Nav>
        <Link to="/painel">
          <LogoContainer title="Logo Vida Cartão Fidelidade - Cartão de descontos" alt="Logo Vida Cartão Fidelidade - Cartão de descontos">
            <Logo src={color} title="Logo Vida Cartão Fidelidade - Cartão de descontos" alt="Logo Vida Cartão Fidelidade - Cartão de descontos" />
          </LogoContainer>
        </Link>
        {openedMenu ? <MenuCloseIcon onClick={() => setOpenedMenu(false)} /> : <MenuIcon onClick={() => setOpenedMenu(true)} />}

        <List open={openedMenu}>
          <a href={"/"} title="Voltar para o site">
            <ListItem id="headerBtnBackSite" name="headerBtnBackSite" className="back">
              Voltar para o site
            </ListItem>
          </a>

          <Link to={"/painel/meus-dados"} title="Seus dados do Vida Cartão Fidelidade - Cartão de descontos">
            <ListItem className={activeUrl("/painel/meus-dados", history) ? "active" : ""}>Meus Dados</ListItem>
          </Link>

          <Link to={"/painel/pagamentos"} title="Seus pagamentos no Vida Cartão Fidelidade - Cartão de descontos">
            <ListItem className={activeUrl("/painel/pagamentos", history) ? "active" : ""}>Pagamentos</ListItem>
          </Link>

          <Link to={"/painel/meu-plano"} title="Seu plano do Vida Cartão Fidelidade - Cartão de descontos">
            <ListItem className={activeUrl("/painel/meu-plano", history) ? "active" : ""}>Meu Plano</ListItem>
          </Link>

          <Link to={"/painel/meus-dependentes"} title="Seis dependentes no Vida Cartão Fidelidade - Cartão de descontos">
            <ListItem className={activeUrl("/painel/meus-dependentes", history) ? "active" : ""}>Meus Dependentes</ListItem>
          </Link>

          <ListItem className="button" onClick={() => logout(history)}>
            Sair
          </ListItem>
        </List>
      </Nav>
    </Container>
  );
}

export default Header;
