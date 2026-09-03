
import { useEffect, useRef, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import useCart from '../context/useCart';

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRetrying, setIsRetrying] = useState(false);
  const [error, setError] = useState('');

  const retryTimeoutRef = useRef(null);
  const cancelRetryRef = useRef(false);

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
        setError('');
        setIsRetrying(false);
        setIsLoading(false);

      } catch (error) {
        console.log(error.message);

        // API failed
        setIsLoading(false);
        setIsRetrying(true);
        setError('Something went wrong ....Retrying');

        // Retry after 5 seconds
        retryTimeoutRef.current = setTimeout(() => {
          if (!cancelRetryRef.current) {
            fetchProducts();
          }
        }, 5000);
      }
    };

    fetchProducts();

    // Cleanup
    return () => {
      cancelRetryRef.current = true;

      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current);
      }
    };
  }, []);

  const cancelRetry = () => {
    cancelRetryRef.current = true;

    if (retryTimeoutRef.current) {
      clearTimeout(retryTimeoutRef.current);
    }

    setIsRetrying(false);
    setError('Retry cancelled');
  };

  const retryNow = () => {
    cancelRetryRef.current = false;
    setIsRetrying(true);
    setError('Something went wrong ....Retrying');

    // Reuse the same API logic
    const fetchAgain = async () => {
      try {
        const response = await fetch(
          'https://fakestoreapi.com/products'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();

        setProducts(data);
        setError('');
        setIsRetrying(false);
        setIsLoading(false);

      } catch (error) {
        console.log(error.message);

        setError('Something went wrong ....Retrying');

        retryTimeoutRef.current = setTimeout(() => {
          if (!cancelRetryRef.current) {
            fetchAgain();
          }
        }, 5000);
      }
    };

    fetchAgain();
  };

  return (
    <Container className="py-5">

      <h2 className="text-center mb-5">
        Products
      </h2>

      {/* Initial loading */}
      {isLoading && (
        <div className="text-center py-5">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">
              Loading...
            </span>
          </Spinner>

          <p className="mt-3">
            Loading products...
          </p>
        </div>
      )}

      {/* API failed - retrying */}
      {isRetrying && (
        <div className="text-center py-5">

          <p className="text-danger">
            {error}
          </p>

          <p>
            Trying again in 5 seconds...
          </p>

          <Button
            variant="danger"
            onClick={cancelRetry}
            className="me-2"
          >
            Cancel
          </Button>

          <Button
            variant="primary"
            onClick={retryNow}
          >
            Retry Now
          </Button>

        </div>
      )}

      {/* Retry cancelled */}
      {!isLoading &&
        !isRetrying &&
        error === 'Retry cancelled' && (
          <div className="text-center py-5">

            <p className="text-danger">
              {error}
            </p>

            <Button
              variant="primary"
              onClick={retryNow}
            >
              Retry
            </Button>

          </div>
        )}

      {/* Products */}
      {!isLoading &&
        !isRetrying &&
        error === '' && (
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
        )}

    </Container>
  );
}

export default Products;

