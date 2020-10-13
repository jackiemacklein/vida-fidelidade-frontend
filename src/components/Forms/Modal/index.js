import React, { useContext } from "react";

import { Container, Header, Title, CloseButton, Content } from "./styles";
import { Summary, Description, Footer, SuccessButton, DefaultButton, Body } from "./styles";

export const ModalContext = React.createContext(() => {});

function Modal({
  open,
  title = "",
  summary = "",
  message = "",
  successButton = "",
  successButtonCallback = () => {},
  defaultButton = "",
  defaultButtonCallback = () => {},
  closeButton = true,
}) {
  const modal = useContext(ModalContext);

  return (
    <Container open={open}>
      <Content>
        <Header>
          {title ? <Title>{title}</Title> : <></>}

          {closeButton ? <CloseButton onClick={() => modal.hide()}>X</CloseButton> : <></>}
        </Header>
        <Body>
          {summary ? <Summary>{summary}</Summary> : <></>}

          {message ? <Description>{message}</Description> : <></>}
        </Body>
        <Footer>
          {successButton ? <SuccessButton onClick={() => successButtonCallback()}>{successButton}</SuccessButton> : <></>}

          {defaultButton ? <DefaultButton onClick={() => defaultButtonCallback()}>{defaultButton}</DefaultButton> : <></>}
        </Footer>
      </Content>
    </Container>
  );
}

export default Modal;
