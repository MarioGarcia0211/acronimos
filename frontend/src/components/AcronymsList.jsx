import React, { useState } from "react";
import AcronymModal from "./AcronymModal";
import { FaTag, FaLayerGroup } from "react-icons/fa";

export default function AcronymsList({ resultado }) {
  const [acronymSeleccionado, setAcronymSeleccionado] = useState(null);

  const resultados = Array.isArray(resultado?.result)
    ? resultado.result
    : resultado?.result
    ? [resultado.result]
    : [];

  if (resultados.length === 0) {
    return (
      <div className="text-center text-muted py-4">
        <p>No hay resultados disponibles.</p>
      </div>
    );
  }

  const handleSeleccion = (item) => {
    setAcronymSeleccionado(item);
  };

  const renderParentCategory = (parent) => {
    if (
      !parent ||
      (typeof parent === "object" && Object.keys(parent).length === 0)
    ) {
      return "Desconocido";
    }
    return parent;
  };

  return (
    <div className="container py-4">
      <h4 className="text-center fw-bold mb-4 text-dark">Resultados</h4>
      <div className="row">
        {resultados.map((item) => (
          <div className="col-md-6 col-lg-4 mb-4" key={item.id}>
            <div
              className="card h-100 shadow-sm border-0 rounded-4 acronym-card"
              role="button"
              onClick={() => handleSeleccion(item)}
              style={{
                cursor: "pointer",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.05)";
              }}
            >
              <div className="card-body">
                <h5 className="card-title text-primary">{item.term}</h5>
                <p className="card-text text-secondary small">
                  {item.definition.length > 120
                    ? item.definition.substring(0, 120) + "..."
                    : item.definition}
                </p>
                <div className="mb-2 text-muted small">
                  <FaTag className="me-2" />
                  <strong>Categoría:</strong>{" "}
                  {item.categoryname || "Sin clasificar"}
                </div>
                <div className="text-muted small">
                  <FaLayerGroup className="me-2" />
                  <strong>Padre:</strong>{" "}
                  {renderParentCategory(item.parentcategoryname)}
                </div>
              </div>
              <div className="card-footer bg-white border-0 text-end">
                <span className="badge bg-light text-dark">
                  Score: {item.score}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de detalles */}
      {acronymSeleccionado && (
        <AcronymModal
          item={acronymSeleccionado}
          onClose={() => setAcronymSeleccionado(null)}
        />
      )}
    </div>
  );
}
