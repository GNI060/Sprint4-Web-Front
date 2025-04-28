import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer class="footer-dark">
        <div class="container">
      
          <section class="footer-section">
            <h2 class="footer-title">FALE CONOSCO:</h2>
            <address class="contact-links">
              <a href="tel:1135491000"><i class="bi bi-telephone-fill"></i> <span>(11) 1234-56789</span></a>
              <a href="#"><i class="bi bi-question-circle-fill"></i> <span>SAC</span></a>
              <a href="https://wa.me/SEUNUMEROWHATSAPP" target="_blank"><i class="bi bi-whatsapp"></i> <span>Whatsapp</span></a>
              <a href="#"><i class="bi bi-shield-lock-fill"></i> <span>Canal confidencial</span></a>
            </address>
          </section>
      
          <section class="footer-section">
            <h2 class="footer-title">NOS ACOMPANHE NAS REDES SOCIAIS:</h2>
            <nav class="social-links" aria-label="Redes sociais">
              <a href="#" target="_blank"><i class="bi bi-youtube"></i></a>
              <a href="#" target="_blank"><i class="bi bi-linkedin"></i></a>
              <a href="#" target="_blank"><i class="bi bi-twitter"></i></a>
              <a href="#" target="_blank"><i class="bi bi-facebook"></i></a>
              <a href="#" target="_blank"><i class="bi bi-instagram"></i></a>
              <a href="#" target="_blank"><i class="bi bi-spotify"></i></a>
            </nav>
          </section>
      
          <section class="footer-section">
            <h2 class="footer-title">HORÁRIO CENTRAL DE AGENDAMENTO (CALL CENTER):</h2>
            <div class="schedule-info">
              <p><strong>Telefone:</strong> Segunda à sexta-feira, das 7h às 21h e aos sábados, das 8h às 18h (Exceto feriados).</p>
              <p><strong>Whatsapp:</strong> Segunda à sexta-feira, das 8h às 17h (Exceto feriados).</p>
            </div>
          </section>
      
          <div class="row mt-3">
            <div class="col-md-6 copyright">
              <small>Copyright © 2024-2025 Hospital Sabará. Todos os direitos reservados. | Desenvolvido por Kauã, Felipe e Gustavo</small>
            </div>
            <nav class="col-md-6 footer-links text-end" aria-label="Links institucionais">
              <a href="#">Cookies</a>
              <a href="#">Políticas, Privacidade e Proteção de Dados</a>
            </nav>
          </div>
      
        </div>
      </footer>      
  )
}

export default Footer;
