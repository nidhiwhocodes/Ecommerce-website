import { useEffect } from 'react';
import useCart from '../context/useCart';

function Cart() {
  const {
    cart,
    fetchCart,
    removeFromCart,
  } = useCart();

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center">
          Your cart is empty.
        </p>
      ) : (
        cart.map((item) => (
          <div
            key={item._id}
            className="d-flex align-items-center justify-content-between border-bottom py-3"
          >
            <div className="d-flex align-items-center">
              <img
                src={item.imageUrl}
                alt={item.title}
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'contain',
                }}
              />

              <div className="ms-3">
                <h5>{item.title}</h5>
                <p className="mb-1">
                  ₹{item.price}
                </p>
                <p className="mb-0">
                  Quantity: {item.quantity}
                </p>
              </div>
            </div>

            <button
              className="btn btn-danger"
              onClick={() => removeFromCart(item._id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;