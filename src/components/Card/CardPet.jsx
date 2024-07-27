import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoMale, IoFemale } from "react-icons/io5";

const CardPet = ({ pet }) => {
  return (
    <div className="rounded-2xl mb-5 sm:w-[290px] md:w-[250px] lg:w-[290px] max-w-md overflow-hidden shadow-md">
        <img src={pet.image} alt="" className="w-full h-auto" />
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
            <p className="text-neutralBlack1 mb-5 text-[14px]">{pet.endereco}</p>
            <Link to={`/${pet.id}`} className='inline-block bg-secondaryOrange text-white py-2 px-4 rounded-md hover:bg-secondaryPurple w-full text-center mb-0'>Saiba mais</Link>
        </div>
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
  }).isRequired,
};

export default CardPet;
