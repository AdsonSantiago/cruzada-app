import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/logo';
import { ArrowIcon } from '../../components/arrowIcon';
import ContactModal from '../../components/ContactModal'; 
import {App} from './App.jsx';
import './style.scss';

function Home1() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar o modal

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main>
        <header className='header-container'>
            <div className='logo-container'>
            <Logo />
            <div className='logo-text'>
                <span className='logo-text-bold'>Formado</span>
                <span className='logo-text-regular'>ADS</span>
            </div>
            </div>
            <nav className='menu-options'>
            <Link to="/cadastro">What we offer</Link>
            <a href="#how-it-works" role="button" tabIndex="0">How it works</a>
            <a href="#portfolio" role="button" tabIndex="0">Portfolio</a>            </nav>
            <button onClick={openModal}> {/* Abre o modal ao clicar */}
            <div className='btn-face-white'>
                Contato
                <ArrowIcon />
            </div>
            <div className='btn-face-purple'>
                Contato
                <ArrowIcon />
            </div>
            </button>
        </header>
        <div className="div">
                <App />
        </div>  
      {/* Modal de contato */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}

export default Home1;