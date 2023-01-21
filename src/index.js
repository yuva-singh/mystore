import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './Components/Context/ProductContect';
import { FilterContextProvider } from './Components/Context/FilterContext';
import { CartProvider } from './Components/Context/CartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <FilterContextProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </FilterContextProvider>
  </AppProvider>
);
