import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import QueroAdotar from './routes/QueroAdotar';
import QueroAjudar from './routes/QueroAjudar';
import ErrorPage from './routes/ErrorPage';
import Cadastro from './routes/Cadastro';
import QuemSomos from './routes/QuemSomos';
import ONGsProtetores from './routes/ONGsProtetores';
import Entrar from './routes/Entrar';

// Definição do roteamento
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <QueroAdotar />,
      },
      {
        path: '/quero-adotar',
        element: <QueroAdotar />,
      },
      {
        path: '/quem-somos',
        element: <QuemSomos />,
      },
      {
        path: '/quero-ajudar',
        element: <QueroAjudar />,
      },
      {
        path: '/ongs-protetores',
        element: <ONGsProtetores />,
      },
      {
        path: '/blog',
        element: <div>Blog</div>,
      },
      {
        path: '/entrar',
        element: <Entrar />,
      },
      {
        path: '/pre-cadastro',
        element: <Cadastro />,
      },
    ],
  },
]);

// Renderização do aplicativo
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
