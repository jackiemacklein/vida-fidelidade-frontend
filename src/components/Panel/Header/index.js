import React, { useState, useEffect } from "react";

/* navigation */
import { Link, useHistory } from "react-router-dom";

/* import Kieee Rendering */
import { InitialDataContext } from "./../../Kieee";

/* import componets */

/* import services */
import api from "./../../../services/api";
import { logout, getUser, isAuthenticated } from "./../../../services/auth";

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

  //useEffect(() => {}, [InitialDataContext]);
  useEffect(() => {
    async function checkToken() {
      try {
        const response = await api.get(`/users/${getUser().id}`, {});

        if (response.data && response.data.statusCode === 401) {
          logout(history, "/login");
        }
      } catch (e) {
        console.log("oiii", e.response);
        if (e.response && (e.response.status === 401 || e.response.status === 500)) {
          logout(history, "/login");
        }
      }
    }
    console.log(isAuthenticated());
    if (isAuthenticated()) checkToken();
    else logout(history, "/login");
  }, []);

  return (
    <Container id="home">
      <Nav>
        <Link to={process.env.REACT_APP_PAGE_CONSTRUCTION === "true" ? "/site/portal" : "/portal"}>
          <LogoContainer title="Logo Vida Cartão Fidelidade - Cartão de descontos" alt="Logo Vida Cartão Fidelidade - Cartão de descontos">
            <Logo src={color} title="Logo Vida Cartão Fidelidade - Cartão de descontos" alt="Logo Vida Cartão Fidelidade - Cartão de descontos" />
          </LogoContainer>
        </Link>
        {openedMenu ? <MenuCloseIcon onClick={() => setOpenedMenu(false)} /> : <MenuIcon onClick={() => setOpenedMenu(true)} />}

        <List open={openedMenu}>
          <a href={process.env.REACT_APP_PAGE_CONSTRUCTION === "true" ? "/site/" : "/"} title="Voltar para o site">
            <ListItem id="headerBtnBackSite" name="headerBtnBackSite" className="back">
              Voltar para o site
            </ListItem>
          </a>

          <Link
            to={process.env.REACT_APP_PAGE_CONSTRUCTION === "true" ? "/site/portal/meus-dados" : "/portal/meus-dados"}
            title="Seus dados do Vida Cartão Fidelidade - Cartão de descontos">
            <ListItem className={activeUrl("/portal/meus-dados", history) ? "active" : ""}>Meus Dados</ListItem>
          </Link>

          {/*
          <Link
            to={process.env.REACT_APP_PAGE_CONSTRUCTION === "true" ? "/site/portal/pagamentos" : "/portal/pagamentos"}
            title="Seus pagamentos no Vida Cartão Fidelidade - Cartão de descontos">
            <ListItem className={activeUrl("/portal/pagamentos", history) ? "active" : ""}>Pagamentos</ListItem>
          </Link>
*/}
          <Link
            to={process.env.REACT_APP_PAGE_CONSTRUCTION === "true" ? "/site/portal/meu-plano" : "/portal/meu-plano"}
            title="Seu plano do Vida Cartão Fidelidade - Cartão de descontos">
            <ListItem className={activeUrl("/portal/meu-plano", history) ? "active" : ""}>Meu Plano</ListItem>
          </Link>

          <Link
            to={process.env.REACT_APP_PAGE_CONSTRUCTION === "true" ? "/site/portal/meus-dependentes" : "/portal/meus-dependentes"}
            title="Seis dependentes no Vida Cartão Fidelidade - Cartão de descontos">
            <ListItem className={activeUrl("/portal/meus-dependentes", history) ? "active" : ""}>Meus Dependentes</ListItem>
          </Link>

          <ListItem className="button" onClick={() => logout(history, process.env.REACT_APP_PAGE_CONSTRUCTION === "true" ? "/site/" : "/")}>
            Sair
          </ListItem>
        </List>
      </Nav>
    </Container>
  );
}

export default Header;
