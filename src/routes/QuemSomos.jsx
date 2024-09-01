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
            <div className='md:px14 px-4 py-16 max-w-screen-xl mx-auto' id='quem-somos'>
                <h1 className='mb-3 text-center text-[32px] font-Nunito font-extrabold text-primaryPurple'>Quem Somos</h1>
            </div>
    </div>
  )
}

export default QuemSomos