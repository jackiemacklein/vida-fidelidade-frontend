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

import cardFront from "./../../../assets/images/cardFront.png";
import cardBack from "./../../../assets/images/cardBack.png";

import { getDateByTimeZoneCba, getDate } from "./../../../utils/functions";

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

function Wallet({ modalWalletOpen, setModalWalletOpen, data = { clientesDependentes: [] } }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setModalWalletOpen(false);
  };

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={modalWalletOpen} fullScreen={fullScreen}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose} className="hiddenInPrint">
          Impressão de carteirinha
        </DialogTitle>
        <DialogContent dividers className="removePaddingInPrint">
          <Typography gutterBottom className="hiddenInPrint" style={{ textAlign: "center" }}>
            <small>
              Use o navegador Google Chrome para imprimir
              <br />
              Clique sobre o botão imprimir, será aberto a tela de impressão de seu navegador. Para garantir a qualidade da impressão: Marque a opção{" "}
              <strong>gráficos de segundo plano</strong> e <strong>Margem padrão</strong>.
            </small>
          </Typography>
          <Container>
            <div class="image">
              <div id="imageFront">
                <div id="datas">
                  <span id="ShowName" style={{ color: "white" }}>
                    {data.NomeCliente}
                  </span>
                  <span id="ShowNumber">{data.CpfCNPJ}</span>
                  <span id="ShowDateBirthText">DATA DE NASCIMENTO</span>
                  <span id="ShowDateBirth">{getDateByTimeZoneCba(data.DataNascimento, "dd'/'MM'/'yyyy")}</span>
                  <span id="ShowInitialDateText">DESDE</span>
                  <span id="ShowInitialDate">{getDateByTimeZoneCba(data.DataCadastro, "dd'/'MM'/'yyyy")}</span>
                  <span id="ShowType">{"PARTICULAR"}</span>
                </div>
                <img src={cardFront} />
              </div>
              <div id="imageBack" style={{ pageBreakBefore: "always" }}>
                {data?.clientesDependentes?.length > 0 ? (
                  <>
                    <span id="datasDepeText">DEPENDENTES</span>
                    <div id="datasDepe">
                      {data.clientesDependentes.map(item => (
                        <span key={item._id}>{item.NomeDependente}</span>
                      ))}
                    </div>
                  </>
                ) : (
                  <></>
                )}
                <img src={cardBack} />
              </div>
            </div>
          </Container>
        </DialogContent>
        <DialogActions className="hiddenInPrint">
          <Button onClick={handleClose} color="default">
            Fechar
          </Button>
          <Button autoFocus onClick={() => window.print()} color="primary">
            Imprimir
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Wallet;
