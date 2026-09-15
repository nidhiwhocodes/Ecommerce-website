import { useEffect, useState } from 'react';
import { onIdTokenChanged } from 'firebase/auth';

import AuthContext from './AuthContext';
import { auth } from '../firebase';

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(
    localStorage.getItem('token')
  );

  useEffect(() => {
    const unsubscribe = onIdTokenChanged(
      auth,
      async (currentUser) => {

        if (currentUser) {
          const idToken = await currentUser.getIdToken();

          setUser(currentUser);
          setToken(idToken);

          // Store token for future API requests
          localStorage.setItem('token', idToken);
        } else {
          setUser(null);
          setToken(null);

          localStorage.removeItem('token');
        }
      }
    );

    return unsubscribe;
  }, []);

  const contextValue = {
    user,
    token,
    isLoggedIn: !!user,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;