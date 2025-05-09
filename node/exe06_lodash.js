const _ = require('lodash') 
 
const alunos = [{
  nome: 'João',
  nota: 7.8
}, {
  nome: 'Maria',
  nota: 9.2
}, {
  nome: 'Pedro',
  nota: 6.5
}]

// Calcular a média das notas dos alunos
const media = _.meanBy(alunos, 'nota') / alunos.length 
console.log(media) 