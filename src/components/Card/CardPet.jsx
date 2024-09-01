import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { IoMale, IoFemale, IoShareSocial } from "react-icons/io5";
import { Modal } from 'flowbite-react';
import './Card.css'

const CardPet = ({ pet }) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalPet, setModalPet] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const petId = urlParams.get('petId');

    if (petId && petId === pet.id.toString()) {
      setOpenModal(true);
      setModalPet(pet);
    }
  }, [pet]);

  const handleModalOpen = (pet) => {
    setOpenModal(true);
    setModalPet(pet);
    window.history.pushState(null, "", `?petId=${pet.id}`);
  };
  const handleShare = () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}?petId=${modalPet.id}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert('Link copiado para a área de transferência');
    });
  };
  return (
    <div>
      <div className="bg-white rounded-2xl mb-5 sm:w-[290px] md:w-[250px] lg:w-[290px] h-[440px] max-w-[290PX] overflow-hidden shadow-md">
          <img src={pet.image} alt="" className="w-full h-[220px]" />
          <div className="px-4 pt-6 pb-4 flex flex-col items-start text-xl">
              <p className="text-secondaryOrange mb-1 text-[10px] flex items-center lg:text-nowrap text-wrap">
                  {pet.ong}
              </p>
              <h3 className="font-extrabold text-neutralBlack1 text-[18px] mb-1 flex items-center">
                  {pet.nome} 
                  {pet.sexo === 0 ? (
                      <IoMale className="ml-2 text-xl text-primaryBlue" />
                  ) : (
                      <IoFemale className="ml-2 text-xl text-primaryPink" />
                  )}
              </h3>
              <p className="text-neutralBlack1 mb-5 text-[12px] text-nowrap">{pet.endereco}</p>
              <button 
                onClick={() => handleModalOpen(pet)} 
                className='inline-block bg-secondaryOrange text-white py-2 px-4 rounded-md hover:bg-secondaryPurple w-full text-center mb-0'>
                Saiba mais
              </button>
          </div>
      </div>
    <Modal
      dismissible
      show={openModal}
      position="center"
      size="3xl"
      onClose={() => setOpenModal(false)}
      className='custom-modal'
    >
      <Modal.Header className='custom-modal-header'/>
        <Modal.Body>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="relative col-span-12 md:col-span-7">
                <img src={pet.image} alt={pet.nome} className="w-full max-w-[395px] h-[295px] rounded-xl" />
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-2 py-1 rounded">
                <h2 className="text-primaryPurple font-bold text-lg">{pet.nome}</h2>
                </div>
            </div>
            <div className="col-span-12 md:col-span-5 grid grid-cols-1 gap-2">
            {/* <div className="col-span-12 md:col-span-6 flex flex-col"> */}
                <p className='text-[14px]'><span className='text-[12px] text-neutralGrey1 font-bold mr-1'>Espécie:</span> {pet.especie}</p>
                <p className='text-[14px]'><span className='text-[12px] text-neutralGrey1 font-bold mr-1'>Porte:</span> {pet.porte}</p>
                <p className='text-[14px]'><span className='text-[12px] text-neutralGrey1 font-bold mr-1'>Raça:</span> SRD</p>
                <p className='text-[14px] flex'>
                  <span className='text-[12px] text-neutralGrey1 font-bold mr-1'>Sexo:</span> 
                  {pet.sexo === 0 ? (
                    <>
                      Macho<IoMale className="ml-1 text-xl text-primaryBlue" />
                    </>
                  ) : (
                    <>
                      Fêmea<IoFemale className="ml-1 text-xl text-primaryPink" />
                    </>
                  )}
                </p>
                <p className='text-[14px]'>
                  <span className='text-[12px] text-neutralGrey1 font-bold mr-1'>Castrado:</span>
                  {pet.castrado === 0 ? (
                      "Sim"
                  ) : (
                      "Não"
                  )}
                </p>
                <p className='text-[14px]'><span className='text-[12px] text-neutralGrey1 font-bold mr-1'>Idade aproximada:</span> {pet.idade}</p>
                <p className='text-[14px]'><span className='text-[12px] text-neutralGrey1 font-bold mr-1'>ONG:</span> {pet.ong}</p>
                <p className='text-[14px]'><span className='text-[12px] text-neutralGrey1 font-bold mr-1'>Endereço:</span> {pet.endereco}</p>
                <br />
            </div>


            <div className="col-span-12 flex flex-col">
              <p className='text-sm'><span className='font-bold text-secondaryOrange text-base'>Mais detalhes sobre {pet.nome}: </span> {pet.descricao.length > 320 ? pet.descricao.slice(0, 320) + '...' : pet.descricao}</p>
              <p className='text-sm mt-5'><span className='font-bold text-secondaryOrange text-base'>Observações: </span>{pet.observacao}</p>
            </div>
            </div>
        </Modal.Body>
        <Modal.Footer className='custom-modal-footer'>
            <div className='flex justify-end items-center'>
              <button onClick={handleShare}>
                <IoShareSocial className="text-primaryPurple text-2xl sm:text-3xl mr-2"/>
              </button>
                <button 
                className="btn-primary bg-transparent border-2 border-secondaryOrange text-secondaryOrange w-28 sm:w-28 mr-2" 
                onClick={() => setOpenModal(false)}
                >
                Voltar
                </button>
                <button 
                className="btn-primary bg-secondaryOrange text-white w-32 sm:w-36" 
                onClick={() => {
                    // Lógica para "Quero Adotar"
                }}
                >
                Quero Adotar
                </button>
            </div>
        </Modal.Footer>
    </Modal>
    </div>
    
  )
}

CardPet.propTypes = {
  pet: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    sexo: PropTypes.oneOf([0, 1]).isRequired,
    ong: PropTypes.string.isRequired,
    endereco: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,

    especie: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    observacao: PropTypes.string,
    porte: PropTypes.string.isRequired,
    idade: PropTypes.string.isRequired,
    castrado: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
    cidade: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardPet;
