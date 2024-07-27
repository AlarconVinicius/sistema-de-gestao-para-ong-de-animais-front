import React from 'react';
import PropTypes from 'prop-types';
import { Select, TextInput } from 'flowbite-react';
import { BiSearch } from 'react-icons/bi';

const FilterPet = ({ handleFilterChange }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <Select id="species" className='items-center' required onChange={handleFilterChange}>
                    <option>Todas as Espécies</option>
                    <option>Cachorro</option>
                    <option>Gato</option>
                    <option>Outros</option>
                </Select>
                <Select id="sex" className='items-center' required onChange={handleFilterChange}>
                    <option>Todos os Sexos</option>
                    <option>Macho</option>
                    <option>Fêmea</option>
                </Select>
                <Select id="size" className='items-center' required onChange={handleFilterChange}>
                    <option>Todos os Portes</option>
                    <option>Pequeno</option>
                    <option>Médio</option>
                    <option>Grande</option>
                </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
                <Select id="state" className='md:col-span-3 items-center' required onChange={handleFilterChange}>
                    <option>Todos os Estados</option>
                    <option>SP</option>
                    <option>RJ</option>
                    <option>MG</option>
                    <option>BH</option>
                </Select>
                <Select id="city" className='md:col-span-3 items-center' required onChange={handleFilterChange}>
                    <option>Todas as Cidades</option>
                    <option>São Paulo</option>
                    <option>Rio de Janeiro</option>
                    <option>Belo Horizonte</option>
                    <option>Salvador</option>
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
FilterPet.propTypes = {
    handleFilterChange: PropTypes.func.isRequired
};
export default FilterPet;
