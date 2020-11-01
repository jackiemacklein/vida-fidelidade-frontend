import "./configs/dotenv";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Payment from "./pages/Payment";
import EasyPayment from "./pages/EasyPayment";
import NotFount from "./pages/404";

import Login from "./pages/Login";
import MyAccount from "./pages/Panel/Account";
import MyPlan from "./pages/Panel/Plan";
import MyPay from "./pages/Panel/Payments";
import MyDependents from "./pages/Panel/Dependents";

const routes = [
  {
    exact: true,
    path: process.env.REACT_APP_PAGE_CONSTRUCTION === "true" ? "/site" : "/",
    component: Home.Component,
    requestInitialData: Home.requestInitialData,
    options: {
      Head: Home.Head,
    },
  },
  {
    exact: true,
    path: process.env.REACT_APP_PAGE_CONSTRUCTION === "true" ? "/site/criar-conta/:plan_id?" : "/criar-conta/:plan_id?",
    component: Account.Component,
    requestInitialData: Account.requestInitialData,
    options: {
      Head: Account.Head,
    },
  },
  {
    exact: true,
    path: process.env.REACT_APP_PAGE_CONSTRUCTION === "true" ? "/site/pagamento/:plan_id/:user_id" : "/pagamento/:plan_id/:user_id",
    component: Payment.Component,
    requestInitialData: Payment.requestInitialData,
    options: {
      Head: Payment.Head,
    },
  },
  {
    exact: true,
    path: process.env.REACT_APP_PAGE_CONSTRUCTION === "true" ? "/site/vida-pagamento-facil" : "/vida-pagamento-facil",
    component: EasyPayment.Component,
    requestInitialData: EasyPayment.requestInitialData,
    options: {
      Head: EasyPayment.Head,
    },
  },
  {
    exact: true,
    path: process.env.REACT_APP_PAGE_CONSTRUCTION === "true" ? "/site/login" : "/login",
    component: Login.Component,
    requestInitialData: Login.requestInitialData,
    options: {
      Head: Login.Head,
    },
  },
  {
    exact: true,
    path: process.env.REACT_APP_PAGE_CONSTRUCTION === "true" ? "/site/portal/" : "/portal/",
    component: MyAccount.Component,
    requestInitialData: MyAccount.requestInitialData,
    options: {
      Head: MyAccount.Head,
    },
  },
  {
    exact: true,
    path: process.env.REACT_APP_PAGE_CONSTRUCTION === "true" ? "/site/portal/meus-dados" : "/portal/meus-dados",
    component: MyAccount.Component,
    requestInitialData: MyAccount.requestInitialData,
    options: {
      Head: MyAccount.Head,
    },
  },
  {
    exact: true,
    path: process.env.REACT_APP_PAGE_CONSTRUCTION === "true" ? "/site/portal/meu-plano" : "/portal/meu-plano",
    component: MyPlan.Component,
    requestInitialData: MyPlan.requestInitialData,
    options: {
      Head: MyPlan.Head,
    },
  },
  {
    exact: true,
    path: process.env.REACT_APP_PAGE_CONSTRUCTION === "true" ? "/site/portal/pagamentos" : "/portal/pagamentos",
    component: MyPay.Component,
    requestInitialData: MyPay.requestInitialData,
    options: {
      Head: MyPay.Head,
    },
  },
  {
    exact: true,
    path: process.env.REACT_APP_PAGE_CONSTRUCTION === "true" ? "/site/portal/meus-dependentes" : "/portal/meus-dependentes",
    component: MyDependents.Component,
    requestInitialData: MyDependents.requestInitialData,
    options: {
      Head: MyDependents.Head,
    },
  },
  {
    component: NotFount.Component,
    options: {
      Head: NotFount.Head,
    },
  },
];

export default routes;
