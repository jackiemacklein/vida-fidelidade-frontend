import "./../../../configs/dotenv";
import "isomorphic-fetch";

import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

/* import Kieee Rendering */
import { KieeeHead, useInitialData } from "./../../../components/Kieee";

/* import utils */
import { ModalContext } from "./../../../components/Forms/Modal";
import { maskCpfCnpj, getDateByTimeZoneCba, parseInteger, maskTelephone89Digitos } from "./../../../utils/functions";
import { handleAnchor } from "./../../../utils/functions";

/* import services */
import api from "./../../../services/api";
import { getUser } from "./../../../services/auth";

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
  //const initialData = useInitialData(props, requestInitialData);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [dtbirth, setDtbirth] = useState("");
  const [kinship, setKinship] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [dependentes, setDependentes] = useState([]);

  const [loading, setLoading] = useState(false);
  const [preLoading, setPreLoading] = useState(true);

  const handleSave = async event => {
    event.preventDefault();
    setLoading(true);

    try {
      if (id) {
        const { data } = await api.put(`/dependentes/${id}`, {
          CodigoCliente: getUser().client_id,
          NomeDependente: name,
          CPF: parseInteger(cpf),
          RG: rg,
          Sexo: gender,
          DataDeNascimento: dtbirth,
          Parentesco: kinship,
          EmailDependente: email,
          FoneDependente: phone,
        });
        if (data) {
          modal.show(true, "Sucesso!", "", "Dependente atualizado com sucesso!", "", "", "Fechar", () => () => modal.hide(), true);
        }
      } else {
        const { data } = await api.post("/dependentes", {
          CodigoCliente: getUser().client_id,
          NomeDependente: name,
          CPF: parseInteger(cpf),
          RG: rg,
          Sexo: gender,
          DataDeNascimento: dtbirth,
          Parentesco: kinship,
          EmailDependente: email,
          FoneDependente: phone,
        });

        if (data) {
          modal.show(true, "Sucesso!", "", "Dependente adicionado com sucesso!", "", "", "Fechar", () => () => modal.hide(), true);
        }
      }
      loadDependents();
      clear();
    } catch (error) {
      console.log(error);
      modal.show(true, "Erro!", "", "Erro ao tentar adicionar dependente! Tente novamente", "", "", "Fechar", () => () => modal.hide(), true);
    }
    setLoading(false);
  };

  const handleRemove = async id => {
    const checkConfirm = window.confirm("Deseja realmente remover esse dependente?\nEsse processo é irreversível!");

    if (checkConfirm) {
      try {
        const { data } = await api.delete(`/dependentes/${id}`);
        if (data) {
          modal.show(true, "Removido com sucesso!", "", "O Dependente foi removido com sucesso!", "", "", "Fechar", () => () => modal.hide(), true);
          loadDependents();
        }
      } catch (error) {
        console.log(error);
        modal.show(
          true,
          "Erro!",
          "Erro ao tentar remover dependente!",
          "Tente novamente",
          () => () => handleRemove(id),
          "",
          "Fechar",
          () => () => modal.hide(),
          true,
        );
      }
    }
  };

  const handleEdit = data => {
    setId(data._id);
    setName(data.NomeDependente);
    setCpf(data.CPF);
    setRg(data.RG);
    setDtbirth(getDateByTimeZoneCba(data.DataDeNascimento, "yyyy'-'MM'-'dd"));
    setKinship(data.Parentesco);
    setGender(data.Sexo);
    setEmail(data.EmailDependente);
    setPhone(data.FoneDependente);

    handleAnchor("form");
  };

  const clear = data => {
    setId("");
    setName("");
    setCpf("");
    setRg("");
    setDtbirth("");
    setKinship("");
    setGender("");
    setEmail("");
    setPhone("");
  };

  const loadDependents = async () => {
    try {
      const { data } = await api.get(`/clientes/${getUser()?.client_id}`);
      setDependentes(data.Dependentes ?? []);

      // const { data } = await api.get(`/dependentes/`);
      // setDependentes(data ?? []);
    } catch (error) {
      console.log("erro ao carregar dependentes", error);
    }
    setPreLoading(false);
  };

  useEffect(() => {
    loadDependents();
  }, []);

  return (
    <>
      <Header setOpenedMenu={setOpenedMenu} openedMenu={openedMenu} />
      <Container onClick={() => setOpenedMenu(false)}>
        {dependentes.length > 0 ? (
          <>
            <About>
              <InternalTitle title1="" title2="Dependentes" styles={{ marginBottom: "20px" }} />

              <Description>
                <span className="black">
                  Confira aqui a relação dos dependentes vinculados ao seu plano e<br />
                  faça a inclusão de novos dependentes.
                </span>
              </Description>
              <Items>
                {dependentes.map(item => (
                  <Item key={item._id}>
                    <ItemTitle>
                      Nome completo
                      <span>{item.NomeDependente}</span>
                    </ItemTitle>

                    <ItemTitle>
                      Data de nascimento
                      <span>{getDateByTimeZoneCba(item.DataDeNascimento, "dd'/'MM'/'yyyy")}</span>
                    </ItemTitle>

                    <ItemTitle>
                      CPF
                      <span>{maskCpfCnpj(item.CPF)}</span>
                    </ItemTitle>

                    <ItemTitle>
                      RG
                      <span>{item.RG}</span>
                    </ItemTitle>

                    <ItemTitle>
                      Sexo
                      <span>{item.Sexo === "F" ? "Feminino" : "Masculino"}</span>
                    </ItemTitle>

                    <ItemTitle>
                      Parentesco
                      <span>{item.Parentesco}</span>
                    </ItemTitle>

                    <ItemButton type="button" title="Remover" onClick={() => handleRemove(item._id)}>
                      <i className="fa fa-close"></i>
                    </ItemButton>

                    <ItemButton type="button" className="edit" title="editar" onClick={() => handleEdit(item)}>
                      <i className="fa fa-edit"></i>
                    </ItemButton>
                  </Item>
                ))}
              </Items>
            </About>
          </>
        ) : (
          <></>
        )}

        <About id="form">
          {preLoading ? (
            <InternalTitle title1="Carregando" title2="Dependentes..." styles={{ marginBottom: "-10px" }} />
          ) : (
            <InternalTitle title1="Novo" title2="Dependente" styles={{ marginBottom: "-10px" }} />
          )}

          <Content autoComplete="off" autocomplete="off" onSubmit={handleSave}>
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
              <Input name="cpf" id="cpf" initialValue={cpf} onChange={text => setCpf(maskCpfCnpj(text))} label="CPF" type="text" infoText="&nbsp;" />
            </Row>

            <Row>
              <Input name="rg" id="rg" initialValue={rg} onChange={text => setRg(text)} label="RG *" type="text" required infoText="Campo obrigatório" />
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
            </Row>

            <Row>
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

              <Select
                name="gender"
                id="gender"
                initialValue={gender}
                onChange={text => setGender(text)}
                label="Sexo"
                options={[
                  { value: "F", text: "Feminino" },
                  { value: "M", text: "Masculino" },
                ]}
                empty
                required
                infoText="&nbsp;"
              />
            </Row>

            <Row>
              <Input name="email" id="email" initialValue={email} onChange={text => setEmail(text)} label="E-mail" type="email" infoText="&nbsp;" />

              <Input
                name="phone"
                id="phone"
                initialValue={phone}
                onChange={text => setPhone(maskTelephone89Digitos(text))}
                label="Telefone"
                type="text"
                infoText="&nbsp;"
              />
            </Row>

            {id ? (
              <>
                <Button disabled={loading}>{loading ? "SALVANDO..." : "SALVAR"}</Button>
              </>
            ) : (
              <>
                <Button disabled={loading}>{loading ? "SALVANDO..." : "ADICIONAR"}</Button>
              </>
            )}
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
