import React, { useState } from "react";

/* material desing */

import useMediaQuery from "@material-ui/core/useMediaQuery";

import { withStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import api from "./../../../../services/api";

import { maskCardExpiration, checkCardValidate } from "./../../../../utils/functions";
import { getCardFlag, getMonth, getYear } from "./../../../../utils/functions";

import Input from "./../../../../components/Forms/Input";
import Select from "./../../../../components/Forms/Select";

/* import styles */
import { Container } from "./styles";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function MethodPayment({ modalPaymentOpen, setModalPaymentOpen, data = {} }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [method, setMethod] = useState("billet");
  const [card_number, setCard_number] = useState("");
  const [name, setName] = useState("");
  const [validate, setValidate] = useState("");
  const [cvc, setCvc] = useState("");

  const [showFields, setShowFields] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log(data);

  const handleClose = () => {
    setModalPaymentOpen(false);
  };

  const handleUpdatePaymentMethod = async () => {
    setLoading(true);

    try {
      if (method === "card-credit" && !checkCardValidate(validate)) {
        //notify.show(true, "Informe corretamente a validade do cartão! Padrão: MM/AA", "warning");
        return false;
      }

      const res = await api.put(`/contratos/${data.contract_id}`, {
        TipoPagamento: method === "card-credit" ? "Cartao" : "Boleto",
        CobrancaxContrato: {
          NumeroCartao: method === "card-credit" ? card_number : "",
          TipoCartao: method === "card-credit" ? getCardFlag(card_number) : "",
          NomeCartao: method === "card-credit" ? name : "",
          MesCartao: method === "card-credit" ? getMonth(validate) : "",
          AnoCartao: method === "card-credit" ? getYear(validate) : "",
          CVVCarta: method === "card-credit" ? cvc : "",
        },
      });

      if (res.data) {
        setLoading(false);
        setShowFields(false);
        // notify.show(true, "Dados de pagamento atualizado com sucesso", "success");
        setModalPaymentOpen(false);
      } else {
        setLoading(false);
        //notify.show(true, "Erro ao atualziado dados de pagamento! Tente novamente", "error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={modalPaymentOpen} fullScreen={fullScreen}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose} className="hiddenInPrint">
          Forma de Pagamento
        </DialogTitle>

        {!showFields ? (
          <>
            <DialogContent dividers id="form_info">
              <Container>
                <Typography gutterBottom className="hiddenInPrint" style={{ textAlign: "justify", fontSize: "18px" }}>
                  <small>
                    <strong>Tipo da Recorrência:</strong> {data.TipoPagamento}
                    {data.Tipo}
                    <br />
                    {data.TipoPagamentoAdesao ? (
                      <>
                        <strong>Tipo de Pagamento da Adesão:</strong> {data.TipoPagamentoAdesao}
                        <br />
                        {data.NumeroCupom ? (
                          <>
                            <strong>Cupoum do Pagamento da Adesão:</strong> {data.NumeroCupom}
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                    {data.TipoPagamento === "CARTAO" || data.TipoPagamento === "Cartao" ? (
                      <>
                        <strong>Número do Cartão:</strong> {data.NumeroCartao.substr(0, 4)}********
                        <br />
                        <strong>Bandeira do Cartão:</strong> {data.TipoCartao}
                        <br />
                        <strong>Nome no Cartão:</strong> {data.NomeCartao}
                        <br />
                        <strong>Mês/Ano:</strong> {data.MesCartao} / {data.AnoCartao}
                        <br />
                        <strong>CVV:</strong> ***
                      </>
                    ) : (
                      <></>
                    )}
                  </small>
                </Typography>
              </Container>
            </DialogContent>
          </>
        ) : (
          <></>
        )}

        {showFields ? (
          <>
            <DialogContent dividers id="form_fields">
              <Typography gutterBottom className="hiddenInPrint" style={{ textAlign: "center" }}>
                Sua nova forma de pagamento só será ativado no próximo vencimento.
                <br />
                <br />
                Obs: Caso sua assinatura esteja atrasada ligue <strong>(65) 3029-9700</strong> ou pelo e-mail <strong>fernando.rodrigues@vidavg.com.br</strong>{" "}
                Para emitir o seu boleto para pagamento.
              </Typography>
              <Container>
                <Select
                  id="method"
                  name="method"
                  label="Método de Pagamento - Recorrência *"
                  tabIndex={108}
                  initialValue={method}
                  onChange={text => setMethod(text)}
                  options={[
                    { value: "card-credit", text: "Cartão de crédito" },
                    { value: "billet", text: "Boleto" },
                  ]}
                  multiple={false}
                  required={true}
                />

                {method === "card-credit" ? (
                  <>
                    <Input
                      name="card_number"
                      id="card_number"
                      initialValue={card_number}
                      onChange={text => setCard_number(text)}
                      label="Número do cartão *"
                      required={method === "card-credit"}
                      type="text"
                      tabIndex={109}
                    />

                    <Input
                      name="name"
                      id="name"
                      tabIndex={110}
                      initialValue={name}
                      onChange={text => setName(text)}
                      label="Nome do titular*"
                      required={method === "card-credit"}
                      type="text"
                    />

                    <Input
                      name="validate"
                      id="validate"
                      initialValue={validate}
                      onChange={text => setValidate(maskCardExpiration(text))}
                      label="Validade (MM/AA) *"
                      required={method === "card-credit"}
                      type="text"
                      maxLength={7}
                      tabIndex={111}
                    />

                    <Input
                      name="cvc"
                      id="cvc"
                      tabIndex={112}
                      initialValue={cvc}
                      onChange={text => setCvc(text)}
                      label="CVC *"
                      required={method === "card-credit"}
                      maxLength={4}
                      type="text"
                    />
                  </>
                ) : (
                  <></>
                )}
              </Container>
            </DialogContent>
          </>
        ) : (
          <></>
        )}

        {!showFields ? (
          <>
            <DialogActions>
              <Button onClick={() => setShowFields(true)} color="secondary">
                Alterar Forma de Pagamento
              </Button>

              <Button onClick={handleClose} color="default">
                Fechar
              </Button>
            </DialogActions>
          </>
        ) : (
          <></>
        )}

        {showFields ? (
          <>
            <DialogActions>
              <Button disabled={loading} onClick={() => handleUpdatePaymentMethod()} color="primary">
                {loading ? "Salvando..." : "Salvar"}
              </Button>

              <Button onClick={() => setShowFields(false)} color="default">
                Cancelar
              </Button>
            </DialogActions>
          </>
        ) : (
          <></>
        )}
      </Dialog>
    </div>
  );
}

export default MethodPayment;
