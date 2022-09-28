import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
// import { StyledEngineProvider } from '@mui/material';
import ScrollUp from 'components/Scrollup/Scrollup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ScrollUp />
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
