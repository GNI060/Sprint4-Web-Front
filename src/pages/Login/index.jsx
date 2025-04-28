import React, { useState } from 'react';
import './login.css';

// LocalStorage
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuarioSalvo = JSON.parse(localStorage.getItem('usuario'));

    if (usuarioSalvo) {
      if (email === usuarioSalvo.email && password === usuarioSalvo.password) {
        alert('Login realizado com sucesso!');
        window.location.href = '/';
      } else {
        alert('Email ou senha inválidos.');
      }
    } else {
      alert('Nenhum usuário cadastrado.');
    }
  };

  // HTML
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', paddingTop: '70px' }}>
      <main className="login-container">
        <h2 className="login-heading text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <fieldset className="form-group mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </fieldset>

          <fieldset className="form-group mb-3">
            <label htmlFor="password" className="form-label">Senha</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </fieldset>

          <button type="submit" className="btn btn-primary w-100">Entrar</button>
        </form>

        <p className="mt-3 text-center">
          Não tem uma conta? <a href="/cadastro">Cadastre-se</a>
        </p>
      </main>
    </div>
  );
}

export default Login;
