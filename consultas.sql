-- Consultas implementadas
-- Guardar un acrónimo:
INSERT INTO acronimos_consultados (acronimo) VALUES (?);

-- Obtener historial completo (ordenado por fecha descendente):
SELECT 
  acronimo, 
  DATE_FORMAT(fecha_consulta, '%d/%m/%Y %r') AS fecha_legible 
FROM acronimos_consultados 
ORDER BY fecha_consulta DESC;

-- Obtener historial por rango de fechas:
SELECT 
  acronimo, 
  DATE_FORMAT(fecha_consulta, '%d/%m/%Y %r') AS fecha_legible 
FROM acronimos_consultados 
WHERE DATE(fecha_consulta) BETWEEN ? AND ? 
ORDER BY fecha_consulta DESC;
