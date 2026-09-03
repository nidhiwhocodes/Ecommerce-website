import { useState } from 'react';

import MyNavbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <MyNavbar
        onCartClick={() => setShowCart(true)}
      />

      {!showCart && <Products />}

      {showCart && (
        <Cart
          onClose={() => setShowCart(false)}
        />
      )}
    </>
  );
}

export default App;