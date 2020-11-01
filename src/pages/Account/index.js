import "./../../configs/dotenv";
import "isomorphic-fetch";

import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";

/* import Kieee Rendering */
import { KieeeHead, useInitialData } from "./../../components/Kieee";

/* import utils */
import { maskCpfCnpj, maskTelephone89Digitos, parseInteger, maskCep } from "./../../utils/functions";
import { getDDD, getTel } from "./../../utils/functions";
import { ModalContext } from "./../../components/Forms/Modal";
import states from "./../../utils/states.json";

/* import services */
import api from "./../../services/api";

/* import components */
import InternalTitle from "./../../components/InternalTitle";
import Input from "./../../components/Forms/Input";
import Select from "./../../components/Forms/Select";
import Checkbox from "./../../components/Forms/Checkbox";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";

/* import images */

/* import icons */

/* import styles */
import { Container, About, Description, Button } from "./styles";
import { Content, ContentTitle, Row } from "./styles";

function Component(props) {
  const modal = useContext(ModalContext);
  const history = useHistory();
  const params = useParams();

  const [openedMenu, setOpenedMenu] = useState(false);
  const initialData = useInitialData(props, requestInitialData);

  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [fantasyName, setFantasyName] = useState("");
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

  const [confirm_password_erro, setConfirm_password_error] = useState("Confirme aqui sua senha");
  const [confirm_password_erro_color, setConfirm_password_error_color] = useState("#FF0000");

  const [terms, setTerms] = useState(false);
  const [privacy_policy, setPrivacy_policy] = useState(false);
  const [refund_policy, setRefund_policy] = useState(false);

  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({});

  const handleCreateUser = async event => {
    event.preventDefault();

    setLoading(true);
    let userData = user;

    try {
      if (userData.length === undefined) {
        userData = await api.post("/users", { type: 1, password, name, email });

        setUser(userData.data);
        userData = userData.data;
      }
    } catch (errorUser) {
      console.log("erro ao cadastrar usuário", errorUser);

      modal.show(
        true,
        "Erro!",
        "Tente novamente.",
        "Desculpe o transtorno! Não foi possivel criar a sua conta de assinatura no momento! Estamos enfrentando uma instabilidade em nosso serviços!",
        "",
        "",
        "Fechar",
        () => () => modal.hide(),
        true,
      );

      setLoading(false);
      return false;
    }

    try {
      const client = await api.post("/clientes", {
        NomeCliente: name,
        NomeFantasia: fantasyName,
        TipoCliente: type,
        CpfCNPJ: parseInteger(cpf),
        IERG: rg,
        Endereco: address,
        Numero: number,
        Complemento: complement,
        Bairro: neighborhood,
        Cidade: city,
        UF: state,
        Cep: parseInteger(cep),
        DataNascimento: dtbirth,
        Sexo: gender,
        FoneResidencial: "",
        FoneComercial: "",
        DDDResidencial: "",
        FoneResidencial: "",
        DDDComercial: "",
        FoneComercial: "",
        DDDCelular: getDDD(phone),
        Celular: getTel(phone),
        Contato: "",
        EmailPrincipal: email,
        EmailSecundario: "",
        skype: "",
        whats: "",
        UsuarioCadastro: "website",
        StatusCliente: "ativo",
        CodigoUsuario: userData._id,
      });
      setLoading(false);

      history.push(
        process.env.REACT_APP_PAGE_CONSTRUCTION === "true"
          ? `/site/pagamento/${params.plan_id}/${client.data._id}`
          : `/pagamento/${params.plan_id}/${client.data._id}`,
      );
    } catch (error) {
      console.log(error);

      //if (error.response.statusCode === 500) {
      modal.show(
        true,
        "Erro desconhecido",
        "Tente novamente.",
        "Desculpe o transtorno! Estamos enfrentando uma instabilidade em nosso serviços!",
        "",
        "",
        "Fechar",
        () => () => modal.hide(),
        true,
      );
      //} else {
      // }

      setLoading(false);
    }
  };

  useEffect(() => {
    if (type === "PF") setFantasyName("");
  }, [type]);

  useEffect(() => {
    if (confirm_password && password !== confirm_password) {
      setConfirm_password_error("Por favor confirme sua senha corretamente.");
      setConfirm_password_error_color("#FF0000");
    } else if (confirm_password && password === confirm_password) {
      setConfirm_password_error("OK!");
      setConfirm_password_error_color("#AA91A0");
    } else {
      setConfirm_password_error("-");
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
      <Header setOpenedMenu={setOpenedMenu} openedMenu={openedMenu} internalPage />
      <Container onClick={() => setOpenedMenu(false)}>
        <About>
          <InternalTitle title1="Realize seu" title2="Cadastro" styles={{ marginBottom: "20px" }} />

          <Description>
            <span className="black">
              Para continuar com sua assinatura realize seu cadastro
              <br />
              preenchendo o formulário abaixo
            </span>
          </Description>
          <Content autoComplete="off" autocomplete="off" onSubmit={handleCreateUser}>
            <ContentTitle>Dados Pessoais</ContentTitle>
            <Row>
              <Select
                name="type"
                id="type"
                initialValue={type}
                onChange={text => setType(text)}
                label="Tipo *"
                infoText="Campo obrigatório"
                required
                options={[
                  { value: "PF", text: "Pessoa física" },
                  { value: "PJ", text: "Pessoa jurídica" },
                ]}
                empty
              />
            </Row>
            <Row>
              <Input
                name="name"
                id="name"
                initialValue={name}
                onChange={text => setName(text)}
                label={type === "PJ" ? "Razão Social *" : "Nome Completo *"}
                infoText="Campo obrigatório"
                required
                type="text"
              />

              {type === "PJ" ? (
                <Input
                  name="fantasyName"
                  id="fantasyName"
                  initialValue={fantasyName}
                  onChange={text => setFantasyName(text)}
                  label="Nome Fantasia *"
                  infoText="Campo obrigatório"
                  required={type === "PJ"}
                  type="text"
                />
              ) : (
                <></>
              )}
            </Row>

            <Row>
              <Input
                name="cpf"
                id="cpf"
                initialValue={cpf}
                onChange={text => setCpf(maskCpfCnpj(text))}
                label={type === "PJ" ? "CNPJ *" : "CPF *"}
                infoText="Campo obrigatório"
                required
                type="text"
                maxLength={type === "PJ" ? 18 : 11}
              />

              <Input
                name="rg"
                id="rg"
                initialValue={rg}
                onChange={text => setRg(text)}
                label={type === "PJ" ? "IE" : "RG *"}
                infoText={type === "PJ" ? "" : "Campo obrigatório"}
                required
                type="text"
              />
            </Row>

            {type === "PF" ? (
              <Row>
                <Input
                  name="dtbirth"
                  id="dtbirth"
                  initialValue={dtbirth}
                  onChange={text => setDtbirth(text)}
                  label={"Data de Nascimento *"}
                  infoText={"Campo obrigatório"}
                  required={true}
                  type="date"
                />

                <Select
                  name="gender"
                  id="gender"
                  initialValue={gender}
                  onChange={text => setGender(text)}
                  label={type === "PJ" ? "Sexo" : "Sexo *"}
                  infoText={type === "PJ" ? "" : "Campo obrigatório"}
                  required={type === "PF"}
                  options={[
                    { value: "F", text: "Feminino" },
                    { value: "M", text: "Masculino" },
                  ]}
                  empty
                />
              </Row>
            ) : (
              <>
                <Input
                  name="dtbirth"
                  id="dtbirth"
                  initialValue={dtbirth}
                  onChange={text => setDtbirth(text)}
                  label={"Data de Fundação"}
                  infoText={"Campo obrigatório *"}
                  required={true}
                  type="date"
                />
              </>
            )}

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
                label="Telefone/Celular *"
                infoText="&nbsp;"
                type="text"
                placeholder="(00) 0 0000-0000"
                required
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
              <Input
                name="number"
                id="number"
                initialValue={number}
                onChange={text => setNumber(text)}
                label="Número *"
                infoText="Campo obrigatório (S/N = Sem Número)"
                type="text"
                required
              />

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
                infoText="Campo obrigatório"
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

            <Row style={{ marginTop: "25px" }}>
              <Checkbox
                name="terms"
                id="terms"
                initialValue={"terms"}
                onChange={(text, checked) => setTerms(checked)}
                label="Aceitar os Termos"
                link={"/static/files/termo_adesao.pdf"}
                checked={terms}
                required
              />
            </Row>

            <Row>
              <Checkbox
                name="privacy_policy"
                id="privacy_policy"
                initialValue={"privacy_policy"}
                onChange={(text, checked) => setPrivacy_policy(checked)}
                label="Aceitar o Política de Privacidade"
                link={"/static/files/regras_privacidade.pdf"}
                checked={privacy_policy}
                required
              />
            </Row>

            <Row>
              <Checkbox
                name="refund_policy"
                id="refund_policy"
                initialValue={"refund_policy"}
                onChange={(text, checked) => setRefund_policy(checked)}
                label="Aceitar a Política de Reembolso"
                link={"/static/files/politica_reembolso.pdf"}
                checked={refund_policy}
                required
              />
            </Row>

            <Button disabled={loading}>{loading ? `PROCESSANDO...` : `CADASTRAR`}</Button>
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
        title="Realize seu cadastro - Vida Fidelidade"
        description="Realize seu cadastro e pagando uma pequena mensalidade, você e seus dependentes tem descontos em consultas e exames que fazem parte do complexo Vida e muitos outros Benefícios."
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
