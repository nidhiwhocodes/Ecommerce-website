import { useState } from 'react';
import CartContext from './CartContext';
import useAuth from './useAuth';

const CRUDCRUD_URL =
  'https://crudcrud.com/api/02b00a0ae0c8418fbd2abb58fabeaf72';

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const { user } = useAuth();

  // Add product to cart
  const addToCart = async (product) => {
    if (!user) {
      return;
    }

    const cartItem = {
      ...product,
      quantity: 1,
      userEmail: user.email,
    };

    try {
      const response = await fetch(
        `${CRUDCRUD_URL}/cart${user.email}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cartItem),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to add product to cart');
      }

      const data = await response.json();

      console.log('Added to CrudCrud:', data);

      setCart((prevCart) => [...prevCart, data]);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  // Get cart items from CrudCrud
  const fetchCart = async () => {
    if (!user) {
      return;
    }

    try {
      const response = await fetch(
        `${CRUDCRUD_URL}/cart${user.email}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch cart');
      }

      const data = await response.json();

      console.log('Cart from CrudCrud:', data);

      setCart(data);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  };

  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item._id !== id)
    );
  };

  const contextValue = {
    cart,
    addToCart,
    fetchCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;