import { useState } from "react";
import AcronymsForm from "./components/acronymsForm";
import AcronymsList from "./components/acronymsList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [resultado, setResultado] = useState(null);

  return (
    <div className="container mt-5">
      <h1
        className="text-center fw-bold mt-5 mb-4"
        style={{ color: "#4C1D95" }}
      >
        Buscador de Acrónimos
      </h1>
      <br />
      <AcronymsForm setResultado={setResultado} />
      {resultado && <AcronymsList resultado={resultado} />}
      <ToastContainer />
    </div>
  );
}

export default App;
