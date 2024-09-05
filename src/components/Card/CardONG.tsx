import React, { useState, useEffect } from 'react';
import { Modal } from 'flowbite-react';
import { IoCopy, IoLogoInstagram, IoShareSocial } from "react-icons/io5";
import { ONGResponse } from '../../models/ONGModels';
import './Card.css';

const CardONG: React.FC<{ ong: ONGResponse }> = ({ ong }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalOng, setModalOng] = useState<ONGResponse | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const ongId = urlParams.get('ongId');

    if (ongId && ongId === ong.id.toString()) {
      setOpenModal(true);
      setModalOng(ong);
    }
  }, [ong]);

  const handleModalOpen = (ong: ONGResponse) => {
    setOpenModal(true);
    setModalOng(ong);
    window.history.pushState(null, "", `?ongId=${ong.id}`);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    clearOngIdFromUrl();
  };

  const clearOngIdFromUrl = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete('ongId');
    window.history.replaceState(null, "", url.toString());
  };

  const handleShare = () => {
    if (modalOng) {
      const shareUrl = `${window.location.origin}${window.location.pathname}?ongId=${modalOng.id}`;
      navigator.clipboard.writeText(shareUrl).then(() => {
        alert('Link copiado para a área de transferência');
      });
    }
  };

  const handleCopyPix = (text: string) => {
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
      <div 
        id="card-ong" 
        className="relative bg-white rounded-lg mb-5 w-[270px] h-[320px] overflow-hidden shadow-md cursor-pointer" 
        onClick={() => handleModalOpen(ong)}
      >
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

      <Modal
        dismissible
        show={openModal}
        position="center"
        size="sm"
        onClose={handleModalClose}
        className='custom-modal'
      >
        <Modal.Header className='custom-modal-header' />
        <Modal.Body>
          <h2 className="text-primaryPurple font-bold text-md text-center">{ong.nome}</h2>
          <div className='flex flex-col justify-center align-middle items-start mb-4'>
            <p className="text-[12px] text-neutralGrey1 font-bold mt-5">E-mail: {ong.contato.email}</p>
            <p className="text-[12px] text-neutralGrey1 font-bold mt-5">Telefone: {ong.contato.telefone}</p>
            <p className="text-[12px] text-neutralGrey1 font-bold mt-5">Endereço: {ong.endereco}</p>
            <div className='flex items-center mt-5'>
              <p className="text-[12px] text-neutralGrey1 font-bold">Chave Pix</p>
              <button onClick={() => handleCopyPix(ong.chavePix ?? '')} className='ml-2' title="Copiar">
                <IoCopy className="text-primaryPurple text-xl" />
              </button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='custom-modal-footer-ong'>
          <div className='flex justify-start items-center'>
            <button onClick={handleShare} title="Compartilhar">
              <IoShareSocial className="text-primaryPurple text-2xl sm:text-3xl mr-2" />
            </button>
            <a href={ong.instagram} title="Instagram"><IoLogoInstagram className="text-primaryPurple text-2xl sm:text-3xl mr-2 cursor-pointer" /></a>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CardONG;
