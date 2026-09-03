import { useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import MyNavbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';
import About from './pages/About';

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
          element={<Products />}
        />

        <Route
          path="/about"
          element={<About />}
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