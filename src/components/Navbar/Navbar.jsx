import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaXmark, FaBars } from "react-icons/fa6";
import logo from '../../assets/logo.svg';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // set toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    });

    //navItems array
    const navItems = [
        {link: "Quem somos", path: "/quem-somos"},
        {link: "Quero ajudar", path: "/quero-ajudar"},
        {link: "ONGs/Protetores", path: "/ongs-protetores"},
        {link: "Blog", path: "/blog"},
    ];

    return (
    <header className={`w-full fixed bg-white top-0 left-0 right-0 shadow-md ${isSticky ? "shadow-lg bg-white duration-300" : ""}`} >
        <nav className={`max-w-screen-xl mx-auto py-4 lg:px-10 px-4 ${isSticky ? "stick top-0 lef-0 right-0 bg-white duration-300" : ""}`}>
            <div className='flex justify-between items-center text-base gap-8'>
                <Link to='/' className='flex items-center space-x-3'><img src={logo} alt='' className='inline-block items-center h-9 md:h-8' /></Link>
                <ul className='lg:flex space-x-5 lg:space-x-10 hidden'>
                    {
                        navItems.map(({ link, path }) =>
                            <NavLink 
                                to={path} 
                                key={path} 
                                className={({ isActive }) => `block text-base text-nowrap sm:text-sm md:text-base lg:text-sm text-neutralGrey2 hover:text-secondaryOrange cursor-pointer ${isActive ? 'text-secondaryOrange' : ''}`}
                            >
                                {link}
                            </NavLink>
                        )
                    }
                </ul>
                {/* btn for large devices */}
                <div className='flex md:order-2 space-x-4 md:space-x-4'>
                    <div className='space-x-4 flex items-center'>
                        <Link to="/entrar-cadastrar" className='hidden lg:flex text-primaryPurple text-medium btn-primary bg-transparent border-2 border-primaryPurple'>Entrar/Cadastrar</Link>
                        <Link to="/quero-adotar" className='btn-primary'>Quero adotar</Link>
                    </div>
                    {/* menu btn for only mobile devices */}
                    <div className='lg:hidden'>
                        <button 
                        onClick={toggleMenu}
                        className='text-neutralDGrey focus:outline-none focus:text-gray-500'>
                            {
                                isMenuOpen ? (<FaXmark className='h-6 w-6 text-neutralDGrey' />) : (<FaBars className='h-6 w-6' />)
                            }    
                        </button>
                    </div>
                </div>
            </div>
            {/* nav items for mobile devices */}
            <div className={`space-y-4 px-4 mt-24 py-7 bg-primaryPurple ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                    navItems.map(({ link, path }) =>
                        <NavLink 
                            to={path} 
                            key={path} 
                            className={({ isActive }) => `block text-base text-neutralWhite1 hover:text-secondaryOrange first:font-medium cursor-pointer ${isActive ? 'text-secondaryOrange' : ''}`}
                        >
                            {link}
                        </NavLink>
                    )
                }
                <a href="/entrar-cadastrar" className='pt-6 mt-16 block text-base text-white hover:text-brandOrange first:font-medium'>Entrar/Cadastrar</a>
            </div>
        </nav>
    </header>
  )
}

export default Navbar