import "./../../../configs/dotenv";
import "isomorphic-fetch";

import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

/* import Kieee Rendering */
import { KieeeHead, useInitialData } from "./../../../components/Kieee";

/* import services */
import api from "./../../../services/api";
import { getUser } from "./../../../services/auth";

/* import utils */
import { maskTelephone89Digitos, parseInteger, maskCep, maskCpfCnpj } from "./../../../utils/functions";
import { getDDD, getTel, getDateByTimeZoneCba } from "./../../../utils/functions";
import { ModalContext } from "./../../../components/Forms/Modal";
import states from "./../../../utils/states.json";

/* import components */
import InternalTitle from "./../../../components/InternalTitle";
import Input from "./../../../components/Forms/Input";
import Select from "./../../../components/Forms/Select";
import Header from "./../../../components/Panel/Header";
import Footer from "./../../../components/Footer";
import Wallet from "./../Wallet";

/* import images */

/* import icons */

/* import styles */
import { Container, About, Description, Button } from "./styles";
import { Content, ContentTitle, Row, ItemButton } from "./styles";

function Component(props) {
  const modal = useContext(ModalContext);
  const history = useHistory();

  const [openedMenu, setOpenedMenu] = useState(false);
  const initialData = useInitialData(props, requestInitialData);

  const [modalWalletOpen, setModalWalletOpen] = useState(false);

  const [data, setData] = useState({});
  const [id, setId] = useState("");
  const [nomeFantasia, setNomeFantasia] = useState("");
  const [name, setName] = useState("");
  const [tipoCliente, setTipoCliente] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [dtbirth, setDtbirth] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [emailSecundario, setEmailSecundario] = useState("");
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
  const [contato, setContato] = useState("");
  const [usuarioCadastro, setUsuarioCadastro] = useState("");

  const [statusCliente, setStatusCliente] = useState("");
  const [foneResidencial, setFoneResidencial] = useState("");
  const [foneComercial, setFoneComercial] = useState("");
  const [dDDResidencial, setDDDResidencial] = useState("");
  const [dDDComercial, setDDDComercial] = useState("");
  const [codigoUsuario, setCodigoUsuario] = useState("");

  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");

  const [confirm_password_erro, setConfirm_password_error] = useState("-");
  const [confirm_password_erro_color, setConfirm_password_error_color] = useState("#AA91A0");

  const [loading, setLoading] = useState(false);
  const [preLoading, setPreLoading] = useState(true);

  const handleUpdateUser = async event => {
    event.preventDefault();

    try {
      setLoading(true);

      const { data } = await api.put(`/clientes/${id}`, {
        NomeCliente: name,
        NomeFantasia: nomeFantasia,
        TipoCliente: tipoCliente,
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
        FoneResidencial: foneResidencial,
        FoneComercial: foneComercial,
        DDDResidencial: dDDResidencial,
        DDDComercial: dDDComercial,
        DDDCelular: getDDD(phone),
        Celular: getTel(phone),
        Contato: contato,
        EmailPrincipal: email,
        EmailSecundario: emailSecundario,
        skype: "",
        whats: "",
        UsuarioCadastro: usuarioCadastro,
        StatusCliente: statusCliente,
        CodigoUsuario: getUser().id,
        Senha: password,
      });
      console.log(data);

      modal.show(true, "Sucesso!", "", "Seus dados foram atualizados com sucesso!", "", "", "Fechar", () => () => modal.hide(), true);

      //envia a atualização para a wirecard
      await api.get(`/wiredcard/atualizapessoa/${id}`);
    } catch (error) {
      console.log(error);
      console.log(error?.response);
      modal.show(true, "Erro!", "Erro ao tentar atualizar suas informações!", "Tente novamente", "", "", "Fechar", () => () => modal.hide(), true);
    }

    setLoading(false);
  };

  const loadData = async () => {
    setPreLoading(true);
    try {
      const { data } = await api.get(`/clientes/${getUser()?.id}`);

      if (data.length >= 0) {
        setData(data[0]);
        setId(data[0]._id);
        setName(data[0].NomeCliente);
        setNomeFantasia(data[0].NomeFantasia);
        setTipoCliente(data[0].TipoCliente);
        setCpf(maskCpfCnpj(data[0].CpfCNPJ));
        setRg(data[0].IERG);
        setAddress(data[0].Endereço);
        setNumber(data[0].Numero);
        setComplement(data[0].Complemento);
        setNeighborhood(data[0].Bairro);
        setCity(data[0].Cidade);
        setState(data[0].UF);
        setCep(maskCep(data[0].Cep));
        setDtbirth(getDateByTimeZoneCba(data[0].DataNascimento, "yyyy'-'MM'-'dd"));
        setGender(data[0].Sexo);
        setPhone(maskTelephone89Digitos(`${data[0].DDDCelular} ${data[0].Celular}`));
        setContato(data[0].Contato);
        setEmail(data[0].EmailPrincipal);
        setEmailSecundario(data[0].EmailSecundario);
        setStatusCliente(data[0].StatusCliente);
        setUsuarioCadastro(data[0].UsuarioCadastro);
        setFoneResidencial(data[0].FoneResidencial);
        setFoneComercial(data[0].FoneComercial);
        setDDDResidencial(data[0].DDDResidencial);
        setDDDComercial(data[0].DDDComercial);
        setCodigoUsuario(data[0].CodigoUsuario);
      } else {
        setData(data);
        setId(data._id);
        setName(data.NomeCliente);
        setNomeFantasia(data.NomeFantasia);
        setTipoCliente(data.TipoCliente);
        setCpf(maskCpfCnpj(data.CpfCNPJ));
        setRg(data.IERG);
        setAddress(data.Endereço);
        setNumber(data.Numero);
        setComplement(data.Complemento);
        setNeighborhood(data.Bairro);
        setCity(data.Cidade);
        setState(data.UF);
        setCep(maskCep(data.Cep));
        setDtbirth(getDateByTimeZoneCba(data.DataNascimento, "yyyy'-'MM'-'dd"));
        setGender(data.Sexo);
        setPhone(maskTelephone89Digitos(`${data.DDDCelular} ${data.Celular}`));
        setContato(data.Contato);
        setEmail(data.EmailPrincipal);
        setEmailSecundario(data.EmailSecundario);
        setStatusCliente(data.StatusCliente);
        setUsuarioCadastro(data.UsuarioCadastro);
        setFoneResidencial(data.FoneResidencial);
        setFoneComercial(data.FoneComercial);
        setDDDResidencial(data.DDDResidencial);
        setDDDComercial(data.DDDComercial);
        setCodigoUsuario(data.CodigoUsuario);
      }
    } catch (erro) {
      console.log("Erro ao consultar dados: ", erro);
    }
    setPreLoading(false);
  };

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

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Header setOpenedMenu={setOpenedMenu} openedMenu={openedMenu} />
      <Container onClick={() => setOpenedMenu(false)} className="hiddenInPrint">
        <About>
          {preLoading ? (
            <>
              <InternalTitle title1="Carregando" title2="Dados ..." styles={{ marginBottom: "20px" }} />
            </>
          ) : (
            <>
              <InternalTitle title1="Meus" title2="Dados" styles={{ marginBottom: "20px" }} />
            </>
          )}

          <Description>
            <span className="black">Confira seu dados e atualize seu cadastro preenchendo o formulário abaixo</span>
          </Description>
          {preLoading ? (
            <></>
          ) : (
            <>
              <ItemButton type="button" className="edit" title="editar" onClick={() => setModalWalletOpen(true)}>
                Clique aqui para imprimir sua carteirinha<i className="fa fa-address-card"></i>
              </ItemButton>
            </>
          )}

          <Content autoComplete="off" autocomplete="off" onSubmit={handleUpdateUser}>
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
                infoText="Entre contato com nossa central para alterar o seu e-mail"
                infoTextColor="#FFA53C"
                required
                type="email"
                disabled
                readonly
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
              <Input
                name="number"
                id="number"
                initialValue={number}
                onChange={text => setNumber(text)}
                label="Número *"
                required
                type="text"
                infoText="Campo obrigatório (S/N = Sem Número)"
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
                onChange={text => setPassword(text)}
                label="Senha"
                infoText="Deixe o campo em branco, caso não queria atualizar a sua senha."
                type="password"
              />

              <Input
                name="confirm_password"
                id="confirm_password"
                initialValue={confirm_password}
                onChange={text => setConfirm_password(text)}
                label="Confirme sua senha"
                infoText={confirm_password_erro}
                infoTextColor={confirm_password_erro_color}
                type="password"
              />
            </Row>

            <Button disabled={loading}>{loading ? "Atualizando dados..." : "Atualizar dados"}</Button>
          </Content>
        </About>
      </Container>
      <Wallet modalWalletOpen={modalWalletOpen} setModalWalletOpen={setModalWalletOpen} data={data} />
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
