import React, { useEffect } from "react";
import { FaTag, FaLayerGroup, FaStar, FaBookOpen } from "react-icons/fa";

export default function AcronymModal({ item, onClose }) {
  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("modal")) {
      onClose();
    }
  };

  const renderParentCategory = () => {
    if (
      typeof item.parentcategoryname === "object" &&
      Object.keys(item.parentcategoryname).length === 0
    ) {
      return "Desconocido";
    }
    return item.parentcategoryname || "Desconocido";
  };

  return (
    <>
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        onClick={handleBackdropClick}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content rounded-4 shadow-lg">
            <div className="modal-header bg-primary text-white rounded-top-4">
              <h5 className="modal-title d-flex align-items-center">
                {item.term}
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>

            <div className="modal-body">
              <h6 className="text-muted mb-3">
                <FaBookOpen className="me-2 text-secondary" />
                Definición
              </h6>
              <p className="fs-5">{item.definition}</p>

              <hr />

              <div className="row">
                <div className="col-md-6 mb-3">
                  <h6 className="text-muted">
                    <FaTag className="me-2 text-info" />
                    Categoría
                  </h6>
                  <span className="badge bg-info text-dark fs-6 px-3 py-2">
                    {item.categoryname || "Sin clasificar"}
                  </span>
                </div>

                <div className="col-md-6 mb-3">
                  <h6 className="text-muted">
                    <FaLayerGroup className="me-2 text-secondary" />
                    Categoría Padre
                  </h6>
                  <span className="badge bg-light text-dark fs-6 px-3 py-2">
                    {renderParentCategory()}
                  </span>
                </div>

                <div className="col-md-6 mb-3">
                  <h6 className="text-muted">
                    <FaStar className="me-2 text-warning" />
                    Score
                  </h6>
                  <span className="badge bg-warning text-dark fs-6 px-3 py-2">
                    {item.score}
                  </span>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary"
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
