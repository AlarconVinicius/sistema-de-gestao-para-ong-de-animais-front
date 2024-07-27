import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import FilterPet from '../components/Filter/FilterPet'; 
import CardPet from '../components/Card/CardPet';

const QueroAdotar = () => {
    const [visibleCount, setVisibleCount] = useState(6);
    const [speciesFilter, setSpeciesFilter] = useState('Todas as Espécies');
    const [sexFilter, setSexFilter] = useState('Todos os Sexos');
    const [sizeFilter, setSizeFilter] = useState('Todos os Portes');
    const [stateFilter, setStateFilter] = useState('Todos os Estados');
    const [cityFilter, setCityFilter] = useState('Todas as Cidades');
    const [nameFilter, setNameFilter] = useState('');

    const breadcrumbItems = [
        { label: "Início", href: "/" },
        { label: "Quero adotar" }
    ];

    const allPets = [
        {id: 1, nome: "Acerola", sexo: 0, especie: "Cachorro", porte: "Pequeno", ong: "ACASA - ASSOCIACAO COM AMOR SEM ABANDONO", endereco: "SAO BERNARDO DO CAMPO, SP", estado: "SP", cidade: "São Bernardo do Campo", image: "/src/assets/cardImage.png"},
        {id: 2, nome: "Amelia", sexo: 1, especie: "Gato", porte: "Médio", ong: "UNIÃO DE PROTEÇÃO ANIMAL DA BAHIA - UPABA", endereco: "SALVADOR, BA", estado: "BA", cidade: "Salvador", image: "/src/assets/cardImage.png"},
        {id: 3, nome: "ANAÍTA", sexo: 1, especie: "Cachorro", porte: "Grande", ong: "ACASA - ASSOCIACAO COM AMOR SEM ABANDONO", endereco: "SAO PAULO, SP", estado: "SP", cidade: "São Paulo", image: "/src/assets/cardImage.png"},
        {id: 4, nome: "Helena", sexo: 1, especie: "Gato", porte: "Pequeno", ong: "Ferreira", endereco: "Cunha, AC", estado: "AC", cidade: "Cunha", image: "/src/assets/cardImage.png"},
        {id: 5, nome: "João Guilherme", sexo: 0, especie: "Cachorro", porte: "Grande", ong: "Peixoto Souza S.A.", endereco: "Moreira, SC", estado: "SC", cidade: "Moreira", image: "/src/assets/cardImage.png"},
        {id: 6, nome: "Mirella", sexo: 0, especie: "Gato", porte: "Médio", ong: "da Paz", endereco: "Oliveira da Prata, SC", estado: "SC", cidade: "Oliveira da Prata", image: "/src/assets/cardImage.png"},
        {id: 7, nome: "Bianca", sexo: 0, especie: "Cachorro", porte: "Pequeno", ong: "da Rocha", endereco: "Carvalho do Oeste, PE", estado: "PE", cidade: "Carvalho do Oeste", image: "/src/assets/cardImage.png"},
        {id: 8, nome: "Otávio", sexo: 0, especie: "Gato", porte: "Grande", ong: "Monteiro", endereco: "Dias do Campo, SE", estado: "SE", cidade: "Dias do Campo", image: "/src/assets/cardImage.png"},
        {id: 9, nome: "Beatriz", sexo: 1, especie: "Cachorro", porte: "Médio", ong: "Cardoso", endereco: "Novaes, RJ", estado: "RJ", cidade: "Novaes", image: "/src/assets/cardImage.png"},
        {id: 10, nome: "Bruno", sexo: 0, especie: "Gato", porte: "Pequeno", ong: "Carvalho - EI", endereco: "Lopes, CE", estado: "CE", cidade: "Lopes", image: "/src/assets/cardImage.png"},
        {id: 11, nome: "Antônio", sexo: 1, especie: "Cachorro", porte: "Grande", ong: "da Mata Aragão S.A.", endereco: "Rodrigues, RO", estado: "RO", cidade: "Rodrigues", image: "/src/assets/cardImage.png"},
        {id: 12, nome: "Eloah", sexo: 1, especie: "Gato", porte: "Médio", ong: "Farias - EI", endereco: "Cunha, MT", estado: "MT", cidade: "Cunha", image: "/src/assets/cardImage.png"},
        {id: 13, nome: "Benício", sexo: 1, especie: "Cachorro", porte: "Pequeno", ong: "Peixoto S/A", endereco: "Martins das Pedras, AM", estado: "AM", cidade: "Martins das Pedras", image: "/src/assets/cardImage.png"},
        {id: 14, nome: "Lorenzo", sexo: 0, especie: "Gato", porte: "Grande", ong: "da Rosa", endereco: "Almeida, PB", estado: "PB", cidade: "Almeida", image: "/src/assets/cardImage.png"},
        {id: 15, nome: "Alícia", sexo: 0, especie: "Cachorro", porte: "Médio", ong: "da Mata", endereco: "Sales, AL", estado: "AL", cidade: "Sales", image: "/src/assets/cardImage.png"}
    ];
    

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 6);
    }

    const handleFilterChange = (e) => {
        const { id, value } = e.target;
        switch (id) {
            case 'species':
                setSpeciesFilter(value);
                break;
            case 'sex':
                setSexFilter(value);
                break;
            case 'size':
                setSizeFilter(value);
                break;
            case 'state':
                setStateFilter(value);
                break;
            case 'city':
                setCityFilter(value);
                break;
            case 'name':
                setNameFilter(value);
                break;
            default:
                break;
        }
    };

    const filteredPets = allPets.filter(pet => {
        return (
            (speciesFilter === 'Todas as Espécies' || pet.especie === speciesFilter) &&
            (sexFilter === 'Todos os Sexos' || (sexFilter === 'Macho' ? pet.sexo === 0 : pet.sexo === 1)) &&
            (sizeFilter === 'Todos os Portes' || pet.porte === sizeFilter) &&
            (stateFilter === 'Todos os Estados' || pet.endereco.includes(stateFilter)) &&
            (cityFilter === 'Todas as Cidades' || pet.endereco.includes(cityFilter)) &&
            (nameFilter === '' || pet.nome.toLowerCase().includes(nameFilter.toLowerCase()))
        );
    });

    return (
        <div className='bg-neutralWhite1'>
            <div><Header breadcrumbItems={breadcrumbItems} /></div>
            <div className='md:px14 px-4 py-16 max-w-screen-xl mx-auto' id='quero-adotar'>
                <h1 className='mb-3 text-center text-[32px] font-Nunito font-extrabold text-primaryPurple'>Campanha de Adoção</h1>
                <p className='mb-16 text-center text-[20px] font-Nunito text-primaryPurple'><span className='font-bold'>
                    Uma seleção especial de peludinhos que buscam um lar para chamar de seu.</span><br />
                    Não encontrou seu pet aqui ainda? Não se preocupe! Entre em contato com uma das <Link to="/ongs-protetores" className='font-bold'>ONGs parceiras</Link> para obter mais informações sobre outros pets disponíveis para adoção.<br />
                    Vamos juntos transformar a vida desses peludinhos com amor e carinho. Adote e faça a diferença!
                </p>
                <FilterPet handleFilterChange={handleFilterChange} />
                <div className='mt-16 justify-items-center grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5 overflow-x-hidden'>
                    {
                        filteredPets.length === 0 ? (
                            <p className="text-center text-neutralGrey2 font-bold">Nenhum pet encontrado</p>
                        ) : (
                            filteredPets.slice(0, visibleCount).map(pet => 
                                <CardPet key={pet.id} pet={pet} />
                            )
                        )}                
                </div>
                {visibleCount < filteredPets.length && (
                    <div className='flex justify-center mt-8'>
                        <button onClick={handleLoadMore} className='text-secondaryOrange text-medium btn-primary bg-transparent border-2 border-secondaryOrange'>Carregar mais</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default QueroAdotar;
