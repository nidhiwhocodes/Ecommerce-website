import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import useCart from '../context/useCart';

function Cart({ onClose }) {
  const { cartItems, removeFromCart } = useCart();

  return (
    <Container className="py-5">
      
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Shopping Cart</h2>

        <Button
          variant="secondary"
          onClick={onClose}
        >
          Continue Shopping
        </Button>
      </div>

      {cartItems.length === 0 ? (
        <h4 className="text-center mt-5">
          Your cart is empty
        </h4>
      ) : (
        <>
          {cartItems.map((item) => (
            <Card
              className="mb-3 shadow-sm"
              key={item.title}
            >
              <Card.Body>
                <Row className="align-items-center">

                  {/* Product Image */}
                  <Col
                    xs={12}
                    md={3}
                    className="text-center mb-3 mb-md-0"
                  >
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

                  {/* Product Name */}
                  <Col xs={12} md={3} className="text-center">
                    <h5>{item.title}</h5>
                  </Col>

                  {/* Price */}
                  <Col xs={12} md={2} className="text-center">
                    <strong>₹{item.price}</strong>
                  </Col>

                  {/* Quantity */}
                  <Col xs={12} md={2} className="text-center">
                    Quantity: {item.quantity}
                  </Col>

                  {/* Remove Button */}
                  <Col xs={12} md={2} className="text-center mt-3 mt-md-0">
                    <Button
                      variant="danger"
                      onClick={() =>
                        removeFromCart(item.title)
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