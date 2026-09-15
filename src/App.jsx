import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyNavbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <BrowserRouter>
      <MyNavbar onCartClick={() => setShowCart(true)} />

      <Routes>
        <Route path="/" element={<Home />} />

<Route
  path="/store"
  element={
    <ProtectedRoute>
      <Products />
    </ProtectedRoute>
  }
/>
        <Route path="/about" element={<About />} />

        {/* Dynamic Product Page */}
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {showCart && <Cart onClose={() => setShowCart(false)} />}
    </BrowserRouter>
  );
}

export default App;
