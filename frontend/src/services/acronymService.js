import axios from "axios";

const API = "http://localhost:3000/api/acronyms";

export const getAcronym = (acronimo) => {
  return axios.get(`${API}/buscar/${acronimo}`);
};

export const crearAcronym = (acronimo) => {
  return axios.post(API, { acronimo });
};

export const listarAcronyms = () => {
  return axios.get(API);
};
