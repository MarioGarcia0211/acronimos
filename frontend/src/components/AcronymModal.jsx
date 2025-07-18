import React, { useEffect } from "react";

export default function AcronymModal({ item, onClose }) {
  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  // Cerrar modal al hacer clic fuera del contenido
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("modal")) {
      onClose();
    }
  };

  return (
    <>
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        onClick={handleBackdropClick}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content shadow">
            <div className="modal-header">
              <h5 className="modal-title">{item.term}</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <p>
                <strong>Definición:</strong> {item.definition}
              </p>
              <p>
                <strong>Categoría:</strong>{" "}
                {item.categoryname || "Sin clasificar"}
              </p>
              <p>
                <strong>Padre:</strong>{" "}
                {typeof item.parentcategoryname === "object" &&
                Object.keys(item.parentcategoryname).length === 0
                  ? "Desconocido"
                  : item.parentcategoryname || "Desconocido"}
              </p>
              <p>
                <strong>Score:</strong> {item.score}
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div className="modal-backdrop fade show"></div>
    </>
  );
}
