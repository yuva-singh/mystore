import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './Components/Context/ProductContect';
import { FilterContextProvider } from './Components/Context/FilterContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <FilterContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FilterContextProvider>
  </AppProvider>
);
