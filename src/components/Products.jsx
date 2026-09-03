import { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import useCart from '../context/useCart';

function Products() {
  const [products, setProducts] = useState([]);

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          'https://fakestoreapi.com/products'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container className="py-5">

      <h2 className="text-center mb-5">
        Products
      </h2>

      <Row className="g-4">

        {products.map((product) => (
          <Col
            xs={12}
            sm={6}
            lg={3}
            key={product.id}
          >

            <Card className="h-100 shadow-sm">

              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                className="p-3"
                style={{
                  height: '250px',
                  objectFit: 'contain',
                }}
              />

              <Card.Body className="d-flex flex-column">

                <Card.Title>
                  {product.title}
                </Card.Title>

                <Card.Text>
                  ₹{product.price}
                </Card.Text>

                <Button
                  variant="primary"
                  className="mt-auto"
                  onClick={() =>
                    addToCart({
                      title: product.title,
                      price: product.price,
                      imageUrl: product.image,
                    })
                  }
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