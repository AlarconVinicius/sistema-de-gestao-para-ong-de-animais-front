import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import QueroAdotar from './routes/QueroAdotar.jsx';
import QueroAjudar from './routes/QueroAjudar.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Cadastro from './routes/Cadastro.jsx';
import QuemSomos from './routes/QuemSomos.jsx';
import ONGsProtetores from './routes/ONGsProtetores.jsx';
import Entrar from './routes/Entrar.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <QueroAdotar />
      },
      {
        path: '/quero-adotar',
        element: <QueroAdotar />
      },
      {
        path: '/quem-somos',
        element: <QuemSomos />
      },
      {
        path: '/quero-ajudar',
        element: <QueroAjudar />
      },
      {
        path: '/ongs-protetores',
        element: <ONGsProtetores />
      },
      {
        path: '/blog'
      },
      {
        path: '/entrar',
        element: <Entrar />
      },
      {
        path: '/pre-cadastro',
        element: <Cadastro />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
