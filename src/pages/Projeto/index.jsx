import React from 'react';
import './projeto.css';

function Projeto () {
  return (
    <div className="container projeto mt-5 my-5">
      <div className="row align-items-center">
        {/* Texto */}
        <div className="col-md-6 col-12">
          <h2 className="text-primary mb-4">Cuidar dos pequenos é cultivar esperança</h2>
          <p>
          O projeto "Challenge Sabará" tem como objetivo principal a análise e otimização dos processos hospitalares do Hospital Sabará, com foco em soluções inovadoras para melhorar a comunicação, aumentar a agilidade e garantir a segurança no atendimento aos pacientes. O grupo é composto por Felipe Santos Marceli, Kauã Rodrigues de Souza e Gustavo Naoto Iida, e busca atender a uma das principais demandas do hospital: automatizar o processo de transferência de dados dos pacientes entre os setores ou unidades de forma rápida, segura e eficiente.
          </p>
        </div>

        {/* Imagem */}
        <div className="col-md-6 col-12 text-center">
          <div className="imagem-container">
            <img src="./src/assets/sabara-projeto.webp" alt="Caderno com mensagem" className="img-fluid rounded"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projeto;
