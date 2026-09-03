import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import useCart from '../context/useCart';

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl:
      'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl:
      'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl:
      'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl:
      'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

function Products() {
  const { addToCart } = useCart();

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">Products</h2>

      <Row className="g-4">
        {productsArr.map((product) => (
          <Col xs={12} sm={6} lg={3} key={product.title}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={product.imageUrl}
                alt={product.title}
                className="p-3"
                style={{
                  height: '250px',
                  objectFit: 'contain',
                }}
              />

              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center">
                  {product.title}
                </Card.Title>

                <Card.Text className="text-center fs-5">
                  ₹{product.price}
                </Card.Text>

                <Button
                  variant="primary"
                  className="mt-auto"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;