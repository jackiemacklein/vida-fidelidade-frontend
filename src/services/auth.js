import "./../configs/dotenv";
export const TOKEN_API = "TOKEN_API";
export const CLIENT_ID = "CLIENT_ID";
export const USER_NAME = "USER_NAME";
export const USER_ID = "USER_ID";
export const USER_EMAIL = "USER_EMAIL";

export const isAuthenticated = () => localStorage.getItem(TOKEN_API) !== null;
export const getToken = () => localStorage.getItem(TOKEN_API);

export const login = (token, id, email, name) => {
  localStorage.setItem(TOKEN_API, token);
  localStorage.setItem(USER_NAME, name);
  localStorage.setItem(USER_ID, id);
  localStorage.setItem(USER_EMAIL, email);
};

export const logout = history => {
  localStorage.removeItem(TOKEN_API);
  localStorage.removeItem(USER_NAME);
  localStorage.removeItem(USER_ID);
  localStorage.removeItem(USER_EMAIL);

  history.push(process.env.REACT_APP_PAGE_CONSTRUCTION ? "/site/" : "/");
};
