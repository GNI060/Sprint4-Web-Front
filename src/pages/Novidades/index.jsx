import React from 'react';
import './novidades.css';

function Novidades() {
  return (
    <main className="container dispositivo-page mt-5 mb-5">
      <h1 className="text-primary mb-4 text-center">
        Monitor Infantil: Saúde e Diversão em Um Só Lugar
      </h1>

      <section className="row align-items-center mb-5">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <p>
            Pensando no bem-estar das crianças durante a medição da saturação sanguínea e batimentos cardíacos,
            desenvolvemos um dispositivo inovador que une tecnologia médica e diversão.
            O aparelho não apenas realiza medições precisas, como também torna o processo mais leve e acolhedor para os pequenos pacientes.
          </p>
          <p>
            Equipado com sensores de alta precisão, o dispositivo oferece leituras rápidas e confiáveis, ajudando médicos e familiares
            a monitorarem a saúde de forma contínua e segura.
          </p>
        </div>

        <div className="col-12 col-md-6 text-center">
          <img src="./src/assets/projetoEdge.jpg" alt="Imagem do dispositivo de medição infantil" className="img-fluid rounded shadow" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </section>

      <section className="row align-items-center mb-5">
        <div className="col-12 col-md-6 text-center order-md-2 mb-4 mb-md-0">
          <video src="./src/assets/dispositivo-piano.mp4" controls className="img-fluid rounded shadow" style={{ maxWidth: '100%', height: 'auto' }}>
            Seu navegador não suporta vídeo HTML5.
          </video>
        </div>

        <div className="col-12 col-md-6 order-md-1">
          <h2 className="text-primary mb-3 text-center text-md-start">
            Piano Integrado para Distração
          </h2>
          <p className="text-center text-md-start">
            Sabemos que o ambiente hospitalar pode ser assustador para as crianças.
            Por isso, o dispositivo vem com um mini piano interativo que entretém enquanto a medição é realizada,
            ajudando a reduzir o estresse e a ansiedade durante o procedimento.
          </p>
        </div>
      </section>

      <section className="row align-items-center mb-5">
  <div className="col-12 col-md-6">
    <h2 className="text-primary mb-3 text-center text-md-start">
      Dashboard Inclusivo para Crianças com Deficiência Auditiva
    </h2>
    <p className="text-center text-md-start">
      Nosso compromisso com a inclusão nos levou a criar um painel visual acessível para crianças com deficiência auditiva.
      Através de gráficos coloridos e alertas visuais, o dashboard permite que essas crianças compreendam facilmente seu estado de saúde,
      promovendo mais autonomia e segurança.
    </p>
  </div>

  <div className="col-12 col-md-6">
    <section id="carouselExample" className="carousel slide" aria-label="Carousel">
      <div className="carousel-inner">
        <article className="carousel-item active">
          <img src="./src/assets/dashboard1.jpg" className="d-block w-100" alt="Imagem 1" />
        </article>
        <article className="carousel-item">
          <img src="./src/assets/dashboard2.jpg" className="d-block w-100" alt="Imagem 2" />
        </article>
        <article className="carousel-item">
          <img src="./src/assets/dashboard3.jpg" className="d-block w-100" alt="Imagem 3" />
        </article>
        <article className="carousel-item">
          <img src="./src/assets/dashboard4.jpg" className="d-block w-100" alt="Imagem 4" />
        </article>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" aria-label="Previous slide">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" aria-label="Next slide">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </section>
  </div>
</section>
    </main>
  );
}

export default Novidades;
