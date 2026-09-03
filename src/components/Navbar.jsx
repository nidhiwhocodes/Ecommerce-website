import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function MyNavbar({ onCartClick }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">The Generics</Navbar.Brand>

        <Button
          variant="outline-light"
          onClick={onCartClick}
        >
          🛒 Cart
        </Button>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;