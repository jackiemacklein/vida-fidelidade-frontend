import "./../../../configs/dotenv";
import "isomorphic-fetch";

import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

/* import Kieee Rendering */
import { KieeeHead, useInitialData } from "./../../../components/Kieee";

/* import utils */
import { maskTelephone89Digitos, parseInteger, maskCep } from "./../../../utils/functions";
import { ModalContext } from "./../../../components/Forms/Modal";
import states from "./../../../utils/states.json";

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
import { Content, ContentTitle, Row } from "./styles";

function Component(props) {
  const modal = useContext(ModalContext);
  const history = useHistory();

  const [openedMenu, setOpenedMenu] = useState(false);
  const initialData = useInitialData(props, requestInitialData);

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [dtbirth, setDtbirth] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cep, setCep] = useState("");
  const [cep_msg, setCep_msg] = useState("Campo obrigatório");
  const [cep_msg_color, setCep_msg_color] = useState("#AA91A0");

  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");

  const [confirm_password_erro, setConfirm_password_error] = useState("");
  const [confirm_password_erro_color, setConfirm_password_error_color] = useState("#AA91A0");

  const handleUpdateUser = () => {
    try {
      modal.show(true, "Sucesso!", "Seus dados foram atualizados com sucesso!", "", "", "", "Fechar", () => () => modal.hide(), true);
    } catch (error) {
      console.log(error);
      modal.show(true, "Erro!", "Erro ao tentar atualizar suas informações!", "Tente novamente", "", "", "Fechar", () => () => modal.hide(), true);
    }
  };

  useEffect(() => {
    if (confirm_password && password !== confirm_password) {
      setConfirm_password_error("Por favor confirme sua senha corretamente.");
      setConfirm_password_error_color("#FF0000");
    } else if (confirm_password && password === confirm_password) {
      setConfirm_password_error("OK!");
      setConfirm_password_error_color("#AA91A0");
    } else {
      setConfirm_password_error("");
      setConfirm_password_error_color("#AA91A0");
    }
  }, [password, confirm_password]);

  useEffect(() => {
    async function loadAddress() {
      setCep_msg("Buscando endereço...");
      const data = await fetch(`https://viacep.com.br/ws/${parseInteger(cep)}/json`, {})
        .then(response => response.json())
        .catch(error => console.log(error));

      if (data && !data.erro) {
        setCep_msg_color("#AA91A0");
        setCep_msg("Campo obrigatório");

        setAddress(data.logradouro);
        setComplement(data.complemento);
        setNeighborhood(data.bairro);
        setCity(data.localidade);
        setState(data.uf);
      } else {
        setCep_msg_color("#FF0000");
        setCep_msg("CEP Não localizado.");
      }
    }

    if (cep.length >= 8) {
      loadAddress();
    }
  }, [cep]);

  useEffect(() => {
    const checkUser = async () => {
      const data = await fetch(`https://viacep.com.br/ws/${parseInteger(cep)}/json`, {})
        .then(response => response.json())
        .catch(error => console.log(error));

      if (data) {
      }
    };
    if (cpf.length >= 11) {
      checkUser();
    }
  }, [cpf]);

  return (
    <>
      <Header setOpenedMenu={setOpenedMenu} openedMenu={openedMenu} />
      <Container onClick={() => setOpenedMenu(false)}>
        <About>
          <InternalTitle title1="Meus" title2="Dados" styles={{ marginBottom: "20px" }} />

          <Description>
            <span className="black">Confira seu dados e atualize seu cadastro preenchendo o formulário abaixo</span>
          </Description>
          <Content autoComplete="off" autocomplete="off" onSubmit={() => handleUpdateUser()}>
            <ContentTitle>Dados Pessoais</ContentTitle>
            <Row>
              <Input
                name="name"
                id="name"
                initialValue={name}
                onChange={text => setName(text)}
                label="Nome Completo *"
                infoText="Campo obrigatório"
                required
                type="text"
              />
            </Row>

            <Row>
              <Input
                name="cpf"
                id="cpf"
                initialValue={cpf}
                label="CPF"
                infoText="Não é possivel alterar o campo CPF"
                infoTextColor="#FFA53C"
                required
                type="text"
                maxLength={11}
                disabled
                readonly
              />

              <Input name="rg" id="rg" initialValue={rg} onChange={text => setRg(text)} label="RG *" infoText="Campo obrigatório" required type="text" />
            </Row>

            <Row>
              <Input
                name="dtbirth"
                id="dtbirth"
                initialValue={dtbirth}
                onChange={text => setDtbirth(text)}
                label="Data de Nascimento *"
                infoText="Campo obrigatório"
                required
                type="date"
              />

              <Select
                name="gender"
                id="gender"
                initialValue={gender}
                onChange={text => setGender(text)}
                label="Sexo *"
                infoText="Campo obrigatório"
                required
                options={[
                  { value: "F", text: "Feminino" },
                  { value: "M", text: "Masculino" },
                ]}
                empty
              />
            </Row>

            <Row>
              <Input
                name="email"
                id="email"
                initialValue={email}
                onChange={text => setEmail(text)}
                label="E-mail *"
                infoText="Campo obrigatório"
                required
                type="email"
              />

              <Input
                name="phone"
                id="phone"
                initialValue={phone}
                onChange={text => setPhone(maskTelephone89Digitos(text))}
                label="Telefone/Celular"
                infoText="&nbsp;"
                type="text"
                placeholder="(00) 0 0000-0000"
              />
            </Row>

            <ContentTitle>Informe o seu endereço</ContentTitle>

            <Row>
              <Input
                name="cep"
                id="cep"
                initialValue={cep}
                onChange={text => setCep(maskCep(text))}
                label="CEP *"
                infoText={cep_msg}
                infoTextColor={cep_msg_color}
                required
                type="text"
              />

              <Input
                name="address"
                id="address"
                initialValue={address}
                onChange={text => setAddress(text)}
                label="Logradouro *"
                infoText="Campo obrigatório"
                type="text"
              />
            </Row>

            <Row>
              <Input name="number" id="number" initialValue={number} onChange={text => setNumber(text)} label="Número" infoText="&nbsp;" type="text" />

              <Input
                name="complement"
                id="complement"
                initialValue={complement}
                onChange={text => setComplement(text)}
                label="Complemento"
                infoText="&nbsp;"
                type="text"
              />
            </Row>

            <Row>
              <Input
                name="neighborhood"
                id="neighborhood"
                initialValue={neighborhood}
                required
                onChange={text => setNeighborhood(text)}
                label="Bairro *"
                infoText="Campo obrigatório"
                type="text"
              />

              <Input
                name="city"
                id="city"
                initialValue={city}
                onChange={text => setCity(text)}
                label="Cidade *"
                required
                infoText="Campo obrigatório"
                type="text"
              />
            </Row>

            <Row>
              <Select
                name="state"
                id="state"
                initialValue={state}
                onChange={text => setState(text)}
                label="Estado / UF *"
                infoText="Campo obrigatório"
                required
                options={states}
                empty
              />
            </Row>
            <ContentTitle>Senha de acesso</ContentTitle>

            <Row>
              <Input
                name="password"
                id="password"
                initialValue={password}
                required
                onChange={text => setPassword(text)}
                label="Senha *"
                infoText="Deixe o campo em branco, caso não queria atualizar a sua senha."
                type="password"
              />

              <Input
                name="confirm_password"
                id="confirm_password"
                initialValue={confirm_password}
                onChange={text => setConfirm_password(text)}
                label="Confirme sua senha *"
                required
                infoText={confirm_password_erro}
                infoTextColor={confirm_password_erro_color}
                type="password"
              />
            </Row>

            <Button>Atualizar dados</Button>
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
        title="Meus Dados - Vida Fidelidade"
        description="Confira seu dados e atualize seu cadastro."
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
