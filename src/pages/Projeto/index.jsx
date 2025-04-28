import React from 'react';
import './projeto.css';

function Projeto() {
  return (
    <div className="container projeto py-5 mt-5">
      <div className="row align-items-center">
        
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <h2 className="text-primary mb-4 text-center text-md-start">
            Cuidar dos pequenos é cultivar esperança
          </h2>
          <p className="text-center text-md-start">
            O projeto "Challenge Sabará" tem como objetivo principal a análise e otimização dos processos hospitalares do Hospital Sabará, com foco em soluções inovadoras para melhorar a comunicação, aumentar a agilidade e garantir a segurança no atendimento aos pacientes. O grupo é composto por Felipe Santos Marceli, Kauã Rodrigues de Souza e Gustavo Naoto Iida, e busca atender a uma das principais demandas do hospital: automatizar o processo de transferência de dados dos pacientes entre os setores ou unidades de forma rápida, segura e eficiente.
          </p>
        </div>

        <div className="col-12 col-md-6 text-center">
          <div className="imagem-container">
            <img 
              src="./src/assets/sabara-projeto.webp" 
              alt="Caderno com mensagem" 
              className="img-fluid rounded" 
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projeto;
