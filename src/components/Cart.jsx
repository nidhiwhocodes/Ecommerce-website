import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const cartElements = [
  {
    title: 'Colors',
    price: 100,
    imageUrl:
      'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl:
      'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl:
      'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  },
];

function Cart({ onClose }) {
  const [cartItems, setCartItems] = useState(cartElements);

  const removeItemHandler = (title) => {
    const updatedCart = cartItems.filter(
      (item) => item.title !== title
    );

    setCartItems(updatedCart);
  };

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Shopping Cart</h2>

        <Button variant="secondary" onClick={onClose}>
          Continue Shopping
        </Button>
      </div>

      {cartItems.length === 0 ? (
        <h4 className="text-center">
          Your cart is empty
        </h4>
      ) : (
        <>
          {cartItems.map((item) => (
            <Card className="mb-3 shadow-sm" key={item.title}>
              <Card.Body>
                <Row className="align-items-center">
                  
                  {/* Image */}
                  <Col xs={12} md={3} className="text-center">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      style={{
                        width: '120px',
                        height: '120px',
                        objectFit: 'contain',
                      }}
                    />
                  </Col>

                  {/* Product name */}
                  <Col xs={12} md={3}>
                    <h5>{item.title}</h5>
                  </Col>

                  {/* Price */}
                  <Col xs={12} md={2}>
                    <strong>₹{item.price}</strong>
                  </Col>

                  {/* Quantity */}
                  <Col xs={12} md={2}>
                    Quantity: {item.quantity}
                  </Col>

                  {/* Remove */}
                  <Col xs={12} md={2}>
                    <Button
                      variant="danger"
                      onClick={() =>
                        removeItemHandler(item.title)
                      }
                    >
                      Remove
                    </Button>
                  </Col>

                </Row>
              </Card.Body>
            </Card>
          ))}
        </>
      )}
    </Container>
  );
}

export default Cart;