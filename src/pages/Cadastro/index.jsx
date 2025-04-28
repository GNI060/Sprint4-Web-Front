import React, { useState } from 'react';
import './style.css'; 

function Cadastro() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem');
    } else {
      console.log('Dados do cadastro:', formData);
    }
  };

  return (
    <section className="register-container">
      <h1 className="register-heading">Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <fieldset className="form-group">
          <label htmlFor="name" className="form-label">Nome Completo</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Digite seu nome completo"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Digite seu email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="password" className="form-label">Senha</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Crie sua senha"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="confirmPassword" className="form-label">Confirmar Senha</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirme sua senha"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </fieldset>

        <button type="submit" className="btn btn-primary">Cadastrar</button>
      </form>

      <p className="mt-3">
        Já tem uma conta? <a href="/Login">Faça login</a>
      </p>
    </section>
  );
}

export default Cadastro;
