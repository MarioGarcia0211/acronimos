import { Router } from "express";
import {
  obtenerSignificados,
  historialAcronimos,
  historialAcronimosPorFecha,
} from "../controllers/acronyms.controller.js";

const router = Router();

router.get("/buscar/:acronimo", obtenerSignificados);
router.get("/historial", historialAcronimos);
router.get("/historial/fecha", historialAcronimosPorFecha);

export default router;
