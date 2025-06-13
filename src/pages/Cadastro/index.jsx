import React, { useState } from 'react';
import './cadastro.scss';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resposta = await fetch('http://localhost:5000/api/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, senha })
      });

      const dados = await resposta.json();
      if (resposta.ok) {
        setMensagem('Cadastro realizado com sucesso!');
        setNome('');
        setEmail('');
        setSenha('');
        setTimeout(() => {
          window.location.href = '/login';
        }, 1500);
      } else {
        setMensagem(dados.mensagem || 'Erro ao cadastrar.');
      }
    } catch (erro) {
      console.error('Erro ao enviar formulário:', erro);
      setMensagem('Erro ao conectar com o servidor.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <main className="register-container">
        <h2 className="register-heading">Cadastro</h2>
        <form onSubmit={handleSubmit}>
          <fieldset className="form-group">
            <label htmlFor="nome" className="form-label">Nome</label>
            <input
              type="text"
              className="form-control"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </fieldset>

          <fieldset className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </fieldset>

          <fieldset className="form-group">
            <label htmlFor="senha" className="form-label">Senha</label>
            <input
              type="password"
              className="form-control"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </fieldset>

          <button type="submit" className="btn btn-primary">Cadastrar</button>
        </form>

        {mensagem && <p className="mt-3">{mensagem}</p>}

        <p className="mt-3">
          Já tem uma conta? <a href="/login">Entrar</a>
        </p>
      </main>
    </div>
  );
}

export default Cadastro;
