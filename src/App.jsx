import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Product from "./Components/Modules/Product";
import ProductContainer from "./Components/ProductContainer";
import CategorieProducts from "./Components/CategorieProducts";
import Cart from "./Components/Modules/Cart";
import About from "./Components/About";
import Contact from "./Components/Contact";
import LoginPage from "./Components/Login/LoginPage";
import SignUpPage from "./Components/Login/SignUpPage";

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div>
      {!isLoginPage && (
        <header className="sticky top-0 z-50 bg-white">
          <Header />
        </header>
      )}

      <div className="flex-grow flex items-center justify-center">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products" element={<ProductContainer />} />
          <Route path="/categories/:name" element={<CategorieProducts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>

      {!isLoginPage && (
        <footer>
          <Footer className="sticky bottom-0 z-50 bg-gray-800 text-white p-4" />
        </footer>
      )}
    </div>
  );
}