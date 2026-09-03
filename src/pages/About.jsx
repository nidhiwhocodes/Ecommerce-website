import Container from 'react-bootstrap/Container';

function About() {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">About Us</h1>

      <div className="text-center">
        <img
          src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
          alt="About us"
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
          className="mb-4"
        />

        <p className="lead">
          Welcome to The Generics!
        </p>

        <p>
          We are an ecommerce store where you can
          discover and explore different products.
          Our goal is to provide a simple and enjoyable
          shopping experience.
        </p>

        <p>
          This project is built using React and
          React-Bootstrap. React Router is used to
          navigate between different pages without
          reloading the application.
        </p>
      </div>
    </Container>
  );
}

export default About;