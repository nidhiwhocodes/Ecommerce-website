import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

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

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Ecommerce Store</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Store</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Header */}
      <div className="bg-light text-center py-5">
        <h1 className="display-4 fw-bold">The Generics</h1>
        <p className="lead">Welcome to our Ecommerce Store</p>
      </div>

      {/* Products */}
      <Container className="py-5">
        <h2 className="text-center mb-5">Products</h2>

        <Row className="g-4">
          {productsArr.map((product) => (
            <Col key={product.title} xs={12} sm={6} lg={3}>
              <Card className="h-100 shadow-sm border-0">
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

                  <Card.Text className="text-center fs-5 fw-bold mt-auto">
                    ₹{product.price}
                  </Card.Text>

                  <Button variant="primary" className="w-100">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;