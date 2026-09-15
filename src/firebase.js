import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyASxD8qJ1vGAmY9xDUvBvQmvbgMVissAGk',
  authDomain: 'ecommerce-website-184fc.firebaseapp.com',
  projectId: 'ecommerce-website-184fc',
  storageBucket: 'ecommerce-website-184fc.appspot.com',
  messagingSenderId: '1051712345678',
  appId: '1:1051712345678:web:abcdef1234567890',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);