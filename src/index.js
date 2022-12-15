import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Home from "./styles/Home"
import UserAdmin from './components/UserAdmin';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <div>
    
    <UserAdmin />
  <BrowserRouter>
    <React.StrictMode>
    

    </React.StrictMode>
    
  </BrowserRouter>
  </div>
);
