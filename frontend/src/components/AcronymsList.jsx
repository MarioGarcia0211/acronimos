import React, { useState } from "react";
import AcronymModal from "./AcronymModal";

export default function AcronymsList({ resultado }) {
  const [acronymSeleccionado, setAcronymSeleccionado] = useState(null);

  if (!resultado || !resultado.result) {
    return <p className="text-muted">No hay resultados.</p>;
  }

  const resultados = Array.isArray(resultado.result)
    ? resultado.result
    : [resultado.result];

  if (resultados.length === 0) {
    return <p className="text-muted">No hay resultados.</p>;
  }

  return (
    <div className="container py-3">
      <h5 className="mb-3">Resultados:</h5>
      <div className="row">
        {resultados.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div
              className="card h-100 shadow-sm"
              style={{ cursor: "pointer" }}
              onClick={() => setAcronymSeleccionado(item)}
            >
              <div className="card-body">
                <h5 className="card-title">{item.term}</h5>
                <p className="card-text text-truncate">{item.definition}</p>
                <p className="text-muted mb-1">
                  <strong>Categoría:</strong>{" "}
                  {item.categoryname || "Sin clasificar"}
                </p>
                <p className="text-muted">
                  <strong>Padre:</strong>{" "}
                  {typeof item.parentcategoryname === "object" &&
                  Object.keys(item.parentcategoryname).length === 0
                    ? "Desconocido"
                    : item.parentcategoryname || "Desconocido"}
                </p>
              </div>
              <div className="card-footer text-end">
                <small className="text-muted">Score: {item.score}</small>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {acronymSeleccionado && (
        <AcronymModal
          item={acronymSeleccionado}
          onClose={() => setAcronymSeleccionado(null)}
        />
      )}
    </div>
  );
}
