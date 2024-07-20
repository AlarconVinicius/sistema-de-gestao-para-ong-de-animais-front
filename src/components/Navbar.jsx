import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { FaXmark, FaBars } from "react-icons/fa6";
import logo from '../assets/logo.png';
import { Button } from "flowbite-react";

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
        {link: "Início", path: "inicio", isScrollLink: true},
        {link: "ONG/Protetores", path: "/ongs-protetores", isScrollLink: false},
        {link: "Blog", path: "/blog", isScrollLink: false},
        {link: "Sobre", path: "/product", isScrollLink: false},
        {link: "FAQ", path: "/testimonial", isScrollLink: false},
    ];

    return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0' >
        <nav className={`lg:container mx-auto py-4 lg:px-14 px-4 ${isSticky ? "stick top-0 lef-0 right-0 border-b bg-white duration-300" : ""}`}>
            <div className='flex justify-between items-center text-base gap-8'>
                <a href='' className='text-2xl font-semibold flex items-center space-x-3'><img src={logo} alt='' className='inline-block items-center h-9 md:h-8' /></a>
                <ul className='lg:flex space-x-10 hidden'>
                    {
                        navItems.map(({ link, path, isScrollLink }) =>
                            isScrollLink ?
                            (<ScrollLink to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-darkGray hover:text-brandOrange first:font-medium cursor-pointer'>{link}</ScrollLink>)
                            :
                            (<a href={path} key={path} className='block text-base text-darkGray hover:text-brandOrange first:font-medium cursor-pointer'>{link}</a>)
                        )
                    }
                </ul>
                {/* btn for large devices */}
                <div className='flex md:order-2 space-x-4 md:space-x-4'>
                    <div className='space-x-4 flex items-center'>
                        <Button href="/quero-adotar" className='bg-brandOrange text-white py-2 px-0 rounded hover:text-brandPrimary first:font-medium'>Quero adotar</Button>
                        <Button className='hidden lg:flex bg-primaryBlue text-white py-2 px-0 transition-all duration-300 rounded hover:bg-neutralGrey'>Entrar/Cadastrar</Button>
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
            <div className={`space-y-4 px-4 mt-24 py-7 bg-primaryBlue ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                    navItems.map(({ link, path, isScrollLink }) =>
                    isScrollLink ?
                        (<ScrollLink to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-white hover:text-brandOrange first:font-medium cursor-pointer'>{link}</ScrollLink>)
                        :
                        (<a href={path} key={path} className='block text-base text-white hover:text-brandOrange first:font-medium cursor-pointer'>{link}</a>)
                    )
                }
                <a href="/entrar-cadastrar" className='pt-6 mt-16 block text-base text-white hover:text-brandOrange first:font-medium'>Entrar/Cadastrar</a>
            </div>
        </nav>
    </header>
  )
}

export default Navbar