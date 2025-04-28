import React from 'react';
import './centralAtendimento.css';

function CentralAtendimento() {
  return (
    <div className="container central-atendimento mt-5 py-5"> 
  <section className="contato-urgencia text-center mb-5">
    <h2>Central de Atendimento</h2>
    <p className="lead">Entre em contato conosco:</p>
    <p className="contato-info">
      <strong>Telefone:</strong> (11) 1234-5678
    </p>
    <a href="tel:192" className="btn btn-danger mt-3">
      🚑 Ambulância 24H - (11) 12345-6789
    </a>
  </section>

  <section className="agendamento">
    <h3 className="mb-4">Agendamento</h3>
    <form>

      <div className="mb-3">
        <label className="form-label">Nome Completo</label>
        <input type="text" className="form-control" placeholder="Digite seu nome completo" required />
      </div>

      <div className="mb-3">
        <label className="form-label">Telefone</label>
        <input type="tel" className="form-control" placeholder="(00) 00000-0000" required />
      </div>

      <div className="mb-3">
        <label className="form-label">Tipo de Atendimento</label>
        <select className="form-select" required>
          <option value="">Selecione</option>
          <option>Consulta</option>
          <option>Exame</option>
          <option>Urgência</option>
          <option>Outro</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Data Desejada</label>
        <input type="date" className="form-control" required />
      </div>

      <div className="mb-3">
        <label className="form-label">Mensagem (opcional)</label>
        <textarea className="form-control" rows="3" placeholder="Escreva detalhes do atendimento..."></textarea>
      </div>

      <button type="submit" className="btn btn-primary">
        Agendar Atendimento
      </button>
    </form>
  </section>

</div>

  );
}

export default CentralAtendimento;
