import React, { useState } from 'react';
import Header from '../components/Header/Header';
import { Label, TextInput, Modal, Checkbox  } from 'flowbite-react';

const Cadastro = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const breadcrumbItems = [
        { label: "Início", href: "/" },
        { label: "Formulário pré cadastro" }
    ]; 

    return (
        <div className='bg-neutralWhite1'>
            <div><Header breadcrumbItems={breadcrumbItems} /></div>
            <div className='md:px14 px-4 py-16 max-w-screen-xl mx-auto' id='pre-cadastro'>
                <h1 className='mb-3 text-center text-[32px] font-Nunito font-extrabold text-primaryPurple'>Formulário de pré-cadastro</h1>

                <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">

                    <h2 className="text-xl font-semibold mb-4">Dados da ONG</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <Label htmlFor="ong-name" value="Nome" />
                            <TextInput className='w-full' id="ong-name" placeholder="Nome da ONG" />
                        </div>
                        <div>
                            <Label htmlFor="ong-email" value="Email" />
                            <TextInput className='w-full' id="ong-email" type="email" placeholder="Email da ONG" />
                        </div>
                        <div>
                            <Label htmlFor="ong-document" value="Documento" />
                            <TextInput className='w-full' id="ong-document" placeholder="CNPJ ou CPF" />
                        </div>
                        <div>
                            <Label htmlFor="ong-phone" value="Telefone/Celular" />
                            <TextInput className='w-full' id="ong-phone" type="tel" placeholder="Telefone ou Celular" />
                        </div>
                        <div className="col-span-1 md:col-span-2">
                            <Label htmlFor="ong-instagram" value="Link do Instagram" />
                            <TextInput className='w-full' id="ong-instagram" placeholder="Link do Instagram da ONG" />
                        </div>
                    </div>

                    <h2 className="text-xl font-semibold mb-4">Dados do Responsável</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <Label htmlFor="responsavel-name" value="Nome" />
                            <TextInput className='w-full' id="responsavel-name" placeholder="Nome do Responsável" />
                        </div>
                        <div>
                            <Label htmlFor="responsavel-document" value="Documento" />
                            <TextInput className='w-full' id="responsavel-document" placeholder="CPF" />
                        </div>
                        <div className="col-span-1 md:col-span-2">
                            <Label htmlFor="responsavel-email" value="Email" />
                            <TextInput className='w-full' id="responsavel-email" type="email" placeholder="Email do Responsável" />
                        </div>
                        <div>
                            <Label htmlFor="responsavel-birthday" value="Data de Nascimento" />
                            <TextInput className='w-full' id="responsavel-birthday" type="date" placeholder="Data de Nascimento" />
                        </div>
                        <div>
                            <Label htmlFor="responsavel-phone" value="Telefone/Celular" />
                            <TextInput className='w-full' id="responsavel-phone" type="tel" placeholder="Telefone ou Celular" />
                        </div>
                    </div>

                    <h2 className="text-xl font-semibold mb-4">Endereço</h2>
                    <div className="bg-[#c0b4cc] text-sm text-gray-700 p-3 rounded-md mb-6">
                        Seu endereço completo será mantido em sigilo, apenas a cidade e o estado serão visíveis.
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="col-span-1 md:col-span-2">
                            <Label htmlFor="cep" value="CEP" />
                            <TextInput className='w-full' id="cep" placeholder="CEP" />
                        </div>
                        <div>
                            <Label htmlFor="state" value="Estado" />
                            <TextInput className='w-full' id="state" placeholder="Estado" />
                        </div>
                        <div>
                            <Label htmlFor="city" value="Cidade" />
                            <TextInput className='w-full' id="city" placeholder="Cidade" />
                        </div>
                        <div className="col-span-1 md:col-span-2">
                            <Label htmlFor="street" value="Logradouro" />
                            <TextInput className='w-full' id="street" placeholder="Logradouro" />
                        </div>
                        <div>
                            <Label htmlFor="neighborhood" value="Bairro" />
                            <TextInput className='w-full' id="neighborhood" placeholder="Bairro" />
                        </div>
                        <div>
                            <Label htmlFor="number" value="Número" />
                            <TextInput className='w-full' id="number" placeholder="Número" />
                        </div>
                        <div>
                            <Label htmlFor="complement" value="Complemento" />
                            <TextInput className='w-full' id="complement" placeholder="Complemento" />
                        </div>
                        <div>
                            <Label htmlFor="reference" value="Referência" />
                            <TextInput className='w-full' id="reference" placeholder="Ponto de Referência" />
                        </div>
                    </div>

                    <div className="flex items-center mb-6">
                        <Checkbox id="terms" className="mr-2" />
                        <label htmlFor="terms" className="text-gray-700">
                            Declaro que li e estou ciente das condições citadas.
                        </label>
                        <span
                            className="text-primaryPurple cursor-pointer ml-2"
                            onClick={openModal}
                        >
                            Visualizar condições.
                        </span>
                    </div>

                    <button className="btn-primary py-3 px-4 rounded-md w-full text-lg">
                        Cadastrar
                    </button>
                    <Modal show={isModalOpen} onClose={closeModal}>
                        <Modal.Header>
                            Processo de Aprovação para ONGs
                        </Modal.Header>
                        <Modal.Body>
                            <p className="mb-4">
                                Todas as ONGs que participam do programa Adota Nós passam pelo processo de aprovação que acontece em duas etapas:
                            </p>
                            <ol className="list-decimal pl-6 mb-4">
                                <li>Validação de documentos.</li>
                                <li>Visita no abrigo ou lar temporário com emissão de relatório para análise da diretoria técnica.</li>
                            </ol>
                            <p className="font-semibold">
                                Importante:
                            </p>
                            <p>
                                O preenchimento do cadastro não indica a aprovação imediata.
                            </p>
                        </Modal.Body>
                    </Modal>

                </div>
            </div>
        </div>
    )
}

export default Cadastro;
