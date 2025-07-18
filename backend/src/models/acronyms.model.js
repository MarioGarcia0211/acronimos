import db from "../database.js";

export const guardarAcronimo = async (acronimo) => {
  const [rows] = await db.query(
    "INSERT INTO acronimos_consultados (acronimo) VALUES (?)",
    [acronimo]
  );
  return rows;
};

export const obtenerHistorial = async () => {
  const [rows] = await db.query(
    `SELECT 
      acronimo, 
      DATE_FORMAT(fecha_consulta, '%d/%m/%Y %r') AS fecha_legible 
     FROM acronimos_consultados 
     ORDER BY fecha_consulta DESC`
  );
  return rows;
};
