import "./../configs/dotenv";
export const TOKEN_API = "TOKEN_API";
export const USER_NAME = "USER_NAME";
export const USER_ID = "USER_ID";
export const USER_EMAIL = "USER_EMAIL";
export const USER_TYPE = "USER_TYPE";

export const isAuthenticated = () => localStorage?.getItem(TOKEN_API) !== null;
export const getToken = () => localStorage?.getItem(TOKEN_API);
export const getUser = () => ({
  id: localStorage?.getItem(USER_ID),
  name: localStorage?.getItem(USER_NAME),
  email: localStorage?.getItem(USER_EMAIL),
  type: localStorage?.getItem(USER_TYPE),
});

export const login = (token, id, email, name, type = "") => {
  localStorage.setItem(TOKEN_API, token);
  localStorage.setItem(USER_NAME, name);
  localStorage.setItem(USER_ID, id);
  localStorage.setItem(USER_EMAIL, email);
  localStorage.setItem(USER_TYPE, type);
  //localStorage.setItem(CLIENT_ID, client_id);
};

export const logout = (history, path = "/") => {
  localStorage.removeItem(TOKEN_API);
  localStorage.removeItem(USER_NAME);
  localStorage.removeItem(USER_ID);
  localStorage.removeItem(USER_EMAIL);
  localStorage.removeItem(USER_TYPE);
  //localStorage.removeItem(CLIENT_ID);

  history.push(path);
};
