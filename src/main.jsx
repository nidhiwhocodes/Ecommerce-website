import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import CartProvider from './context/CartProvider';
import AuthProvider from './context/AuthProvider';

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>

    <AuthProvider>

      <CartProvider>

        <App />

      </CartProvider>

    </AuthProvider>

  </React.StrictMode>
);