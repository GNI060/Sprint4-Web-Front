import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Footer from './components/Footer';
import Home from './pages/Home';
import Header from './components/Header';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>
);
