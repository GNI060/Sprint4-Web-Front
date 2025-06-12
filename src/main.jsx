import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss'; 
import App from './App.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);