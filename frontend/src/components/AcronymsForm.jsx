import { useState } from "react";
import { getAcronym, historialAcronyms } from "../services/acronymService";
import HistorialAcronyms from "./HistorialAcronyms";
import { FaSearch, FaHistory } from "react-icons/fa";
import { toast } from "react-toastify";

export default function AcronymsForm({ setResultado }) {
  const [sigla, setSigla] = useState("");
  const [mostrarHistorial, setMostrarHistorial] = useState(false);
  const [historial, setHistorial] = useState([]);

  const buscar = async (e) => {
    e.preventDefault();
    if (sigla.trim() === "") {
      toast.warn("Por favor, ingrese un acrónimo o sigla", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
    try {
      const res = await getAcronym(sigla);
      setResultado(res.data);
    } catch (error) {
      toast.error("Acrónimo no encontrado", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const abrirHistorial = async () => {
    try {
      const res = await historialAcronyms();
      setHistorial(res.data);
      setMostrarHistorial(true);
    } catch (error) {
      alert("Error al obtener el historial");
    }
  };

  return (
    <div className="card shadow-lg border-0 rounded-4 p-4 mx-auto">
      <form onSubmit={buscar}>
        <label className="form-label fw-semibold text-primary">
          Buscar Acrónimo
        </label>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control form-control-lg rounded-start"
            placeholder="Ej: NASA"
            value={sigla}
            onChange={(e) => setSigla(e.target.value)}
          />
          <button className="btn btn-primary btn-lg" type="submit">
            <FaSearch className="me-2" />
            Buscar
          </button>
        </div>

        <div className="d-flex justify-content-end">
          <button
            type="button"
            onClick={abrirHistorial}
            className="btn btn-outline-secondary btn-sm"
          >
            <FaHistory className="me-1" />
            Ver Historial
          </button>
        </div>
      </form>

      {mostrarHistorial && (
        <>
          <div className="modal-backdrop show"></div>
          <HistorialAcronyms
            historial={historial}
            onCerrar={() => setMostrarHistorial(false)}
          />
        </>
      )}
    </div>
  );
}
