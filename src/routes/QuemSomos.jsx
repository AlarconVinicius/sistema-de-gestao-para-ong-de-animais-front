import React from 'react';
import Header from '../components/Header/Header';

const QuemSomos = () => {

  const breadcrumbItems = [
    { label: "Início", href: "/" },
    { label: "Quem Somos" }
  ]; 
  return (
    <div className='bg-neutralWhite1'>
            <div><Header breadcrumbItems={breadcrumbItems} /></div>
            <div className='md:px14 px-4 py-16 max-w-screen-xl mx-auto justify-center align-middle' id='quem-somos'>
              <h1 className='mb-3 text-center text-[32px] font-Nunito font-extrabold text-primaryPurple'>Quem Somos</h1>
              <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto px-4">
                <p className='text-justify text-[20px] font-Nunito text-primaryPurple'>
                  A <strong>AdotaNós</strong> nasceu com a missão de transformar a experiência de adoção de animais e apoiar as ONGs que trabalham incansavelmente para dar um lar aos nossos peludinhos. Idealizada para ser um ponto de encontro unificado, nossa plataforma oferece uma maneira prática e centralizada para visualizar e adotar pets disponíveis.<br /><br />
                  Com a <strong>AdotaNós</strong>, você encontra uma vasta seleção de animais prontos para encontrar um novo lar, tudo em um só lugar. Facilitamos o processo de adoção, tornando mais fácil para você encontrar e se apaixonar pelo seu próximo amigo de quatro patas. Além disso, oferecemos uma maneira simples e segura para contribuir com a plataforma e com as ONGs através de doações, ajudando a financiar o trabalho essencial que elas realizam.<br /><br />
                  Junte-se a nós nesta missão de fazer a diferença na vida dos animais e apoiar as organizações que fazem um trabalho incrível. Com a <strong>AdotaNós</strong>, você não está apenas adotando um pet; está ajudando a criar um futuro melhor para muitos outros que ainda precisam de um lar.
                </p>
              </div>
            </div>
    </div>
  )
}

export default QuemSomos