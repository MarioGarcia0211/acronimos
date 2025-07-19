## Estructura del Proyecto
- backend - API REST en Node.js + Express + MySQL
- frontend - Interfaz de usuario desarrollada en React

## Requisitos
Asegúrate de tener instalado:
- Node.js
- MySQL
- npm

## Instalación y configuración
### Backend
1. Ve a la carpeta del backend:
   cd backend
2. Instala las dependencias:
   npm install
3. Crea la base de datos y las tablas necesarias en MySQL. Puedes usar un script como este:
   CREATE DATABASE acronimos_db;
   USE acronimos_db;
   CREATE TABLE acronimos_consultados (
     id INT AUTO_INCREMENT PRIMARY KEY,
     acronimo VARCHAR(50) NOT NULL,
     fecha_consulta TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
4. Inicia el servidor:
   npm run dev
El backend estará corriendo en http://localhost:3000.

### Frontend
1. Ve a la carpeta del frontend:
   cd frontend
2. Instala las dependencias:
   npm install
3. Inicia la aplicación React:
   npm run dev
La app estará corriendo en http://localhost:5173
