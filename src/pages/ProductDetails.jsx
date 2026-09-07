import { useParams, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const productDetails = [
  {
    id: 1,
    title: 'Colors',
    price: 100,
    description:
      'Beautiful and colorful product with a modern design. Perfect for everyday use.',
    images: [
      'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    ],
    reviews: [
      {
        name: 'Rahul',
        rating: 5,
        comment: 'Excellent product. Really happy with the quality.',
      },
      {
        name: 'Priya',
        rating: 4,
        comment: 'Good product and looks exactly like the pictures.',
      },
      {
        name: 'Amit',
        rating: 5,
        comment: 'Very good quality. Worth the price.',
      },
    ],
  },

  {
    id: 2,
    title: 'Black and white Colors',
    price: 50,
    description:
      'Simple black and white design with a clean and attractive appearance.',
    images: [
      'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    ],
    reviews: [
      {
        name: 'Sneha',
        rating: 5,
        comment: 'Amazing product and very nice design.',
      },
      {
        name: 'Rohit',
        rating: 4,
        comment: 'Good product for the price.',
      },
    ],
  },

  {
    id: 3,
    title: 'Yellow and Black Colors',
    price: 70,
    description:
      'Stylish yellow and black product designed for a modern look.',
    images: [
      'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    ],
    reviews: [
      {
        name: 'Neha',
        rating: 5,
        comment: 'Loved the design and quality.',
      },
      {
        name: 'Vikas',
        rating: 4,
        comment: 'Nice product. Delivery was also good.',
      },
    ],
  },

  {
    id: 4,
    title: 'Blue Color',
    price: 100,
    description:
      'Premium blue-colored product with a simple and elegant design.',
    images: [
      'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    ],
    reviews: [
      {
        name: 'Karan',
        rating: 5,
        comment: 'Really good product. I recommend it.',
      },
      {
        name: 'Pooja',
        rating: 5,
        comment: 'Beautiful product and excellent quality.',
      },
    ],
  },
];

function ProductDetails() {
  const { productId } = useParams();

  const product = productDetails.find(
    (item) => item.id === Number(productId)
  );

  if (!product) {
    return (
      <Container className="py-5 text-center">
        <h2>Product not found</h2>

        <Link to="/store">
          <Button variant="primary" className="mt-3">
            Back to Store
          </Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container className="py-5">

      {/* Product Information */}

      <Row className="g-4">

        {/* Product Images */}

        <Col md={7}>

          <Row className="g-3">

            {product.images.map((image, index) => (
              <Col xs={6} key={index}>

                <Card className="border-0 shadow-sm">
                  <Card.Img
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    style={{
                      height: '350px',
                      objectFit: 'contain',
                      padding: '20px',
                    }}
                  />
                </Card>

              </Col>
            ))}

          </Row>

        </Col>

        {/* Product Details */}

        <Col md={5}>

          <h2>{product.title}</h2>

          <div className="mb-3">
            <Badge bg="success">
              4.5 ★
            </Badge>

            <span className="ms-2 text-muted">
              250 Ratings & Reviews
            </span>
          </div>

          <h3 className="mb-3">
            ₹{product.price}
          </h3>

          <p className="text-muted">
            {product.description}
          </p>

          <hr />

          <h5>Delivery Details</h5>

          <p>
            🚚 Free delivery available
          </p>

          <p>
            📦 Delivery within 5-7 business days
          </p>

          <div className="d-flex gap-3 mt-4">

            <Button
              variant="warning"
              size="lg"
            >
              Add to Cart
            </Button>

            <Button
              variant="primary"
              size="lg"
            >
              Buy Now
            </Button>

          </div>

        </Col>

      </Row>

      {/* Reviews */}

      <section className="mt-5">

        <h2 className="mb-4">
          Reviews
        </h2>

        {product.reviews.map((review, index) => (
          <Card
            className="mb-3 shadow-sm"
            key={index}
          >

            <Card.Body>

              <div className="d-flex justify-content-between">

                <h5>
                  {review.name}
                </h5>

                <Badge bg="success">
                  {review.rating} ★
                </Badge>

              </div>

              <p className="mb-0 mt-2">
                {review.comment}
              </p>

            </Card.Body>

          </Card>
        ))}

      </section>

      <div className="text-center mt-4">

        <Link to="/store">
          <Button variant="secondary">
            ← Back to Store
          </Button>
        </Link>

      </div>

    </Container>
  );
}

export default ProductDetails;