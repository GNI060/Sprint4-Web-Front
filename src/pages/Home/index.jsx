import React from 'react';
import './home.scss';

function Home() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Carrossel */}
      <section aria-label="Carrossel Principal" className="container-fluid p-0">
        <div id="carouselSabara" className="carousel slide mb-5" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselSabara" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselSabara" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselSabara" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./src/assets/banner1.jpg" className="d-block w-100" alt="Entrada do Hospital Sabará" style={{ height: '500px', objectFit: 'cover' }} />
              <div className="carousel-caption d-none d-md-block">
                <h5>Bem-vindo ao Hospital Sabará</h5>
                <p>Excelência em cuidado pediátrico.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="./src/assets/banner2.webp" className="d-block w-100" alt="Equipe médica do Hospital Sabará" style={{ height: '500px', objectFit: 'cover' }} />
              <div className="carousel-caption d-none d-md-block">
                <h5>Tecnologia e Humanização</h5>
                <p>Unimos inovação e carinho no atendimento.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="./src/assets/banner3.jpg" className="d-block w-100" alt="Ambiente acolhedor do Hospital Sabará" style={{ height: '500px', objectFit: 'cover' }} />
              <div className="carousel-caption d-none d-md-block">
                <h5>Ambiente acolhedor</h5>
                <p>Projetado especialmente para crianças e adolescentes.</p>
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselSabara" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselSabara" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Próximo</span>
          </button>
        </div>
      </section>

      {/* Nossos Serviços */}
      <section style={{ backgroundColor: '#00A2E8', padding: '30px' }} className="container-fluid my-5">
        <h2 className="text-center mb-4 text-white">Nossos Serviços</h2>
        <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
          <article className="col-md-3">
            <div className="card h-100 text-center p-3 card-hover" style={{ cursor: 'pointer' }}>
              <div className="mx-auto mb-2 bg-primary text-white rounded p-2" style={{ width: '40px', height: '40px' }}>
                <i className="bi bi-hospital"></i>
              </div>
              <h5 className="card-title">Alta Complexidade</h5>
              <p className="card-text small">Tratamentos especializados e infraestrutura de ponta para casos complexos.</p>
            </div>
          </article>

          <article className="col-md-3">
            <div className="card h-100 text-center p-3 card-hover" style={{ cursor: 'pointer' }}>
              <div className="mx-auto mb-2 bg-primary text-white rounded p-2" style={{ width: '40px', height: '40px' }}>
                <i className="bi bi-clipboard2-pulse"></i>
              </div>
              <h5 className="card-title">Ambulatório de Especialidades</h5>
              <p className="card-text small">Atendimento em diversas áreas médicas com profissionais especializados.</p>
            </div>
          </article>

          <article className="col-md-3">
            <div className="card h-100 text-center p-3 card-hover" style={{ cursor: 'pointer' }}>
              <div className="mx-auto mb-2 bg-primary text-white rounded p-2" style={{ width: '40px', height: '40px' }}>
                <i className="bi bi-search"></i>
              </div>
              <h5 className="card-title">Apoio Diagnóstico</h5>
              <p className="card-text small">Exames laboratoriais e de imagem com alta precisão e agilidade.</p>
            </div>
          </article>

          <article className="col-md-3">
            <div className="card h-100 text-center p-3 card-hover" style={{ cursor: 'pointer' }}>
              <div className="mx-auto mb-2 bg-primary text-white rounded p-2" style={{ width: '40px', height: '40px' }}>
                <i className="bi bi-scissors"></i>
              </div>
              <h5 className="card-title">Centro Cirúrgico</h5>
              <p className="card-text small">Salas cirúrgicas modernas com tecnologia de última geração.</p>
            </div>
          </article>

          <article className="col-md-3">
            <div className="card h-100 text-center p-3 card-hover" style={{ cursor: 'pointer' }}>
              <div className="mx-auto mb-2 bg-primary text-white rounded p-2" style={{ width: '40px', height: '40px' }}>
                <i className="bi bi-clock-history"></i>
              </div>
              <h5 className="card-title">Hospital Dia</h5>
              <p className="card-text small">Procedimentos rápidos com alta segurança e retorno no mesmo dia.</p>
            </div>
          </article>

          <article className="col-md-3">
            <div className="card h-100 text-center p-3 card-hover" style={{ cursor: 'pointer' }}>
              <div className="mx-auto mb-2 bg-primary text-white rounded p-2" style={{ width: '40px', height: '40px' }}>
                <i className="bi bi-house-heart"></i>
              </div>
              <h5 className="card-title">Internação</h5>
              <p className="card-text small">Ambientes confortáveis e seguros para recuperação do paciente.</p>
            </div>
          </article>

          <article className="col-md-3">
            <div className="card h-100 text-center p-3 card-hover" style={{ cursor: 'pointer' }}>
              <div className="mx-auto mb-2 bg-primary text-white rounded p-2" style={{ width: '40px', height: '40px' }}>
                <i className="bi bi-exclamation-triangle"></i>
              </div>
              <h5 className="card-title">Pronto Socorro</h5>
              <p className="card-text small">Atendimento emergencial 24h para situações críticas.</p>
            </div>
          </article>

          <article className="col-md-3">
            <div className="card h-100 text-center p-3 card-hover" style={{ cursor: 'pointer' }}>
              <div className="mx-auto mb-2 bg-primary text-white rounded p-2" style={{ width: '40px', height: '40px' }}>
                <i className="bi bi-heart-pulse"></i>
              </div>
              <h5 className="card-title">Terapia Intensiva</h5>
              <p className="card-text small">UTIs equipadas para garantir cuidado contínuo e especializado.</p>
            </div>
          </article>
        </div>
      </section>

      {/* Últimas Novidades */}
      <div className="container my-5 novidades-section">
        <h2 className="mb-4">Últimas Novidades</h2>

        <a href="/Novidades" className="novidade-link">
          <div className="novidade-card">
            <img src="./src/assets/projetoEdge.jpg" alt="Oxímetro Infantil Sabará" className="novidade-img" />
            <div className="novidade-texto">
              <h4>Monitor Infantil Sabará</h4>
              <p>Dispositivo de medição com tecnologia divertida e amigável para crianças.</p>
            </div>
          </div>
        </a>
      </div>

      {/* Unidade */}
      <section className="container my-5">
        <h2>Unidade</h2>
        <p className="mini-explicacao">Conheça a unidade do Hospital Sabará.</p>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <article className="card h-100">
              <img src="./src/assets/sabara-faixada.jpg" className="card-img-top" alt="Fachada do Hospital Sabará" />
              <div className="card-body">
                <h5 className="card-title">Sabará Hospital Infantil</h5>
                <p className="card-text"><i className="bi bi-geo-alt"></i> Av. Angélica, 1987 - Consolação, São Paulo - SP, 01227-200</p>
                <p className="card-text"><i className="bi bi-telephone"></i> +55 (11) 3155-2800</p>
                <a href="#" className="btn btn-primary">Conheça a unidade <i className="bi bi-arrow-right"></i></a>
              </div>
            </article>
          </div>

          <div className="col">
            <div className="map-container h-100">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5169674148906!2d-46.66183478840023!3d-23.549869578719285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5831b56f76c7%3A0xc1c434e6ae0e8fa8!2sSabar%C3%A1%20Hospital%20Infantil!5e0!3m2!1spt-BR!2sbr!4v1745594594254!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{ border: '0' }} allowFullScreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
