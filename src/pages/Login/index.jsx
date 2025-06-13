import React, { useState } from 'react';
import './login.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resposta = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha: password }) 
      });

      const dados = await resposta.json();

      if (resposta.ok) {
        setMensagem(dados.mensagem);
        alert('Login realizado com sucesso!');
        window.location.href = '/';
      } else {
        setMensagem(dados.mensagem);
        alert('Email ou senha inválidos.');
      }
    } catch (erro) {
      console.error('Erro na requisição:', erro);
      alert('Erro ao conectar com a API.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', paddingTop: '70px' }}>
      <main className="login-container">
        <h2 className="login-heading text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <fieldset className="form-group mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </fieldset>

          <fieldset className="form-group mb-3">
            <label htmlFor="password" className="form-label">Senha</label>
            <input type="password" className="form-control" id="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </fieldset>

          <button type="submit" className="btn btn-primary w-100">Entrar</button>
        </form>

        <p className="mt-3 text-center">
          Não tem uma conta? <a href="/cadastro">Cadastre-se</a>
        </p>
        {mensagem && <p className="text-center mt-2 text-danger">{mensagem}</p>}
      </main>
    </div>
  );
}

export default Login;
