import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCartPage, setIsCartPage] = useState(false);

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

  const navigations = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={Logo} alt="logo" className="h-10 w-auto" />
          <em className="ml-3 text-xl">Elite Fusion</em>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {navigations.map((navigation) => (
            <Link key={navigation.name} to={navigation.path} className="mr-5 hover:text-gray-900">
              {navigation.name}
            </Link>
          ))}
        </nav>
        <button
          onClick={handleCartNavigation}
          className="inline-flex items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          {isCartPage ? "Back" : "Go To Cart"}
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d={isCartPage ? "M19 12H5M12 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"}></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;