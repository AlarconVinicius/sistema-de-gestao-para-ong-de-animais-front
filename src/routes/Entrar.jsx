import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import { Label, TextInput  } from 'flowbite-react';

const Entrar = () => {

    const breadcrumbItems = [
        { label: "Início", href: "/" },
        { label: "Entrar" }
    ]; 
    return (
        <div className='bg-neutralWhite1'>
            <div><Header breadcrumbItems={breadcrumbItems} /></div>
            <div className='md:px14 px-4 py-16 max-w-screen-xl mx-auto' id='entrar'>
                <h1 className='mb-3 text-center text-[32px] font-Nunito font-extrabold text-primaryPurple'>Boas-vindas ao AdotaNós</h1>
    
                <div className="flex flex-col md:flex-row justify-center align-middle gap-x-8">
                    {/* DIV 1 */}
                    <div className="max-w-md w-full p-6 bg-white shadow-md rounded-lg flex-1">
                        <h2 className="text-xl font-semibold mb-4 text-center">Acesse sua conta</h2>
                        <div className="grid grid-cols-1 gap-6 mb-6">
                            <div>
                                <Label htmlFor="email" value="E-mail" />
                                <TextInput className='w-full' id="email" type="email" placeholder="E-mail" />
                            </div>
                            <div>
                                <Label htmlFor="password" value="Senha" />
                                <TextInput type='password' className='w-full' id="password" placeholder="Senha" />
                            </div>
                        </div>
    
                        <button className="btn-primary py-3 px-4 rounded-md w-full text-lg">
                            Entrar
                        </button>
                    </div>
                    <div className="max-w-md w-full md:w-0 flex items-center justify-center text-xl font-semibold text-gray-500 md:my-auto my-5">
                        OU
                    </div>
                    {/* DIV 2 */}
                    <div className="max-w-md w-full p-6 bg-white shadow-md rounded-lg flex-1 mt-auto md:mt-20" style={{ height: '160px' }}>
                        <h2 className="text-xl font-semibold mb-4 text-center">Crie sua conta!</h2>
                        <Link to="/pre-cadastro" className='btn-primary py-3 px-4 rounded-md w-full text-lg text-center block'>
                            Cadastrar
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
    

    // return (
    //     <div className='bg-neutralWhite1'>
    //         <div><Header breadcrumbItems={breadcrumbItems} /></div>
    //         <div className='md:px14 px-4 py-16 max-w-screen-xl mx-auto' id='entrar'>
    //             <h1 className='mb-3 text-center text-[32px] font-Nunito font-extrabold text-primaryPurple'>Boas-vindas ao AdotaNós</h1>

    //             <div>
    //                 <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
    
    //                     {/* DIV 1 */}
    //                     <h2 className="text-xl font-semibold mb-4 text-center">Acesse sua conta</h2>
    //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    //                         <div className="col-span-1 md:col-span-2">
    //                             <Label htmlFor="email" value="E-mail" />
    //                             <TextInput className='w-full' id="email" type="email" placeholder="E-mail" />
    //                         </div>
    //                         <div className="col-span-1 md:col-span-2">
    //                             <Label htmlFor="password" value="Senha" />
    //                             <TextInput type='password' className='w-full' id="password" placeholder="Senha" />
    //                         </div>
    //                     </div>
    
    //                     <button className="btn-primary py-3 px-4 rounded-md w-full text-lg">
    //                         Entrar
    //                     </button>
                        
    //                 </div>
    //                 {/* DIV 2 */}
    //                 <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
    
    //                     <h2 className="text-xl font-semibold mb-4 text-center">Crie sua conta!</h2>
    //                     <a href="/pre-cadastro" className='btn-primary py-3 px-4 rounded-md w-full text-lg'>Cadastrar</a>                    
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default Entrar;
