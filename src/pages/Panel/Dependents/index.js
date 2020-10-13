import "./../../../configs/dotenv";
import "isomorphic-fetch";

import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

/* import Kieee Rendering */
import { KieeeHead, useInitialData } from "./../../../components/Kieee";

/* import utils */
import { ModalContext } from "./../../../components/Forms/Modal";

/* import components */
import InternalTitle from "./../../../components/InternalTitle";
import Input from "./../../../components/Forms/Input";
import Select from "./../../../components/Forms/Select";
import Header from "./../../../components/Panel/Header";
import Footer from "./../../../components/Footer";

/* import images */

/* import icons */

/* import styles */
import { Container, About, Description, Button } from "./styles";
import { Content, ContentTitle, Row, Items, Item } from "./styles";
import { ItemTitle, ItemButton } from "./styles";

function Component(props) {
  const modal = useContext(ModalContext);
  const history = useHistory();

  const [openedMenu, setOpenedMenu] = useState(false);
  const initialData = useInitialData(props, requestInitialData);

  const [name, setName] = useState("");
  const [rg, setRg] = useState("");
  const [dtbirth, setDtbirth] = useState("");
  const [kinship, setKinship] = useState("");

  const handleSave = async () => {
    try {
      modal.show(true, "Sucesso!", "Dependente adicionado com sucesso!", "", "", "", "Fechar", () => () => modal.hide(), true);
    } catch (error) {
      console.log(error);
      modal.show(true, "Erro!", "Erro ao tentar adicionar dependente!", "Tente novamente", "", "", "Fechar", () => () => modal.hide(), true);
    }
  };

  const handleRemove = async () => {
    try {
    } catch (error) {
      console.log(error);
      modal.show(true, "Erro!", "Erro ao tentar remover dependente!", "Tente novamente", "", "", "Fechar", () => () => modal.hide(), true);
    }
  };

  const loadDependets = async () => {};

  useEffect(() => {
    loadDependets();
  }, []);

  return (
    <>
      <Header setOpenedMenu={setOpenedMenu} openedMenu={openedMenu} />
      <Container onClick={() => setOpenedMenu(false)}>
        <About>
          <InternalTitle title1="" title2="Dependentes" styles={{ marginBottom: "20px" }} />

          <Description>
            <span className="black">
              Confira aqui a relação dos dependentes vinculados ao seu plano e<br />
              faça a inclusão de novos dependentes.
            </span>
          </Description>
          <Items>
            <Item key={1} onClick={() => handleRemove()}>
              <ItemTitle>
                Nome completo
                <span>Jackiê Macklein dos Santos</span>
              </ItemTitle>

              <ItemTitle>
                Data de nascimento
                <span>26/01/1993</span>
              </ItemTitle>

              <ItemTitle>
                RG
                <span>0000000-0</span>
              </ItemTitle>

              <ItemTitle>
                Parentesco
                <span>Cônjuges</span>
              </ItemTitle>

              <ItemButton type="button">Remover</ItemButton>
            </Item>
          </Items>
        </About>

        <About>
          <InternalTitle title1="Novo" title2="Dependente" styles={{ marginBottom: "-10px" }} />

          <Content autoComplete="off" autocomplete="off" onSubmit={() => handleSave()}>
            <ContentTitle>Dados pessoais</ContentTitle>
            <Row>
              <Input
                name="name"
                id="name"
                initialValue={name}
                onChange={text => setName(text)}
                label="Nome completo *"
                type="text"
                required
                infoText="Campo obrigatório"
              />
              <Input name="rg" id="rg" initialValue={rg} onChange={text => setRg(text)} label="RG *" type="text" required infoText="Campo obrigatório" />
            </Row>

            <Row>
              <Input
                name="dtbirth"
                id="dtbirth"
                initialValue={dtbirth}
                onChange={text => setDtbirth(text)}
                label="Data de nascimento *"
                type="date"
                required
                infoText="Campo obrigatório"
              />
              <Select
                name="kinship"
                id="kinship"
                initialValue={kinship}
                onChange={text => setKinship(text)}
                label="Parentesco"
                options={[
                  { value: "Cônjuges", text: "Cônjuges" },
                  { value: "Filhos", text: "Filhos" },
                ]}
                empty
                required
                infoText="Campo obrigatório"
              />
            </Row>

            <Button>Adicionar Dependente</Button>
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
        title="Dependentes - Vida Fidelidade"
        description="Confira aqui a relação dos dependentes vinculados ao seu plano e faça a inclusão de novos dependentes."
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
