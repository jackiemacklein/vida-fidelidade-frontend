import "./../../configs/dotenv";
import React, { useState, useEffect } from "react";

/* navigation */
import { Link } from "react-router-dom";

/* import Kieee Rendering */
import { InitialDataContext } from "./../Kieee";

/* import componets */

/* import utils */
import { handleAnchor } from "./../../utils/functions";

/* import logos */
import color from "./../../assets/logos/color.png";

/* import icons */
import MenuIcon from "./../../assets/icons/menu";
import MenuCloseIcon from "./../../assets/icons/menuClose";

/* import images */

/* import styles */
import { Container, LogoContainer, Logo, Nav, List, ListItem } from "./styles";
import { Banners, Content, Subtitle, Title, Button, Video, Description } from "./styles";
import { Figure, Image } from "./styles";

let timer;
function Header({ setOpenedMenu, openedMenu, showHeader = false, internalPage = false }) {
  const initialData = InitialDataContext;

  const [banners, setBanners] = useState([
    {
      title: "Chegou o",
      subtitle: "Vida Cartão Fidelidade",
      summary: "Mais saúde para sua família!",
      buttonText: "Clique e conheça os benefícios",
      buttonTarget: "beneficios",
      image_path: "",
      video_path: "https://www.youtube.com/embed/GsyJE-f2Ue4",
      description:
        "Agora cuidar da sua saúde e de quem você ama ficou mais fácil. Com ótimos descontos e sem filas, o Vida Cartão Fidelidade proporciona mais saúde e segurança para toda sua família.",
    },
  ]);
  //const [banners, setBanners] = useState(initialData.banners?.data ?? []);

  const [bannersCount, setBannersCount] = useState(1);
  //const [bannersCount, setBannersCount] = useState(initialData?.banners?.data?.length ?? 0);

  const [showing, setShowing] = useState(0);
  //const [openedMenu, setOpenedMenu] = useState(false);

  const handleNext = async () => {
    clearTimeout(timer);
    if (showing >= bannersCount - 1) {
      await setShowing(0);
    } else {
      await setShowing(showing + 1);
    }
  };

  const handlePrev = async () => {
    clearTimeout(timer);
    if (showing <= 0) {
      await setShowing(bannersCount - 1);
    } else {
      await setShowing(showing - 1);
    }
  };

  useEffect(() => {
    timer = setTimeout(() => {
      handleNext();
    }, 5000);
    return () => clearTimeout(timer);
  }, [showing, bannersCount]);

  useEffect(() => {
    // setBanners(initialData.banners?.data ?? []);
    //setBannersCount(initialData.banners?.data.length ?? 0);
  }, [InitialDataContext]);

  return (
    <Container id="home">
      <Nav>
        <Link to={process.env.REACT_APP_PAGE_CONSTRUCTION === "true" ? "/site/" : "/"}>
          <LogoContainer title="Logo Vida Cartão Fidelidade - Cartão de descontos" alt="Logo Vida Cartão Fidelidade - Cartão de descontos">
            <Logo src={color} title="Logo Vida Cartão Fidelidade - Cartão de descontos" alt="Logo Vida Cartão Fidelidade - Cartão de descontos" />
          </LogoContainer>
        </Link>
        {openedMenu ? <MenuCloseIcon onClick={() => setOpenedMenu(false)} /> : <MenuIcon onClick={() => setOpenedMenu(true)} />}

        <List open={openedMenu}>
          {!internalPage ? (
            <ListItem id="headerBtnDuvidasFrequentes" name="headerBtnDuvidasFrequentes" onClick={() => handleAnchor("duvidas-frequentes")}>
              Dúvidas Frequentes
            </ListItem>
          ) : (
            <a href={process.env.REACT_APP_PAGE_CONSTRUCTION === "true" ? "/site/#duvidas-frequentes" : "/#duvidas-frequentes"} title="duvidas-frequentes">
              <ListItem id="headerBtnDuvidasFrequentes" name="headerBtnDuvidasFrequentes">
                Dúvidas Frequentes
              </ListItem>
            </a>
          )}

          <Link
            to={process.env.REACT_APP_PAGE_CONSTRUCTION === "true" ? "/site/login" : "/login"}
            title="Acessar porta do Assinante - Vida Cartão Fidelidade - Cartão de descontos">
            <ListItem>Portal do Assinante</ListItem>
          </Link>

          {!internalPage ? (
            <>
              <ListItem onClick={() => handleAnchor("planos")} className="button">
                adquira já seu Cartão Vida Fidelidade
              </ListItem>
            </>
          ) : (
            <></>
          )}

          {/*<Link to={"/vida-pagamento-facil"} title="Pagar sua mensalidade do Cartão Fidelidade - Cartão de descontos">
            <ListItem className="button">Pague aqui sua mensalidade</ListItem>
          </Link>*/}
        </List>
      </Nav>
      {showHeader ? (
        <Banners onClick={() => setOpenedMenu(false)}>
          {banners.map((item, index) => (
            <Content key={index} active={showing === index}>
              <Subtitle>{item.summary}</Subtitle>
              <Title>
                {item.title} <span>{item.subtitle}</span>
              </Title>

              <Description>{item.description}</Description>

              {/*
              <Button onClick={() => handleAnchor(item.buttonTarget)}>{item.buttonText}</Button>
              */}
              {/*<Video>
                {item.video_path ? (
                  <iframe
                    src={`${item.video_path}?autoplay=0&amp;showinfo=0&amp;modestbranding=0&amp;controls=1&amp;rel=0`}
                    frameBorder="0"
                    controls="1"
                    rel="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  />
                ) : (
                  <Figure title={item.summary} alt={item.summary}>
                    <Image src={item.image_path} title={item.summary} alt={item.summary} />
                  </Figure>
                )}
                </Video>*/}
            </Content>
          ))}
        </Banners>
      ) : (
        <></>
      )}
    </Container>
  );
}

export default Header;
