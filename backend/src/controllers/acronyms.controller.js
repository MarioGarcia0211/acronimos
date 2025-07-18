import {
  consultarAcronimo,
  obtenerHistorialAcronimos,
  obtenerHistorialPorFecha,
} from "../services/acronyms.services.js";

export const obtenerSignificados = async (req, res) => {
  const { acronimo } = req.params;
  try {
    const resultado = await consultarAcronimo(acronimo);
    res.json(resultado);
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Error al consultar la API", error: error.message });
  }
};

export const historialAcronimos = async (req, res) => {
  try {
    const historial = await obtenerHistorialAcronimos();
    res.json(historial);
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Error al obtener historial", error: error.message });
  }
};

export const historialAcronimosPorFecha = async (req, res) => {
  const { desde, hasta } = req.query;

  if (!desde || !hasta) {
    return res
      .status(400)
      .json({ mensaje: "Parámetros 'desde' y 'hasta' son obligatorios" });
  }

  try {
    const historial = await obtenerHistorialPorFecha(desde, hasta);
    res.json(historial);
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Error al filtrar historial", error: error.message });
  }
};
