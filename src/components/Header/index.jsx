import React from 'react';
import './style.css';
import logo from '../../assets/sabaraLogo2.png';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" />
        </a>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Sobre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Serviços</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Saúde e Bem-estar</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Unidades</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Central de Atendimento</a>
            </li>
          </ul>

          <div className="d-flex justify-content-center align-items-center gap-2">
            <button className="search-button" aria-label="Buscar">
              <i className="bi bi-search"></i>
            </button>
            <a href="#" className="mein-sabara-button" aria-label="Entrar na conta">
              <i className="bi bi-person-fill"></i> Entrar
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;