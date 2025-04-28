import React from 'react';
import './transferencias.css';

function Transferencias() {
  return (
    <div className="container cadastro-paciente mt-5 py-5">
      <div className="formulario-container shadow p-5 bg-white rounded">

        <h2 className="text-center mb-4">Formulário de Transferência</h2>

        <form>
          {/* Nome */}
          <div className="mb-3">
            <label className="form-label">Nome Completo</label>
            <input type="text" className="form-control" placeholder="Digite seu nome completo" required />
          </div>

          {/* Instituição */}
          <div className="mb-3">
            <label className="form-label">Instituição de Origem</label>
            <input type="text" className="form-control" placeholder="Digite a instituição de origem" required />
          </div>

          {/* Médico */}
          <div className="mb-3">
            <label className="form-label">Médico</label>
            <input type="text" className="form-control" placeholder="Médico responsável" required />
          </div>

          {/* Gênero */}
          <div className="mb-3">
            <label className="form-label">Gênero</label>
            <div className="d-flex gap-3">
              <div><input type="radio" name="genero" /> Masculino</div>
              <div><input type="radio" name="genero" /> Feminino</div>
              <div><input type="radio" name="genero" /> Outro</div>
            </div>
          </div>

          {/* Data de Nascimento */}
          <div className="mb-3">
            <label className="form-label">Data de Nascimento</label>
            <input type="date" className="form-control" required />
          </div>

          {/* Upload prontuário */}
          <div className="mb-3">
            <label className="form-label">Prontuário Médico:</label>
            <input type="file" className="form-control" />
          </div>

          {/* Termos */}
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="termos" required />
            <label className="form-check-label" htmlFor="termos">Aceito os Termos e Condições</label>
          </div>

          {/* Mensagem */}
          <div className="mb-3">
            <label className="form-label">Mensagem</label>
            <textarea className="form-control" rows="3" placeholder="Escreva uma mensagem (opcional)"></textarea>
          </div>

          {/* Botão */}
          <button type="submit" className="btn btn-primary w-100">Cadastrar</button>
        </form>

      </div>
    </div>
  );
}

export default Transferencias;
