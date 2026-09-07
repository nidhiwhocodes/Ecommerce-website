import { useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import MyNavbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';

import Home from './pages/Home';
import About from './pages/About';
import ProductDetails from './pages/ProductDetails';

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <BrowserRouter>

      <MyNavbar
        onCartClick={() => setShowCart(true)}
      />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/store"
          element={<Products />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        {/* Dynamic Product Page */}
        <Route
          path="/product/:productId"
          element={<ProductDetails />}
        />

      </Routes>

      {showCart && (
        <Cart
          onClose={() => setShowCart(false)}
        />
      )}

    </BrowserRouter>
  );
}

export default App;