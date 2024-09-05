import React, { useState } from 'react';
import Header from '../components/Header/Header';
import CardONG from '../components/Card/CardONG';
import { ONGResponse } from '../models/ONGModels';
import { BreadcrumbModel } from '../models/ComponentsModels';

const ONGsProtetores: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const breadcrumbItems: BreadcrumbModel[] = [
    { label: "Início", href: "/" },
    { label: "ONGs/Protetores" }
  ]; 
  
  const allOngs: ONGResponse[] = [
    {
      id: "1",
      nome: "ACASA - ASSOCIACAO COM AMOR SEM ABANDONO",
      image: "/src/assets/cardImage.png",
      instagram: "https://www.instagram.com/?hl=pt-br",
      documento: "21380129T",
      endereco: "SAO BERNARDO DO CAMPO, SP",
      contato: {
        telefone: "123456789",
        email: "contato@acasa.org"
      },
      chavePix: "21380129T",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: "2",
      nome: "UNIÃO DE PROTEÇÃO ANIMAL DA BAHIA - UPABA",
      image: "/src/assets/catCardImage.jpg",
      instagram: "https://www.instagram.com/?hl=pt-br",
      documento: "21380129",
      endereco: "SALVADOR, BA",
      contato: {
        telefone: "987654321",
        email: "contato@upaba.org"
      },
      chavePix: "21380129",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
  ];

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };

  return (
    <div className='bg-neutralWhite1'>
      <div><Header breadcrumbItems={breadcrumbItems} /></div>
      <div className='md:px14 px-4 py-16 max-w-screen-xl mx-auto' id='ongs-protetores'>
        <h1 className='mb-3 text-center text-[32px] font-Nunito font-extrabold text-primaryPurple'>ONGs/Protetores</h1>

        <div className='mt-16 justify-items-center grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-2 overflow-x-hidden'>
          {
            allOngs.length === 0 ? (
              <p className="text-center text-neutralGrey2 font-bold">Nenhuma ONG encontrada</p>
            ) : (
              allOngs.slice(0, visibleCount).map(ong => 
                <CardONG key={ong.id} ong={ong} />
              )
            )}                
        </div>
        {visibleCount < allOngs.length && (
          <div className='flex justify-center mt-8'>
            <button 
              onClick={handleLoadMore} 
              className='text-secondaryOrange text-medium btn-primary bg-transparent border-2 border-secondaryOrange'
            >
              Carregar mais
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ONGsProtetores;
