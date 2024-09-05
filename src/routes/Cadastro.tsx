import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Header from '../components/Header/Header';
import { Label, TextInput, Modal, Checkbox } from 'flowbite-react';
import { BreadcrumbModel } from '../models/ComponentsModels';

const cadastroSchema = z.object({
  ong: z.object({
    nome: z.string().min(1, 'Nome da ONG é obrigatório'),
    instagram: z.string().url('Instagram deve ser uma URL válida').min(1, "Instagram é obrigatório"),
    documento: z.string().min(1, 'Documento é obrigatório'),
    chavePix: z.string().optional(),
    contato: z.object({
      telefone: z.string().min(10, 'Telefone inválido'),
      email: z.string().email('Email inválido')
    }),
    endereco: z.object({
      cidade: z.string().min(1, 'Cidade é obrigatória'),
      estado: z.string().min(1, 'Estado é obrigatório'),
      cep: z.string().min(8, 'CEP inválido'),
      logradouro: z.string().min(1, 'Logradouro é obrigatório'),
      bairro: z.string().min(1, 'Bairro é obrigatório'),
      numero: z.number().positive('Número inválido'),
      complemento: z.string().optional(),
      referencia: z.string().optional()
    })
  }),
  responsavel: z.object({
    nome: z.string().min(1, 'Nome do responsável é obrigatório'),
    documento: z.string().min(1, 'Documento é obrigatório'),
    dataNascimento: z.string().min(1, 'Data de nascimento é obrigatória'),
    contato: z.object({
      telefone: z.string().min(10, 'Telefone inválido'),
      email: z.string().email('Email inválido')
    })
  }),
  terms: z.boolean().refine(val => val === true, 'Você deve aceitar os termos')
});

type CadastroSchema = z.infer<typeof cadastroSchema>;

const Cadastro: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<CadastroSchema>({
    resolver: zodResolver(cadastroSchema)
  });

  const onSubmit = (data: CadastroSchema) => {
    data.ong.chavePix = data.ong.documento;
    console.log(data);
    reset();
    alert('Cadastro realizado com sucesso!');
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const breadcrumbItems: BreadcrumbModel[] = [
    { label: "Início", href: "/" },
    { label: "Formulário pré cadastro" }
  ];

  return (
    <div className='bg-neutralWhite1'>
      <div><Header breadcrumbItems={breadcrumbItems} /></div>
      <div className='md:px14 px-4 py-16 max-w-screen-xl mx-auto' id='pre-cadastro'>
        <h1 className='mb-3 text-center text-[32px] font-Nunito font-extrabold text-primaryPurple'>
          Formulário de pré-cadastro
        </h1>

        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-xl font-semibold mb-4">Dados da ONG</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <Label htmlFor="ong-nome" value="Nome" />
                    <TextInput className='w-full' id="ong-nome" {...register('ong.nome')} placeholder="Nome da ONG" />
                    {errors.ong?.nome && <span className='text-sm text-red-700 block'>{errors.ong.nome.message}</span>}
                </div>

                <div>
                    <Label htmlFor="ong-email" value="Email" />
                    <TextInput className='w-full' id="ong-email" type="email" {...register('ong.contato.email')} placeholder="Email da ONG" />
                    {errors.ong?.contato?.email && <span className='text-sm text-red-700 block'>{errors.ong.contato.email.message}</span>}
                </div>
                <div>
                    <Label htmlFor="ong-documento" value="Documento" />
                    <TextInput className='w-full' id="ong-documento" {...register('ong.documento')} placeholder="CNPJ ou CPF" />
                    {errors.ong?.documento && <span className='text-sm text-red-700 block'>{errors.ong.documento.message}</span>}
                </div>

                <div>
                    <Label htmlFor="ong-telefone" value="Telefone/Celular" />
                    <TextInput className='w-full' id="ong-telefone" type="tel" {...register('ong.contato.telefone')} placeholder="Telefone ou Celular" />
                    {errors.ong?.contato?.telefone && <span className='text-sm text-red-700 block'>{errors.ong.contato.telefone.message}</span>}
                </div>

                <div className="col-span-1 md:col-span-2">
                    <Label htmlFor="ong-instagram" value="Link do Instagram" />
                    <TextInput className='w-full' id="ong-instagram" {...register('ong.instagram')} placeholder="Link do Instagram da ONG" />
                    {errors.ong?.instagram && <span className='text-sm text-red-700 block'>{errors.ong.instagram.message}</span>}
                </div>
            </div>

            <h2 className="text-xl font-semibold mb-4">Dados do Responsável</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <Label htmlFor="responsavel-nome" value="Nome" />
                    <TextInput className='w-full' id="responsavel-nome" {...register('responsavel.nome')} placeholder="Nome do Responsável" />
                    {errors.responsavel?.nome && <span className='text-sm text-red-700 block'>{errors.responsavel.nome.message}</span>}
                </div>

                <div>
                    <Label htmlFor="responsavel-documento" value="Documento" />
                    <TextInput className='w-full' id="responsavel-documento" {...register('responsavel.documento')} placeholder="CPF" />
                    {errors.responsavel?.documento && <span className='text-sm text-red-700 block'>{errors.responsavel.documento.message}</span>}
                </div>

                <div className="col-span-1 md:col-span-2">
                    <Label htmlFor="responsavel-email" value="Email" />
                    <TextInput className='w-full' id="responsavel-email" type="email" {...register('responsavel.contato.email')} placeholder="Email do Responsável" />
                    {errors.responsavel?.contato?.email && <span className='text-sm text-red-700 block'>{errors.responsavel.contato.email.message}</span>}
                    </div>

                <div>
                    <Label htmlFor="responsavel-dataNascimento" value="Data de Nascimento" />
                    <TextInput className='w-full' id="responsavel-dataNascimento" type="date" {...register('responsavel.dataNascimento')} placeholder="Data de Nascimento" />
                    {errors.responsavel?.dataNascimento && <span className='text-sm text-red-700 block'>{errors.responsavel.dataNascimento.message}</span>}
                </div>

                <div>
                    <Label htmlFor="responsavel-telefone" value="Telefone/Celular" />
                    <TextInput className='w-full' id="responsavel-telefone" type="tel" {...register('responsavel.contato.telefone')} placeholder="Telefone ou Celular" />
                    {errors.responsavel?.contato?.telefone && <span className='text-sm text-red-700 block'>{errors.responsavel.contato.telefone.message}</span>}
                </div>
            </div>
            <h2 className="text-xl font-semibold mb-4">Endereço</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="col-span-1 md:col-span-2">
                    <Label htmlFor="cep" value="CEP" />
                    <TextInput className='w-full' id="cep" {...register('ong.endereco.cep')} placeholder="CEP" />
                    {errors.ong?.endereco?.cep && <span className='text-sm text-red-700 block'>{errors.ong.endereco.cep.message}</span>}
                </div>
                <div>
                    <Label htmlFor="state" value="Estado" />
                    <TextInput className='w-full' id="state" {...register('ong.endereco.estado')} placeholder="Estado" />
                    {errors.ong?.endereco?.estado && <span className='text-sm text-red-700 block'>{errors.ong.endereco.estado.message}</span>}
                </div>
                <div>
                    <Label htmlFor="city" value="Cidade" />
                    <TextInput className='w-full' id="city" {...register('ong.endereco.cidade')} placeholder="Cidade" />
                    {errors.ong?.endereco?.cidade && <span className='text-sm text-red-700 block'>{errors.ong.endereco.cidade.message}</span>}
                </div>
                <div className="col-span-1 md:col-span-2">
                    <Label htmlFor="street" value="Logradouro" />
                    <TextInput className='w-full' id="street" {...register('ong.endereco.logradouro')} placeholder="Logradouro" />
                    {errors.ong?.endereco?.logradouro && <span className='text-sm text-red-700 block'>{errors.ong.endereco.logradouro.message}</span>}
                </div>
                <div>
                    <Label htmlFor="neighborhood" value="Bairro" />
                    <TextInput className='w-full' id="neighborhood" {...register('ong.endereco.bairro')} placeholder="Bairro" />
                    {errors.ong?.endereco?.bairro && <span className='text-sm text-red-700 block'>{errors.ong.endereco.bairro.message}</span>}
                </div>
                <div>
                    <Label htmlFor="number" value="Número" />
                    <TextInput className='w-full' id="number" type="number" {...register('ong.endereco.numero', { valueAsNumber: true })} placeholder="Número" />
                    {errors.ong?.endereco?.numero && <span className='text-sm text-red-700 block'>{errors.ong.endereco.numero.message}</span>}
                </div>
                <div>
                    <Label htmlFor="complement" value="Complemento" />
                    <TextInput className='w-full' id="complement" {...register('ong.endereco.complemento')} placeholder="Complemento" />
                    {errors.ong?.endereco?.complemento && <span className='text-sm text-red-700 block'>{errors.ong.endereco.complemento.message}</span>}
                </div>
                <div>
                    <Label htmlFor="reference" value="Referência" />
                    <TextInput className='w-full' id="reference" {...register('ong.endereco.referencia')} placeholder="Ponto de Referência" />
                    {errors.ong?.endereco?.referencia && <span className='text-sm text-red-700 block'>{errors.ong.endereco.referencia.message}</span>}
                </div>
            </div>
            <div className="flex items-center flex-col mb-6">
              <div className='flex items-center'>
                  <Checkbox id="terms" {...register('terms')} className="mr-2" />
                  <label htmlFor="terms" className="text-gray-700">
                    Declaro que li e estou ciente das condições citadas.
                  </label>
                  <span className="text-primaryPurple cursor-pointer ml-2" onClick={openModal}>
                    Visualizar condições.
                  </span>
              </div>
            {errors.terms && <span className='text-sm text-red-700 block'>{errors.terms.message}</span>}
            </div>

            <input type="submit" className="btn-primary py-3 px-4 rounded-md w-full text-lg cursor-pointer" value="Cadastrar" />
          </form>

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
  );
}

export default Cadastro;
