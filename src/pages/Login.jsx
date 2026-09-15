import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { auth } from '../firebase';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const loginHandler = async (event) => {
    event.preventDefault();

    setError('');
    setLoading(true);

    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // AuthProvider will automatically:
      // 1. Get the Firebase ID token
      // 2. Store it in Context
      // 3. Store it in localStorage

      navigate('/store');

    } catch (error) {
      console.log(error);

      setError(
        'Login failed. Please check your email and password.'
      );
    }

    setLoading(false);
  };

  return (
    <Container className="py-5">

      <div className="d-flex justify-content-center">

        <Card
          className="shadow p-4"
          style={{
            width: '400px',
          }}
        >

          <h2 className="text-center mb-4">
            Login
          </h2>

          {error && (
            <Alert variant="danger">
              {error}
            </Alert>
          )}

          <Form onSubmit={loginHandler}>

            {/* Email */}

            <Form.Group className="mb-3">
              <Form.Label>
                Email
              </Form.Label>

              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                required
              />
            </Form.Group>

            {/* Password */}

            <Form.Group className="mb-3">
              <Form.Label>
                Password
              </Form.Label>

              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                required
              />
            </Form.Group>

            <Button
              type="submit"
              variant="primary"
              className="w-100"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </Button>

          </Form>

        </Card>

      </div>

    </Container>
  );
}

export default Login;