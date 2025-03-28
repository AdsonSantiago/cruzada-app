import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importe o React Router
import './index.scss';
import Home1 from './pages/Home1';
import Cadastro from './pages/Cadastro';
import Portifolio from './pages/Portifolio';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Envolva as rotas com BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home1 />} /> {/* Rota da página inicial */}
        <Route path="/cadastro" element={<Cadastro />} /> {/* Rota da página de cadastro */}
        <Route path="/portifolio" element={<Portifolio />} /> {/* Rota da página inicial */}

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();