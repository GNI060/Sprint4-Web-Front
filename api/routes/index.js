const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const filePath = path.join(__dirname, '../data/dados.json');

// Simular login
router.post('/login', (req, res) => {
  const { email, senha } = req.body;
  if (email === 'teste@teste.com' && senha === '123456') {
    return res.json({ sucesso: true, mensagem: 'Login bem-sucedido' });
  }
  return res.status(401).json({ sucesso: false, mensagem: 'Credenciais inválidas' });
});

// Receber formulário
router.post('/form', (req, res) => {
  const novo = req.body;
  fs.readFile(filePath, 'utf8', (err, data) => {
    const array = data ? JSON.parse(data) : [];
    array.push(novo);
    fs.writeFile(filePath, JSON.stringify(array, null, 2), () => {
      res.json({ sucesso: true, mensagem: 'Dados salvos' });
    });
  });
});

// Buscar dados
router.get('/dados', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    const array = data ? JSON.parse(data) : [];
    res.json(array);
  });
});

module.exports = router;
