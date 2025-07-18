import axios from "axios";
import config from "../config.js";
import {
  guardarAcronimo,
  obtenerHistorial,
  obtenerHistorialFecha,
} from "../models/acronyms.model.js";

export const consultarAcronimo = async (acronimo) => {
  const url = `${config.API_URL}?uid=${config.API_UID}&tokenid=${config.API_TOKEN}&term=${acronimo}&format=json`;
  const response = await axios.get(url);
  await guardarAcronimo(acronimo);
  return response.data;
};

export const obtenerHistorialAcronimos = async () => {
  return await obtenerHistorial();
};

export const obtenerHistorialPorFecha = async (desde, hasta) => {
  return await obtenerHistorialFecha(desde, hasta);
};
