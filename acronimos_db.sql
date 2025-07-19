-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-07-2025 a las 02:56:14
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `acronimos_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `acronimos_consultados`
--

CREATE TABLE `acronimos_consultados` (
  `id` int(11) NOT NULL,
  `acronimo` varchar(50) NOT NULL,
  `fecha_consulta` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `acronimos_consultados`
--

INSERT INTO `acronimos_consultados` (`id`, `acronimo`, `fecha_consulta`) VALUES
(56, 'nasa', '2025-07-18 15:53:56'),
(57, 'RMA', '2025-07-18 15:59:50'),
(58, '1212', '2025-07-18 16:18:34'),
(59, '1212', '2025-07-18 16:19:33'),
(60, 'Madrid', '2025-07-18 16:23:23'),
(61, 'RMA', '2025-07-18 16:23:33'),
(62, 'Real', '2025-07-18 16:23:36'),
(63, 'NASA', '2025-07-01 15:00:00'),
(64, 'FBI', '2025-07-02 16:15:00'),
(65, 'CIA', '2025-07-02 18:20:00'),
(66, 'UNESCO', '2025-07-03 14:40:00'),
(67, 'WHO', '2025-07-03 19:30:00'),
(68, 'OPEC', '2025-07-04 17:05:00'),
(69, 'EU', '2025-07-04 21:00:00'),
(70, 'IMF', '2025-07-05 15:30:00'),
(71, 'UNICEF', '2025-07-05 20:20:00'),
(72, 'WTO', '2025-07-06 13:45:00'),
(73, 'AIDS', '2025-07-06 22:30:00'),
(74, 'COVID', '2025-07-07 16:55:00'),
(75, 'HIV', '2025-07-07 18:10:00'),
(76, 'CPU', '2025-07-08 14:00:00'),
(77, 'GPU', '2025-07-08 15:30:00'),
(78, 'RAM', '2025-07-08 17:00:00'),
(79, 'ROM', '2025-07-08 19:00:00'),
(80, 'USB', '2025-07-09 15:45:00'),
(81, 'HDMI', '2025-07-09 20:30:00'),
(82, 'LAN', '2025-07-09 22:15:00'),
(83, 'WAN', '2025-07-10 14:20:00'),
(84, 'HTML', '2025-07-10 16:30:00'),
(85, 'CSS', '2025-07-10 18:50:00'),
(86, 'JS', '2025-07-10 21:40:00'),
(87, 'SQL', '2025-07-11 14:10:00'),
(88, 'API', '2025-07-11 16:45:00'),
(89, 'JSON', '2025-07-11 18:25:00'),
(90, 'HTTP', '2025-07-12 15:10:00'),
(91, 'HTTPS', '2025-07-12 17:30:00'),
(92, 'IP', '2025-07-12 20:00:00'),
(93, 'URL', '2025-07-13 15:00:00'),
(94, 'DNS', '2025-07-13 19:00:00'),
(95, 'SSH', '2025-07-13 21:10:00'),
(96, 'FTP', '2025-07-14 14:30:00'),
(97, 'PDF', '2025-07-14 16:15:00'),
(98, 'ZIP', '2025-07-14 18:50:00'),
(99, 'AI', '2025-07-15 15:00:00'),
(100, 'ML', '2025-07-15 17:40:00'),
(101, 'NLP', '2025-07-15 20:00:00'),
(102, 'IoT', '2025-07-16 14:10:00'),
(103, 'VR', '2025-07-16 16:30:00'),
(104, 'AR', '2025-07-16 19:10:00'),
(105, 'SDK', '2025-07-17 13:55:00'),
(106, 'IDE', '2025-07-17 15:20:00'),
(107, 'GUI', '2025-07-17 17:00:00'),
(108, 'UX', '2025-07-17 20:30:00'),
(109, 'UI', '2025-07-18 14:15:00'),
(110, 'BIOS', '2025-07-18 16:00:00'),
(111, 'OS', '2025-07-18 18:45:00'),
(112, 'C', '2025-07-18 16:58:45');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `acronimos_consultados`
--
ALTER TABLE `acronimos_consultados`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `acronimos_consultados`
--
ALTER TABLE `acronimos_consultados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=113;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
