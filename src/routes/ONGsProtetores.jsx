import React, { useState } from 'react';
import Header from '../components/Header/Header';
import CardONG from '../components/Card/CardONG';

const ONGsProtetores = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const breadcrumbItems = [
    { label: "Início", href: "/" },
    { label: "ONGs/Protetores" }
  ]; 
  
  const allOngs = [
    {id: 1, nome: "ACASA - ASSOCIACAO COM AMOR SEM ABANDONO", endereco: "SAO BERNARDO DO CAMPO, SP", estado: "SP", cidade: "São Bernardo do Campo", image: "/src/assets/cardImage.png", link: "https://www.instagram.com/?hl=pt-br", chavePix:"21380129T"},
    {id: 2, nome: "UNIÃO DE PROTEÇÃO ANIMAL DA BAHIA - UPABA", endereco: "SALVADOR, BA", estado: "BA", cidade: "Salvador", image: "/src/assets/catCardImage.jpg", link: "https://www.instagram.com/?hl=pt-br", chavePix:"21380129"},
    {id: 3, nome: "ACASA - ASSOCIACAO COM AMOR SEM ABANDONO", endereco: "SAO PAULO, SP", estado: "SP", cidade: "São Paulo", image: "/src/assets/cardImage.png", link: "https://www.instagram.com/?hl=pt-br", chavePix:"21380129"},
    {id: 4, nome: "Ferreira", endereco: "Cunha, AC", estado: "AC", cidade: "Cunha", image: "/src/assets/catCardImage.jpg", chavePix:"21380129"},
    {id: 5, nome: "Peixoto Souza S.A.",endereco: "Moreira, SC", estado: "SC", cidade: "Moreira", image: "/src/assets/cardImage.png", chavePix:"21380129"}
];

const handleLoadMore = () => {
  setVisibleCount(prevCount => prevCount + 6);
}
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
                <button onClick={handleLoadMore} className='text-secondaryOrange text-medium btn-primary bg-transparent border-2 border-secondaryOrange'>Carregar mais</button>
            </div>
        )}
      </div>
    </div>
  )
}

export default ONGsProtetores