import {
  consultarAcronimo,
  obtenerHistorialAcronimos,
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
