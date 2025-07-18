import { useState } from "react";
import { FaClock, FaSearch } from "react-icons/fa";
import { historialAcronymsPorFecha } from "../services/acronymService";
import { toast } from "react-toastify";

export default function HistorialAcronyms({
  onCerrar,
  historial: historialInicial,
}) {
  const [historial, setHistorial] = useState(historialInicial);
  const [desde, setDesde] = useState("");
  const [hasta, setHasta] = useState("");

  const filtrarHistorial = async () => {
    if (!desde || !hasta) {
      toast.warn("Debes seleccionar ambas fechas", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    try {
      const res = await historialAcronymsPorFecha(desde, hasta);
      setHistorial(res.data);
    } catch (error) {
      toast.error("Error al filtrar el historial");
    }
  };

  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header bg-primary text-white rounded-top-4">
            <h5 className="modal-title">Historial de Búsquedas</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onCerrar}
            ></button>
          </div>

          <div
            className="modal-body"
            style={{ maxHeight: "70vh", overflowY: "auto" }}
          >
            {/* Filtros */}
            <div className="row g-3 align-items-end mb-4">
              <div className="col-12 col-sm-6 col-md-5">
                <label className="form-label">Desde</label>
                <input
                  type="date"
                  className="form-control"
                  value={desde}
                  onChange={(e) => setDesde(e.target.value)}
                />
              </div>
              <div className="col-12 col-sm-6 col-md-5">
                <label className="form-label">Hasta</label>
                <input
                  type="date"
                  className="form-control"
                  value={hasta}
                  onChange={(e) => setHasta(e.target.value)}
                />
              </div>
              <div className="col-12 col-md-2">
                <button
                  className="btn btn-outline-primary w-100"
                  onClick={filtrarHistorial}
                >
                  <FaSearch className="me-1" /> Filtrar
                </button>
              </div>
            </div>

            {/* Lista del historial */}
            {historial.length === 0 ? (
              <div className="text-center text-muted">
                <p className="mt-3">
                  <FaClock className="me-2" />
                  No hay historial en el rango seleccionado.
                </p>
              </div>
            ) : (
              <ul className="list-group shadow-sm">
                {historial.map((item, idx) => (
                  <li
                    key={idx}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <span className="fw-semibold text-primary">
                      {item.acronimo}
                    </span>
                    <span className="badge bg-light text-secondary">
                      {item.fecha_legible}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onCerrar}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
