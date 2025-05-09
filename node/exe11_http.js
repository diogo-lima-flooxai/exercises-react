const http = require('http');
// Criando o servidor
const server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end('<h1>Acho que é melhor usar o Express, não ?</h1>')
})

// Definindo a porta
const porta = 3456  
server.listen(porta, function() {
  console.log(`Escutando a ${porta}`)
})