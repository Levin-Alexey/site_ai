import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const params = new URLSearchParams(window.location.search);
const fontTheme = params.get('font');

if (fontTheme === 'bold' || fontTheme === 'safe' || fontTheme === 'hybrid') {
  document.documentElement.setAttribute('data-font-theme', fontTheme);
} else {
  document.documentElement.setAttribute('data-font-theme', 'hybrid');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
