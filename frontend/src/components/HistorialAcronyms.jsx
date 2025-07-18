import { FaClock } from "react-icons/fa";

export default function HistorialAcronyms({ onCerrar, historial }) {
  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
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
            style={{ maxHeight: "400px", overflowY: "auto" }}
          >
            {historial.length === 0 ? (
              <div className="text-center text-muted">
                <p className="mt-3">
                  <FaClock className="me-2" />
                  No hay historial aún.
                </p>
              </div>
            ) : (
              <ul className="list-group">
                {historial.map((item, idx) => (
                  <li
                    key={idx}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <span className="fw-semibold">{item.acronimo}</span>
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
