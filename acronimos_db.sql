CREATE DATABASE acronimos_db;

USE acronimos_db;

CREATE TABLE acronimos_consultados (
  id INT AUTO_INCREMENT PRIMARY KEY,
  acronimo VARCHAR(50) NOT NULL,
  fecha_consulta TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
