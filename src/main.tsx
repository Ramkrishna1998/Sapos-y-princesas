import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './resources/css/custom.scss';
import App from './App';
import AllProviders from './providers';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AllProviders>
        <App />
      </AllProviders>
    </BrowserRouter>
  </React.StrictMode>
);
