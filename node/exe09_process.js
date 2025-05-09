process.stdout.write('Está gostando do curso?');

process.stdin.on('data', function (data) { // escuta o evento de entrada de dados

  process.stdout.write(`Sua resposta foi: ${data.toString()}Obrigado!\n`); // escreve a resposta no stdout

  process.exit(); // encerra o processo
})