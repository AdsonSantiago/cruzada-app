import { ArrowIconLeft } from './arrow-left-icon';
import './styleArrowleft.scss';

export function ArrowLeft() {
  const handleGoBack = () => {
    window.history.back(); // Volta para a página anterior
  };

  return (
    <div>
      <button className='btn-voltar' onClick={handleGoBack}>
        <div className='btn-face-white'>
          Voltar
          <ArrowIconLeft />
        </div>
        <div className='btn-face-purple'>
          Voltar
          <ArrowIconLeft />
        </div>
      </button>
    </div>
  );
}