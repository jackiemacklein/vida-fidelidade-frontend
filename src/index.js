import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

/* import Kieee Rendering */
import { InitialDataContext } from "./components/Kieee";

/* import components */
import App from "./App";

/* import GrbalStyles */
import GlobalStyle from "./styles/global";

const root = document.getElementById("root");

const AppDOM = () => {
  return (
    <React.StrictMode>
      <BrowserRouter forceRefresh={true}>
        <InitialDataContext.Provider value={InitialDataContext.inicialData}>
          <GlobalStyle />
          <App />
        </InitialDataContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

if (root.hasChildNodes() === true) {
  ReactDOM.hydrate(<AppDOM />, root);
} else {
  ReactDOM.render(<AppDOM />, root);
}
