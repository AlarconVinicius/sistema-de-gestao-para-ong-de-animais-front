import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import CardPet from '../components/Card/CardPet';

const QueroAdotar = () => {
    const [visibleCount, setVisibleCount] = useState(6);

    const breadcrumbItems = [
        { label: "Início", href: "/" },
        { label: "Quero adotar" }
    ];
    const allPets = [
        {id: 1, nome: "Acerola", sexo: 0, ong: "ACASA - ASSOCIACAO COM AMOR SEM ABANDONO", endereco: "SAO BERNARDO DO CAMPO, SP", image: "/src/assets/cardImage.png"},
        {id: 2, nome: "Amelia", sexo: 1, ong: "UNIÃO DE PROTEÇÃO ANIMAL DA BAHIA - UPABA", endereco: "SALVADOR, BA", image: "/src/assets/cardImage.png"},
        {id: 3, nome: "ANAÍTA", sexo: 1, ong: "ACASA - ASSOCIACAO COM AMOR SEM ABANDONO", endereco: "SAO PAULO, SP", image: "/src/assets/cardImage.png"},
        {id: 4, nome: "Helena", sexo: 1, ong: "Ferreira", endereco: "Cunha, AC", image: "/src/assets/cardImage.png"},
        {id: 5, nome: "João Guilherme", sexo: 0, ong: "Peixoto Souza S.A.", endereco: "Moreira, SC", image: "/src/assets/cardImage.png"},
        {id: 6, nome: "Mirella", sexo: 0, ong: "da Paz", endereco: "Oliveira da Prata, SC", image: "/src/assets/cardImage.png"},
        {id: 7, nome: "Bianca", sexo: 0, ong: "da Rocha", endereco: "Carvalho do Oeste, PE", image: "/src/assets/cardImage.png"},
        {id: 8, nome: "Otávio", sexo: 0, ong: "Monteiro", endereco: "Dias do Campo, SE", image: "/src/assets/cardImage.png"},
        {id: 9, nome: "Beatriz", sexo: 1, ong: "Cardoso", endereco: "Novaes, RJ", image: "/src/assets/cardImage.png"},
        {id: 10, nome: "Bruno", sexo: 0, ong: "Carvalho - EI", endereco: "Lopes, CE", image: "/src/assets/cardImage.png"},
        {id: 11, nome: "Antônio", sexo: 1, ong: "da Mata Aragão S.A.", endereco: "Rodrigues, RO", image: "/src/assets/cardImage.png"},
        {id: 12, nome: "Eloah", sexo: 1, ong: "Farias - EI", endereco: "Cunha, MT", image: "/src/assets/cardImage.png"},
        {id: 13, nome: "Benício", sexo: 1, ong: "Peixoto S/A", endereco: "Martins das Pedras, AM", image: "/src/assets/cardImage.png"},
        {id: 14, nome: "Lorenzo", sexo: 0, ong: "da Rosa", endereco: "Almeida, PB", image: "/src/assets/cardImage.png"},
        {id: 15, nome: "Alícia", sexo: 0, ong: "da Mata", endereco: "Sales, AL", image: "/src/assets/cardImage.png"}
    ];
    

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 6);
    }

    return (
        <div className='bg-neutralWhite1'>
            <div><Header breadcrumbItems={breadcrumbItems} /></div>
            <div className='md:px14 px-4 py-16 max-w-screen-xl mx-auto' id='quero-adotar'>
                <h1 className='mb-3 text-center text-[32px] font-Nunito font-extrabold text-primaryPurple'>Campanha de Adoção</h1>
                <p  className='mb-16 text-center text-[20px] font-Nunito text-primaryPurple'><span className='font-bold'>
                    Uma seleção especial de peludinhos que buscam um lar para chamar de seu.</span><br />
                    Não encontrou seu pet aqui ainda? Não se preocupe! Entre em contato com uma das <Link to="/ongs-protetores" className='font-bold'>ONGs parceiras</Link> para obter mais informações sobre outros pets disponíveis para adoção.<br />
                    Vamos juntos transformar a vida desses peludinhos com amor e carinho. Adote e faça a diferença!
                </p>
                
                <div className='justify-items-center grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5 overflow-x-hidden'>
                    {
                        allPets.slice(0, visibleCount).map(pet => 
                            <CardPet key={pet.id} pet={pet} />
                        )
                    }                
                </div>
                {visibleCount < allPets.length && (
                    <div className='flex justify-center mt-8'>
                        <button onClick={handleLoadMore} className='text-secondaryOrange text-medium btn-primary bg-transparent border-2 border-secondaryOrange'>Carregar mais</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default QueroAdotar;
