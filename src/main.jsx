import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.scss';
import App from './App.jsx';
// import Practice from './practice.jsx';

createRoot(document.querySelector('#root')).render(
  <StrictMode>
    <App />
    {/* <Practice /> */}
  </StrictMode>,
);