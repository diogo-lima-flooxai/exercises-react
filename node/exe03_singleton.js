let numero = 1

function exibirProximo() {
  console.log(numero++) // imprimindo o valor atual do numero e depois incrementa
}

module.exports = { exibirProximo };