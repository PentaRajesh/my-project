import { useEffect } from "react";
import { useState } from "react";
import {Link} from 'react-scroll';
import logo from '../assets/logo.svg'
import {HiMenu} from 'react-icons/hi'

const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const [isSticky,setIsSticky] = useState(false);

    const toogleMenu= () => {
        setIsMenuOpen(!isMenuOpen);
    }
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0){
                setIsSticky(true);
            }
        };
        window.addEventListener("scroll",handleScroll);
    },[])
  return (
    <header className="w-full fixed top-0 left-0 right-0">
        <nav className={`py-4 md:px-12 px-4 bg-white ${isSticky ? "sticky top-0 right-0 left-0 bg-white" : {}}`}>
            <div className="flex items-center justify-between">
                <div className="cursor-pointer">
                    <img src={logo} alt="" className="h-10"/>
                </div>
                <div className="lg:flex items-center grap-3 hidden text-body text-lg">
                    <Link to="home" spy={true} activeClass="active" smooth={true} offset={-100} className="block py-2 px-4 cursor-pointer hover:text-gray-400">Home</Link>
                    <Link to="skills" spy={true} activeClass="active" smooth={true} offset={-100} className="block py-2 px-4 cursor-pointer hover:text-gray-400">Skills</Link>
                    <Link to="about" spy={true} activeClass="active" smooth={true} offset={-100} className="block py-2 px-4 cursor-pointer hover:text-gray-400">About Me</Link>
                    <Link to="portfolio" spy={true} activeClass="active" smooth={true} offset={-100} className="block py-2 px-4 cursor-pointer text-primary hover:text-gray-400">Portfolio</Link>
                    <Link to="testimonials" spy={true} activeClass="active" smooth={true} offset={-100} className="block py-2 px-4 cursor-pointer hover:text-gray-400">Testimonials</Link>
                </div>
                <div className="lg:block hidden">
                    <button className="outLineBtn">Contact Me</button>
                </div>
                <button onClick={toogleMenu} className="lg:hidden text-body text-3xl">
                    <HiMenu/>
                </button>
            </div>
            {
                isMenuOpen && <div className="mt-4 p-4 bg-body rounded-lg text-white">
                    <a href="/home" className="block py-2 pc-4 cursor-pointer text-primary hover:text-gray-400 text-xl">Home</a>
                    <a href="/skills" className="block py-2 pc-4 cursor-pointer text-body hover:text-gray-400 text-xl">Skills</a>
                    <a href="/about" className="block py-2 pc-4 cursor-pointer text-body hover:text-gray-400 text-xl">About Me</a>
                    <a href="/portfolio" className="block py-2 pc-4 cursor-pointer text-body hover:text-gray-400 text-xl">Portfolio</a>
                    <a href="/testimonials" className="block py-2 pc-4 cursor-pointer text-body hover:text-gray-400 text-xl">Testimonials</a>
                </div>
            }
        </nav>
    </header>
  )
}

export default Navbar;