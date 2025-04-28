import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer-dark">
        <div className="container">
      
          <section className="footer-section">
            <h2 className="footer-title">FALE CONOSCO:</h2>
            <address className="contact-links">
              <a href="tel:1135491000" aria-label="Ligar para (11) 1234-56789"><i className="bi bi-telephone-fill"></i> <span>(11) 1234-56789</span></a>
              <a href="#" aria-label="SAC"><i className="bi bi-question-circle-fill"></i> <span>SAC</span></a>
              <a href="https://wa.me/5511999999999" target="_blank" aria-label="Entrar em contato pelo WhatsApp"><i className="bi bi-whatsapp"></i> <span>Whatsapp</span></a>
              <a href="#" aria-label="Canal confidencial"><i className="bi bi-shield-lock-fill"></i> <span>Canal confidencial</span></a>
            </address>
          </section>
      
          <section className="footer-section">
            <h2 className="footer-title">NOS ACOMPANHE NAS REDES SOCIAIS:</h2>
            <nav className="social-links" aria-label="Redes sociais">
              <a href="#" target="_blank" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
              <a href="#" target="_blank" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
              <a href="#" target="_blank" aria-label="Twitter"><i className="bi bi-twitter"></i></a>
              <a href="#" target="_blank" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" target="_blank" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" target="_blank" aria-label="Spotify"><i className="bi bi-spotify"></i></a>
            </nav>
          </section>
      
          <section className="footer-section">
            <h2 className="footer-title">HORÁRIO CENTRAL DE AGENDAMENTO (CALL CENTER):</h2>
            <div className="schedule-info">
              <p><strong>Telefone:</strong> Segunda à sexta-feira, das 7h às 21h e aos sábados, das 8h às 18h (Exceto feriados).</p>
              <p><strong>Whatsapp:</strong> Segunda à sexta-feira, das 8h às 17h (Exceto feriados).</p>
            </div>
          </section>
      
          <div className="row mt-3">
            <div className="col-md-6 copyright">
              <small>Copyright © 2024-2025 Hospital Sabará. Todos os direitos reservados. | Desenvolvido por Kauã, Felipe e Gustavo</small>
            </div>
            <nav className="col-md-6 footer-links text-end" aria-label="Links institucionais">
              <a href="#">Cookies</a>
              <a href="#">Políticas, Privacidade e Proteção de Dados</a>
            </nav>
          </div>
      
        </div>
      </footer>      
  );
}

export default Footer;
