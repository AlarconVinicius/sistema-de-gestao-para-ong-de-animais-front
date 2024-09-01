import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import QRCode from "../assets/QrCodeGoogle.png";

const QueroAjudar = () => {

  const breadcrumbItems = [
    { label: "Início", href: "/" },
    { label: "Quero Ajudar" }
  ]; 
  return (
    <div className='bg-neutralWhite1'>
            <div><Header breadcrumbItems={breadcrumbItems} /></div>
            <div className='md:px14 px-4 py-16 max-w-screen-xl mx-auto' id='quero-ajudar'>
                <h1 className='mb-3 text-center text-[32px] font-Nunito font-extrabold text-primaryPurple'>Quero Ajudar</h1>
                <div className="flex flex-col md:flex-row justify-center align-middle gap-x-8">
                <div className="max-w-md w-full p-6 bg-white shadow-md rounded-lg flex flex-col items-center justify-center">
    <h2 className="text-xl font-semibold mb-4 text-center">Ajude a manter a plataforma</h2>
    <img src={QRCode} alt="QR Code" className="w-40 h-40 object-contain" />
</div>

                    <div className="max-w-md w-full md:w-0 flex items-center justify-center text-xl font-semibold text-gray-500 md:my-auto my-5">
                        E/OU
                    </div>
                    <div className="max-w-md w-full p-6 bg-white shadow-md rounded-lg flex-1 mt-auto md:mt-12" style={{ height: '160px' }}>
                        <h2 className="text-xl font-semibold mb-4 text-center">Ajude uma ONG</h2>
                        <Link to="/ongs-protetores" className='btn-primary py-3 px-4 rounded-md w-full text-lg text-center block'>
                            Buscar ONG
                        </Link>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default QueroAjudar