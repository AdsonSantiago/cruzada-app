import React from 'react';
import './styleModal.scss'; // Estilos do modal

function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null; // Não renderiza o modal se não estiver aberto

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Contact Us</h2>
        <p>Email: contato@exemplo.com</p>
        <p>Phone: (11) 1234-5678</p>
        <p>Address: Rua Exemplo, 123 - São Paulo, SP</p>
        
        <button onClick={onClose}>
        <div className='btn-face-white'>
        Close
        </div>
        <div className='btn-face-purple'>
        Close
        </div>
        </button>
      </div> 
    </div>
  );
}

export default ContactModal;