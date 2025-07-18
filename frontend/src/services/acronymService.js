import axios from "axios";

const API = "http://localhost:3000/api/acronyms";

export const getAcronym = (acronimo) => {
  return axios.get(`${API}/buscar/${acronimo}`);
};

export const historialAcronyms = () => {
  return axios.get(`${API}/historial/`);
};

export const historialAcronymsPorFecha = (desde, hasta) => {
  return axios.get(`${API}/historial/fecha`, {
    params: { desde, hasta },
  });
};
