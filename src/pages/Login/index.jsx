import React from 'react';
import './login.css';

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', paddingTop: '70px' }}>
      <section className="login-container">
        <h2 className="login-heading text-center mb-4">Login</h2>
        <form>
          <fieldset className="form-group mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Digite seu email" />
          </fieldset>

          <fieldset className="form-group mb-3">
            <label htmlFor="password" className="form-label">Senha</label>
            <input type="password" className="form-control" id="password" placeholder="Digite sua senha" />
          </fieldset>

          <button type="submit" className="btn btn-primary w-100">Entrar</button>
        </form>

        <p className="mt-3 text-center">
          Não tem uma conta? <a href="/cadastro">Cadastre-se</a>
        </p>
      </section>
    </div>
  );
}

export default Login;
