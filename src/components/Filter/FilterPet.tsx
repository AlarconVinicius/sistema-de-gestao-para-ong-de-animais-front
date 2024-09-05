import React from 'react';
import { Select, TextInput } from 'flowbite-react';
import { BiSearch } from 'react-icons/bi';

interface FilterPetProps {
    handleFilterChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
}

const FilterPet: React.FC<FilterPetProps> = ({ handleFilterChange }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <Select id="species" className='items-center' required onChange={handleFilterChange}>
                    <option value="">Todas as Espécies</option>
                    <option value="Cachorro">Cachorro</option>
                    <option value="Gato">Gato</option>
                    <option value="Outros">Outros</option>
                </Select>
                <Select id="sex" className='items-center' required onChange={handleFilterChange}>
                    <option value="">Todos os Sexos</option>
                    <option value="Macho">Macho</option>
                    <option value="Fêmea">Fêmea</option>
                </Select>
                <Select id="size" className='items-center' required onChange={handleFilterChange}>
                    <option value="">Todos os Portes</option>
                    <option value="Pequeno">Pequeno</option>
                    <option value="Médio">Médio</option>
                    <option value="Grande">Grande</option>
                </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
                <Select id="state" className='md:col-span-3 items-center' required onChange={handleFilterChange}>
                    <option value="">Todos os Estados</option>
                    <option value="SP">SP</option>
                    <option value="RJ">RJ</option>
                    <option value="MG">MG</option>
                    <option value="BH">BH</option>
                </Select>
                <Select id="city" className='md:col-span-3 items-center' required onChange={handleFilterChange}>
                    <option value="">Todas as Cidades</option>
                    <option value="São Paulo">São Paulo</option>
                    <option value="Rio de Janeiro">Rio de Janeiro</option>
                    <option value="Belo Horizonte">Belo Horizonte</option>
                    <option value="Salvador">Salvador</option>
                </Select>
                <div className="md:col-span-6 flex items-center space-x-4 w-auto">
                    <TextInput className='w-full' id="name" placeholder="Nome do amigo" onChange={handleFilterChange} />
                    <button className="btn-primary w-72 flex items-center justify-center">
                        <BiSearch className="mr-2" />
                        Buscar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FilterPet;