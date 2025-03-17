import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define a URL do back-end
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Faz uma requisição GET para o back-end
    axios.get(`${API_URL}/api`)
      .then((response) => setData(response.data))
      .catch((error) => console.error('Erro:', error));
  }, []);

  return (
    <div>
      <h1>Meu Web-Apc</h1>
      {data ? <p>{data.message}</p> : <p>Carregando...</p>}
    </div>
  );
}

export default App;