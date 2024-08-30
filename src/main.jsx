import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import QueroAdotar from './routes/QueroAdotar.jsx';
import QueroAjudar from './routes/QueroAjudar.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Cadastro from './routes/Cadastro.jsx';

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
        path: '/quero-ajudar',
        element: <QueroAjudar />
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
