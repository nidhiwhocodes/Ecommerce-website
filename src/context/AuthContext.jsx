import { createContext } from 'react';

const AuthContext = createContext({
  user: null,
  token: null,
  isLoggedIn: false,
});

export default AuthContext;