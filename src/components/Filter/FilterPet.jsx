import React from 'react';
import { Select, TextInput, Button } from 'flowbite-react';
import { BiSearch } from 'react-icons/bi';

const FilterPet = () => {
    return (
        <div className="lg:mx-14 bg-white p-4 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <Select id="species" required>
                    <option>Todas as Espécies</option>
                    <option>Cachorro</option>
                    <option>Gato</option>
                    <option>Outros</option>
                </Select>
                <Select id="sex" required>
                    <option>Todos os Sexos</option>
                    <option>Macho</option>
                    <option>Fêmea</option>
                </Select>
                <Select id="size" required>
                    <option>Todos os Portes</option>
                    <option>Pequeno</option>
                    <option>Médio</option>
                    <option>Grande</option>
                </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
                <Select id="state" className='md:col-span-3' required>
                    <option>Todos os Estados</option>
                    <option>São Paulo</option>
                    <option>Rio de Janeiro</option>
                    <option>Minas Gerais</option>
                    <option>Bahia</option>
                    {/* Adicione mais estados conforme necessário */}
                </Select>
                <Select id="city" className='md:col-span-3' required>
                    <option>Todas as Cidades</option>
                    <option>São Paulo</option>
                    <option>Rio de Janeiro</option>
                    <option>Belo Horizonte</option>
                    <option>Salvador</option>
                    {/* Adicione mais cidades conforme necessário */}
                </Select>
                <div className="md:col-span-6 flex items-center space-x-4 w-auto">
                    <TextInput className='w-full' id="name" placeholder="Nome do amigo" />
                    <button className="btn-primary bg-primaryPurple border-none w-72 flex items-center justify-center">
                        <BiSearch className="mr-2" />
                        Buscar
                    </button>
                </div>
            </div>
        </div>
  )
}

export default FilterPet