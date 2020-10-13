import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import routes from "./routes";

import Modal, { ModalContext } from "./components/Forms/Modal";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [summaryModal, setSummaryModal] = useState("");
  const [messageModal, setMessageModal] = useState("");
  const [successButtonModal, setSuccessButtonModal] = useState("");
  const [successButtonCallbackModal, setSuccessButtonCallbackModal] = useState(() => {});
  const [defaultButtonModal, setDefaultButtonModal] = useState("");
  const [defaultButtonCallbackModal, setDefaultButtonCallbackModal] = useState(() => {});
  const [closeButtonModal, setCloseButtonModal] = useState(false);

  const modal = {
    show: (open, title, summary, message, successButton, successButtonCallback, defaultButton, defaultButtonCallback, closeButton) => {
      setOpenModal(open);
      setTitleModal(title);
      setSummaryModal(summary);
      setMessageModal(message);
      setSuccessButtonModal(successButton);
      setSuccessButtonCallbackModal(successButtonCallback);
      setDefaultButtonModal(defaultButton);
      setDefaultButtonCallbackModal(defaultButtonCallback);
      setCloseButtonModal(closeButton);
    },
    hide: () => {
      setOpenModal(false);
    },
  };

  return (
    <ModalContext.Provider value={{ ...modal }}>
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Switch>
      <Modal
        open={openModal}
        title={titleModal}
        summary={summaryModal}
        message={messageModal}
        successButton={successButtonModal}
        successButtonCallback={successButtonCallbackModal}
        defaultButton={defaultButtonModal}
        defaultButtonCallback={defaultButtonCallbackModal}
        closeButton={closeButtonModal}
      />
    </ModalContext.Provider>
  );
};

export default App;
