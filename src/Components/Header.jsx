import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa6";

const Header = ({ setToken }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCartPage, setIsCartPage] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    setIsCartPage(location.pathname === '/cart');
  }, [location.pathname]);

  const handleCartNavigation = () => {
    if (isCartPage) {
      navigate('/products');
    } else {
      navigate('/cart');
    }
  };

  const handleLogOut = () => {
    setToken("")
    sessionStorage.clear();
    navigate('/')
  }

  const navigations = [
    { name: "Home", path: "/home" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to={"/home"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={Logo} alt="logo" className="h-10 w-auto" />
          <em className="ml-3 text-xl">Elite Fusion</em>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {navigations.map((navigation) => (
            <Link
              key={navigation.name}
              to={navigation.path}
              className="mr-5 text-gray-600 hover:text-white hover:bg-blue-500 hover:scale-105 px-4 py-2 rounded-lg transition-all duration-300 transform"
            >
              {navigation.name}
            </Link>
          ))}
        </nav>

        <div className="relative inline-block">
          <div
            onMouseEnter={() => setSearchActive(true)}
            onMouseLeave={() => setSearchActive(false)}
            className="cursor-pointer text-gray-600 hover:text-black transition duration-300"
          >
            <FaSearch className="w-5 h-5" />
          </div>

          {searchActive && (
            <input
              type="text"
              placeholder="Search..."
              className="absolute top-8 left-0 mt-2 px-4 py-2 w-48 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
          )}
        </div>

        <button onClick={() => handleLogOut()} className="ml-5 text-gray-600 hover:text-black cursor-pointer transition duration-300">
          <FaPowerOff className='h-5 w-5' />
        </button>

        <button
          onClick={handleCartNavigation}
          className="inline-flex items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold py-3 px-6 focus:outline-none hover:scale-105 transition-all duration-300 rounded-full shadow-md transform ml-5"
        >
          {isCartPage ? <IoArrowBackOutline /> : <FaShoppingCart />}
        </button>
      </div>
    </header>
  );
};

export default Header;