import { useState } from 'react';
import AcronymsForm from './components/acronymsForm';
import AcronymsList from './components/acronymsList';

function App() {
  const [resultado, setResultado] = useState(null);

  return (
    <div className="container mt-5">
      <h2 className="text-center">Buscador de Acrónimos</h2>
      <AcronymsForm setResultado={setResultado} />
      {resultado && <AcronymsList resultado={resultado} />}
    </div>
  );
}

export default App;
