const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const dbPath = path.join(__dirname, 'db.json');

function carregarDB() {
  const dados = fs.readFileSync(dbPath);
  return JSON.parse(dados);
}

function salvarDB(dados) {
  fs.writeFileSync(dbPath, JSON.stringify(dados, null, 2));
}

// Login
app.post('/api/login', (req, res) => {
  const { email, senha } = req.body;
  const db = carregarDB();

  const usuario = db.usuarios.find(u => u.email === email && u.senha === senha);

  if (usuario) {
    res.json({ mensagem: 'Login realizado com sucesso!', usuario });
  } else {
    res.status(401).json({ mensagem: 'Email ou senha inválidos.' });
  }
});

// Cadastro
app.post('/api/form', (req, res) => {
  const { nome, email, senha } = req.body;
  const db = carregarDB();

  const emailExistente = db.usuarios.find(u => u.email === email);
  if (emailExistente) {
    return res.status(400).json({ mensagem: 'Email já cadastrado.' });
  }

  const novoUsuario = { id: Date.now(), nome, email, senha };
  db.usuarios.push(novoUsuario);
  salvarDB(db);

  res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' });
});

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
