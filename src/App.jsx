import { useState } from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  const [showCart, setShowCart] = useState(false);

  const cartHandler = () => {
    setShowCart(true);
  };

  const closeCartHandler = () => {
    setShowCart(false);
  };

  return (
    <>
      <Navbar onCartClick={cartHandler} />

      {!showCart && <Products />}

      {showCart && <Cart onClose={closeCartHandler} />}
    </>
  );
}

export default App;