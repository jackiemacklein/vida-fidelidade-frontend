export const TOKEN_API = "TOKEN_API";
export const CLIENT_ID = "CLIENT_ID";
export const USER_NAME = "USER_NAME";
export const USER_ID = "USER_ID";
export const USER_EMAIL = "USER_EMAIL";

export const isAuthenticated = () => localStorage.getItem(TOKEN_API) !== null;
//export const getToken = () => localStorage.getItem(TOKEN_API);
export const getToken = () =>
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjhkOTZhMjhjNDQ2NmNlOGI3MDExMzkiLCJuYW1lIjoiSmFja2nDqiBNYWNrbGVpbiIsImVtYWlsIjoiamFja2llbWFja2xlaW5AZ21haWwuY29tIiwidHlwZSI6MCwiaWF0IjoxNjAzMTU0NjQ1LCJleHAiOjE2MDMxNzYyNDV9.A0blyMaakV3p7BqSPIDvMJ_JMS4bhp_e08ccwpfazhc";

export const login = (token, id, email, client_id, name) => {
  localStorage.setItem(TOKEN_API, token);
  localStorage.setItem(CLIENT_ID, client_id);
  localStorage.setItem(USER_NAME, name);
  localStorage.setItem(USER_ID, id);
  localStorage.setItem(USER_EMAIL, email);
};

export const logout = history => {
  localStorage.removeItem(TOKEN_API);
  localStorage.removeItem(CLIENT_ID);
  localStorage.removeItem(USER_NAME);
  localStorage.removeItem(USER_ID);
  localStorage.removeItem(USER_EMAIL);

  history.push("/");
};
