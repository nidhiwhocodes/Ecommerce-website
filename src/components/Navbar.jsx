import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import { NavLink } from 'react-router-dom';

import useCart from '../context/useCart';

function MyNavbar({ onCartClick }) {
  const { cartItemCount } = useCart();

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
    >
      <Container>

        <Navbar.Brand
          as={NavLink}
          to="/"
        >
          The Generics
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">

          <Nav className="me-auto">

            <Nav.Link
              as={NavLink}
              to="/"
              end
            >
              HOME
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/store"
            >
              STORE
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/about"
            >
              ABOUT
            </Nav.Link>

          </Nav>

          <Button
            variant="outline-light"
            onClick={onCartClick}
          >
            🛒 Cart ({cartItemCount})
          </Button>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default MyNavbar;