import { useState } from 'react';
import { getAcronym } from '../services/acronymService';

export default function AcronymsForm({ setResultado }) {
  const [sigla, setSigla] = useState('');

  const buscar = async (e) => {
    e.preventDefault();
    try {
      const res = await getAcronym(sigla);
      setResultado(res.data);
    } catch (error) {
      alert('No encontrada');
    }
  };

  return (
    <form className="p-3">
      <div className="mb-3">
        <label className="form-label">Acrónimo</label>
        <input
          type="text"
          className="form-control"
          value={sigla}
          onChange={(e) => setSigla(e.target.value)}
        />
      </div>
      <button onClick={buscar} className="btn btn-primary me-2">
        Buscar
      </button>
    </form>
  );
}
