import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
            <p className="text-base font-semibold text-indigo-600">404</p>
            <h1 className="mt-4 text-3xl font-bold uppercase tracking-tight text-gray-900 sm:text-5xl">OPS! Não encontramos essa página</h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                    to="/"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Voltar ao início
                </Link>
            </div>
        </div>
    </main>
  )
}

export default ErrorPage;
