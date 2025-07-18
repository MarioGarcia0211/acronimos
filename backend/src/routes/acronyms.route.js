import { Router } from "express";
import {
  obtenerSignificados,
  historialAcronimos,
} from "../controllers/acronyms.controller.js";

const router = Router();

router.get("/buscar/:acronimo", obtenerSignificados);
router.get("/historial", historialAcronimos);

export default router;
