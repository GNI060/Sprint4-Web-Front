import './header.scss';
import logo from '../../assets/sabaraLogo2.png';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/" aria-label="Ir para a página inicial">
          <img src={logo} alt="Logo do Hospital Sabará" />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="/projeto" aria-label="Ir para o Projeto">Projeto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/novidades" aria-label="Ir para as Novidades">Novidades</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/transferencias" aria-label="Ir para as Transferências">Transferências</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/centralatendimento" aria-label="Ir para a Central de Atendimento">Central de Atendimento</a>
            </li>
          </ul>

          <div className="d-flex justify-content-center align-items-center gap-2">
            <button className="search-button" aria-label="Buscar">
              <i className="bi bi-search"></i>
            </button>
            <a href="/login" className="mein-sabara-button" aria-label="Entrar na conta">
              <i className="bi bi-person-fill"></i> Entrar
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
