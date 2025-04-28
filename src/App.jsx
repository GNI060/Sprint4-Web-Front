import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Projeto from './pages/Projeto';
import Novidades from './pages/Novidades';
import Transferencias from './pages/Transferencias';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main-content"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} /> 
          <Route path="/Projeto" element={<Projeto />} /> 
          <Route path="/Novidades" element={<Novidades />} /> 
          <Route path="/Transferencias" element={<Transferencias />} /> 
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
