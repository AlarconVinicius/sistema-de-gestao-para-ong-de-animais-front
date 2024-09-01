import './MyFooter.css';
import React from 'react';
import { Footer } from "flowbite-react";
import dogImg from "../../assets/dog.svg";
import pawsImg from "../../assets/patas.svg";

const MyFooter = () => {
  return (
    <Footer container className='bg-svg rounded-none'>
      <div className="lg:container mx-auto py-4 lg:px-14 px-4 relative">
        <div className='dog'>
          <img src={dogImg} alt="Dog" className='dog-image'/>
        </div>
        <div className='paws'>
          <img src={pawsImg} alt="Paws" className='paws-image'/>
        </div>
        <div className="grid w-full justify-center sm:flex sm:justify-center md:flex md:grid-cols-1">
          <div className="grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Adote" className='text-neutralWhite1' />
              <Footer.LinkGroup col>
                <Footer.Link href="/quero-adotar" className='text-neutralWhite1'>Buscar animais</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Colabore" className='text-neutralWhite1' />
              <Footer.LinkGroup col>
                <Footer.Link href="/quero-ajudar" className='text-neutralWhite1'>Ajude a manter a plataforma</Footer.Link>
                <Footer.Link href="/ongs-protetores" className='text-neutralWhite1'>Ajude uma ONG</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Divulgue um animal" className='text-neutralWhite1' />
              <Footer.LinkGroup col>
                <Footer.Link href="/entrar" className='text-neutralWhite1'>Cadastrar um animal</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-center">
          <Footer.Copyright href="https://www.linkedin.com/in/vinicius-alarcon/" by="Todos os direitos reservados. Vinícius Alarcon" year={2024}  className='text-neutralWhite1'/>
        </div>
      </div>
    </Footer>
  )
}

export default MyFooter