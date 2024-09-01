import React, { useState, useEffect } from 'react';
import { Modal } from 'flowbite-react';
import { IoCopy, IoLogoInstagram, IoShareSocial } from "react-icons/io5";
import PropTypes from 'prop-types';
import './Card.css'

const CardONG = ({ ong }) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalOng, setModalOng] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const ongId = urlParams.get('ongId');

    if (ongId && ongId === ong.id.toString()) {
      setOpenModal(true);
      setModalOng(ong);
    }
  }, [ong]);

  const handleModalOpen = (ong) => {
    setOpenModal(true);
    setModalOng(ong);
    window.history.pushState(null, "", `?ongId=${ong.id}`);
  };
  const handleModalClose = () => {
    setOpenModal(false);
    clearOngIdFromUrl();
  };
  const clearOngIdFromUrl = () => {
    const url = new URL(window.location);
    url.searchParams.delete('ongId');
    window.history.replaceState(null, "", url.toString());
  };
  const handleShare = () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}?ongId=${modalOng.id}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert('Link copiado para a área de transferência');
    });
  };
  const handleCopyPix = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        alert('Chave Pix copiada com sucesso!');
      },
      (err) => {
        console.error('Erro ao copiar chave Pix: ', err);
      }
    );
  };
  return (
    <div>
      <div id="card-ong" className="relative bg-white rounded-lg mb-5 w-[270px] h-[320px] overflow-hidden shadow-md cursor-pointer" onClick={() => handleModalOpen(ong)}>
      <img 
        src={ong.image} 
        alt="Imagem da ONG" 
        className="w-full h-[200px] img-card transition-opacity duration-300 ease-in-out hover:opacity-70"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <span className="text-white text-lg font-semibold">Ver Mais</span>
      </div>
      <div className="px-4 py-4 flex flex-col items-start">
        <p className="text-neutralBlack1 mb-4 text-[14px] flex items-center">
          {ong.nome}
        </p>
        <p className="text-neutralBlack1 text-[10px]">{ong.endereco}</p>
      </div>
    </div>

      {/* <div id="card-ong" className="bg-white rounded-lg mb-5 w-[270px] h-[320px] overflow-hidden shadow-md">
          <img src={ong.image} alt="" className="w-full h-[200px] cursor-pointer img-card" onClick={() => handleModalOpen(ong)} />
          <div className="px-4 py-4 flex flex-col items-start">
            <a href={ong.link} target="_blank">
              <p className="text-neutralBlack1 mb-4 text-[14px] flex items-center">
                  {ong.nome}
              </p>
            </a>
              <p className="text-neutralBlack1 text-[10px]">{ong.endereco}</p>
          </div>
      </div> */}
      <Modal
        dismissible
        show={openModal}
        position="center"
        size="sm"
        onClose={handleModalClose}
        className='custom-modal'
      >
        <Modal.Header className='custom-modal-header'/>
        <Modal.Body>
                <h2 className="text-primaryPurple font-bold text-md text-center">{ong.nome}</h2>
                <div className='flex flex-col justify-center align-middle items-start mb-4'>
                  <p className="text-[12px] text-neutralGrey1 font-bold mt-5">{ong.endereco}</p>
                  <div className='flex items-center mt-5'>
                    <p className="text-[12px] text-neutralGrey1 font-bold" value={ong.chavePix}>Chave Pix</p>
                    <button onClick={() => handleCopyPix(ong.chavePix)} className='ml-2'>
                      <IoCopy className="text-primaryPurple text-xl" />
                    </button>
                  </div>
                </div>
      </Modal.Body>
        <Modal.Footer className='custom-modal-footer-ong'>
          <div className='flex justify-start items-center'>
            <button onClick={handleShare} alt="Compartilhar">
              <IoShareSocial className="text-primaryPurple text-2xl sm:text-3xl mr-2"/>
            </button>
            <a href={ong.link}><IoLogoInstagram className="text-primaryPurple text-2xl sm:text-3xl mr-2"/></a>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
    
  )
}

CardONG.propTypes = {
  ong: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    chavePix: PropTypes.string.isRequired,
    endereco: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardONG;
