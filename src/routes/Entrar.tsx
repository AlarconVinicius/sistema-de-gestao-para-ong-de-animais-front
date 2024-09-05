import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Label, TextInput } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import AuthServices from '../services/AuthService';
import { LoginRequest } from '../models/AuthModels';
import { BreadcrumbModel } from '../models/ComponentsModels';
import Header from '../components/Header/Header';

// Schema de validação usando Zod
const loginSchema = z.object({
  email: z.string().email("E-mail inválido"),
  senha: z.string().min(1, "Senha inválida")
});

type LoginSchema = z.infer<typeof loginSchema>;

const Entrar: React.FC = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema)
  });

  const login = async (data: LoginSchema) => {
    const loginObj: LoginRequest = {
      email: data.email,
      senha: data.senha
    };
    try {
      const response = await AuthServices.login(loginObj);
      console.log(response);
      alert('Login realizado com sucesso!');
      reset();
      navigate("/");
    } catch (error: any) {
      console.error(error.message);
      alert('Erro ao realizar login');
    }
  };

  const breadcrumbItems: BreadcrumbModel[] = [
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
            <form onSubmit={handleSubmit(login)}>
              <div className="grid grid-cols-1 gap-6 mb-6">
                <div>
                  <Label htmlFor="email" value="E-mail" />
                  <TextInput
                    className='w-full'
                    id="email"
                    type="email"
                    placeholder="E-mail"
                    {...register('email')}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
                <div>
                  <Label htmlFor="password" value="Senha" />
                  <TextInput
                    className='w-full'
                    id="password"
                    type="password"
                    placeholder="Senha"
                    {...register('senha')}
                  />
                  {errors.senha && <p className="text-red-500 text-sm">{errors.senha.message}</p>}
                </div>
              </div>

              <input
                type='submit'
                className="btn-primary py-3 px-4 rounded-md w-full text-lg cursor-pointer"
                value="Entrar"
              />
            </form>
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
  );
};

export default Entrar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../components/Header/Header';
// import { Label, TextInput  } from 'flowbite-react';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AuthServices from '../services/AuthService';

// const Entrar = () => {
//     const navigate = useNavigate();

//     const [email, setEmail] = useState();
//     const [userResponse, setUserResponse] = useState();
//     const [password, setPassword] = useState();

//     const breadcrumbItems = [
//         { label: "Início", href: "/" },
//         { label: "Entrar" }
//     ]; 

//     const login = async (e) => {
//         e.preventDefault();
//         const loginObj = {"email": email, "senha": password};
//         try {
//             const response = await AuthServices.login(loginObj);
//             setUserResponse(response);
//             navigate("/");
//         } catch (error) {
//             console.error(error.message);
//         }
//     }
//     return (
//         <div className='bg-neutralWhite1'>
//             <div><Header breadcrumbItems={breadcrumbItems} /></div>
//             <div className='md:px14 px-4 py-16 max-w-screen-xl mx-auto' id='entrar'>
//                 <h1 className='mb-3 text-center text-[32px] font-Nunito font-extrabold text-primaryPurple'>Boas-vindas ao AdotaNós</h1>
    
//                 <div className="flex flex-col md:flex-row justify-center align-middle gap-x-8">
//                     {/* DIV 1 */}
//                     <div className="max-w-md w-full p-6 bg-white shadow-md rounded-lg flex-1">
//                         <h2 className="text-xl font-semibold mb-4 text-center">Acesse sua conta</h2>
//                         <form onSubmit={(e) => login(e)}>
//                             <div className="grid grid-cols-1 gap-6 mb-6">
//                                 <div>
//                                     <Label htmlFor="email" value="E-mail" />
//                                     <TextInput className='w-full' id="email" type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
//                                 </div>
//                                 <div>
//                                     <Label htmlFor="password" value="Senha" />
//                                     <TextInput type='password' className='w-full' id="password" placeholder="Senha"  onChange={(e) => setPassword(e.target.value)}/>
//                                 </div>
//                             </div>
        
//                             <input type='submit' className="btn-primary py-3 px-4 rounded-md w-full text-lg cursor-pointer" value="Entrar">
//                             </input>
//                         </form>
//                     </div>
//                     <div className="max-w-md w-full md:w-0 flex items-center justify-center text-xl font-semibold text-gray-500 md:my-auto my-5">
//                         OU
//                     </div>
//                     {/* DIV 2 */}
//                     <div className="max-w-md w-full p-6 bg-white shadow-md rounded-lg flex-1 mt-auto md:mt-20" style={{ height: '160px' }}>
//                         <h2 className="text-xl font-semibold mb-4 text-center">Crie sua conta!</h2>
//                         <Link to="/pre-cadastro" className='btn-primary py-3 px-4 rounded-md w-full text-lg text-center block'>
//                             Cadastrar
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
    
// }

// export default Entrar;
