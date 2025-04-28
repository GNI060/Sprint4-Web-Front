import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro'; // Importando a página de cadastro
import Projeto from './pages/Projeto';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main-content">  {/* Envolvendo o conteúdo principal */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} /> 
          <Route path="/Projeto" element={<Projeto />} /> 
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
