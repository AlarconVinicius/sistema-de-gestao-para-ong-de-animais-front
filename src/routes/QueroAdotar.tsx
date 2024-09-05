import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header.tsx';
import FilterPet from '../components/Filter/FilterPet'; 
import CardPet from '../components/Card/CardPet';
import AnimaisServices from '../services/AnimaisService';
import { AnimalResponse } from '../models/AnimalModels';
import { BreadcrumbModel } from '../models/ComponentsModels.tsx';

const QueroAdotar: React.FC = () => {
    const [allPets, setAnimals] = useState<AnimalResponse[] | null>(null);
    const [visibleCount, setVisibleCount] = useState<number>(12);
    const [speciesFilter, setSpeciesFilter] = useState<string>('Todas as Espécies');
    const [sexFilter, setSexFilter] = useState<string>('Todos os Sexos');
    const [sizeFilter, setSizeFilter] = useState<string>('Todos os Portes');
    const [stateFilter, setStateFilter] = useState<string>('Todos os Estados');
    const [cityFilter, setCityFilter] = useState<string>('Todas as Cidades');
    const [nameFilter, setNameFilter] = useState<string>('');

    const breadcrumbItems: BreadcrumbModel[] = [
        { label: "Início", href: "/" },
        { label: "Quero adotar" }
    ];

    const fetchAnimals = async () => {
        try {
            const fetchedAnimals = await AnimaisServices.getAllPublic();
            setAnimals(fetchedAnimals.data || null);
        } catch (error) {
            console.error('Erro ao buscar a lista de animais:', error);
        }
    };

    useEffect(() => {
        fetchAnimals();
    }, []);

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 12);
    }

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
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

    const filteredPets = (allPets || []).filter(pet => {
        return (
            (speciesFilter === 'Todas as Espécies' || pet.especie === speciesFilter) &&
            (sexFilter === 'Todos os Sexos' || (sexFilter === 'Macho' ? pet.sexo === false : pet.sexo === true)) &&
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
                <p className='mb-16 text-center text-[20px] font-Nunito text-primaryPurple max-w-4xl mx-auto px-4'>
                    <span className='font-bold'>
                        Uma seleção especial de peludinhos que buscam um lar para chamar de seu.
                    </span><br />
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
                        )
                    }                
                </div>
                {visibleCount < filteredPets.length && (
                    <div className='flex justify-center mt-8'>
                        <button onClick={handleLoadMore} className='text-secondaryOrange text-medium btn-primary bg-transparent border-2 border-secondaryOrange'>
                            Carregar mais
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default QueroAdotar;
