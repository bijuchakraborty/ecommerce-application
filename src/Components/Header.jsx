import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FaSearch, FaShoppingCart, FaPowerOff } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";

const Header = ({ setToken }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCartPage, setIsCartPage] = useState(false);
  const [isProductPage, setIsProductPage] = useState(false)
  const [cartQuantity, setCartQuantity] = useState(0);
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    setIsCartPage(location.pathname === "/cart");
    setIsProductPage(location.pathname === "/products");
    updateCartQuantity();
  }, [location.pathname]);

  useEffect(() => {
    const handleCartUpdate = () => {
      const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
      const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
      setCartQuantity(totalQuantity);
    };

    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

  const updateCartQuantity = () => {
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartQuantity(totalQuantity);
  };

  const handleCartNavigation = () => {
    if (isCartPage) {
      navigate("/products");
    } else {
      navigate("/cart");
    }
  };

  const handleLogOut = () => {
    setToken("");
    sessionStorage.clear();
    navigate("/");
  };

  const navigations = [
    { name: "Home", path: "/home" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to={"/home"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
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

        <div className="flex items-center space-x-4 md:space-x-6 mt-4 md:mt-0">
          <div
            onMouseEnter={() => setSearchActive(true)}
            onMouseLeave={() => setSearchActive(false)}
            className="relative"
          >
            {isProductPage && <FaSearch className="cursor-pointer text-gray-600 hover:text-black transition duration-300 w-5 h-5" />}
            {searchActive && (
              <input
                type="text"
                placeholder="Search..."
                className="absolute top-10 left-0 mt-2 px-4 py-2 w-48 md:w-64 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            )}
          </div>

          <button
            onClick={() => handleLogOut()}
            className="text-gray-600 hover:text-black cursor-pointer transition duration-300"
          >
            <FaPowerOff className="w-5 h-5" />
          </button>

          <button
            onClick={handleCartNavigation}
            className="relative flex items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold py-2 px-4 md:py-3 md:px-6 focus:outline-none hover:scale-105 transition-all duration-300 rounded-full shadow-md transform"
          >
            {isCartPage ? <IoArrowBackOutline /> : <FaShoppingCart />}
            {cartQuantity > 0 && (
              <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full px-2 text-xs">
                {cartQuantity}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;