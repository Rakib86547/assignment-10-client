import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../../assest/logo-1.png';

const Header = () => {
    return (
        <div>
            <header className="px-4 py-2 bg-gray-800 text-gray-100 font-semibold">
                <div className="container flex justify-between h-16 mx-auto">
                    <Link to="/" aria-label="Back to homepage" className="flex items-center p-2 text-2xl font-semibold">
                        <img className="w-[30px] mr-1 mt-1" src={logo1} alt="" />
                        Developer Zone
                    </Link>
                    <ul className="items-stretch hidden space-x-3 md:flex">
                        <li className="flex">
                            <Link to="/" className="flex items-center px-4 -mb-1">Courses</Link>
                        </li>
                        <li className="flex">
                            <Link to="/faq" className="flex items-center px-4 -mb-1">FAQ</Link>
                        </li>
                        <li className="flex">
                            <Link to="/blog" className="flex items-center px-4 -mb-1">Blog</Link>
                        </li>
                        <li className="flex">
                            <Link to="/signup" className="flex items-center px-4 -mb-1">Sign Up</Link>
                        </li>
                        <li className="flex">
                            <Link to="/login" className="flex items-center px-4 -mb-1">Login</Link>
                        </li>
                        
                        <li className="flex">
                            <Link href="#" className="flex items-center px-4 -mb-1">Dark</Link>
                        </li>
                    </ul>
                    <button className="flex justify-end p-4 md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;