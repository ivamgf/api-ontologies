// server.js

const app = require('./index'); // Importando o app do index.js
const http = require('http');

// Configurando o servidor para escutar na porta específica configurada pelo ambiente KingHost
const PORT = process.env.PORT_APP || 21041; // PORT_APP deve ser configurado no painel KingHost

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Acesse a aplicação em: http://localhost:${PORT}`);
});

// Tratamento de erro para porta em uso
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Porta ${PORT} já está em uso. Tentando usar outra porta...`);
    server.listen(0); // Tenta usar uma porta livre automaticamente
  } else {
    throw err;
  }
});
