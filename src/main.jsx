// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx'; // Import your App component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
