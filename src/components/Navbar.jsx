import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import useCart from '../context/useCart';

function MyNavbar({ onCartClick }) {
  const { cartItemCount } = useCart();

  return (
    <Navbar bg="dark" variant="dark" className="py-3">
      <Container>
        <Navbar.Brand href="#">
          The Generics
        </Navbar.Brand>

        <Button
          variant="outline-light"
          onClick={onCartClick}
        >
          🛒 Cart ({cartItemCount})
        </Button>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;