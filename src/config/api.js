import axios from "axios";

export const API = axios.create({
  baseURL: process.env.REACT_APP_URL_API + process.env.REACT_APP_API_VERSION,
});

export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};
