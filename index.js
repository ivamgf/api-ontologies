const http = require('http');
const express = require('express');
const path = require('path');
const app = express();

// Middleware para parsing de JSON
app.use(express.json());

// Servindo arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// Rota para a página de ontologias
app.get('/ontologies', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'ontologies.html'));
});

// Exemplo de rota para um endpoint da API
app.get('/api/saudacao', (req, res) => {
  res.json({ message: 'Olá, esta é sua API!' });
});

// Configurando o servidor para escutar na porta específica configurada pelo ambiente KingHost
const PORT = process.env.PORT_APP || 21041; // PORT_APP deve ser configurado no painel KingHost
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Acesse a aplicação em: http://localhost:${PORT}`);
});

module.exports = app; // Exportando o app para testes ou uso em outros módulos
