function temParam(param) {
  return process.argv.indexOf(param) !== -1  // verifica se o param existe no array
}

if(temParam('--producao')) {
  console.log('Atenção total!!')
} else {
  console.log('Tranquilo!!')
}