# 🏥 Hospital Sabará - Site Institucional

Este projeto apresenta o código-fonte do site institucional do **Hospital Sabará**, desenvolvido com ênfase em responsividade, reutilização de componentes, boas práticas em React e integração com API local. Foi elaborado como um exercício prático para aplicar e consolidar conhecimentos em **React com Vite**, **Bootstrap** e uso de **SCSS** para estilização.

---

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Bootstrap 5](https://getbootstrap.com/)
- [SCSS (Sass)](https://sass-lang.com/)
- JavaScript (ES6+)
- HTML5 + CSS3
- Git & GitHub
- API REST local 

---

## Objetivos do Projeto

### **Desenvolvimento Back-End e Integração**

Nesta sprint, o foco incluiu a integração do front-end com uma **API local**, permitindo operações de login, cadastro e manipulação de dados do hospital. A comunicação com a API foi feita utilizando fetch/Axios para consumo RESTful.

#### Exigências Técnicas:

- **Integração com API local**: Consumir endpoints para login, cadastro e outras funcionalidades.
- **Tratamento de requisições e respostas** com gerenciamento de estados e feedbacks para o usuário.
- **Uso de SCSS para estilização**: Aplicar pré-processador SCSS para organizar estilos, usando variáveis, mixins e aninhamento para manter o CSS modular e reutilizável.
- Manter a estrutura em **componentes React** reutilizáveis e modularizados.
- Versionamento contínuo no GitHub com commits claros.

---

### **Desenvolvimento Front-End**

- **HTML Semântico** para acessibilidade e estrutura.
- **Estilização com Bootstrap e SCSS** para design consistente, responsivo e manutenção facilitada.
- **Responsividade** completa para desktop, tablet e mobile.
- Uso de **localStorage** para armazenar dados locais do usuário, como tokens de autenticação.
- Aplicação fiel ao protótipo e aos requisitos da sprint.
- Documentação atualizada e clara.

---

## Instalação e Execução Local

Siga os passos abaixo para rodar o projeto localmente:

```bash
# 1. Clone o repositório
git clone https://github.com/GNI060/Sprint4-Web-Front

# 2. Acesse a pasta do projeto
cd sprint4

# 3. Instale as dependências
npm install

# 4. Inicie o projeto
npm run dev

# 5. Inicie o servidor da Api local
cd api
node server.js

Por fim, acesse http://localhost:5173 no seu navegador.

## Autores
Um projeto desenvolvido por Felipe Santos Marceli, Kauã Rodrigues de Souza e Gustavo Naoto Iida.
