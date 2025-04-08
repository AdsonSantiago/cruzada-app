import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importe o React Router
import './index.scss';
import Home1 from './pages/Home1';
// import PortFolio from './pages/Portfolio';
import Cadastro from './pages/Cadastro';
import Home2 from './pages/Home2/Home2';
import Mobilidade from './pages/Mobilidade'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Envolva as rotas com BrowserRouter */}
    <Routes>
      <Route path="/" element={<Home1 />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/portFolio" element={<Home2 />} />  {/* Padronize para lowercase */}
      <Route path="/mobilidade" element={<Mobilidade />} />
      {/* Adicione as rotas que estão no Navbar */}
      {/* <Route path="/projeto" element={<Projeto />} />
      <Route path="/about" element={<About />} />
      <Route path="/contato" element={<Contato />} /> */}
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();