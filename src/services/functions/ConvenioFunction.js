const retornaDVModulo11 = (campo) => {
    const codigoDeBarrasEmNumero = retornaArrayNumeros(campo)
  
    let multiplicador = 9
    let contador = codigoDeBarrasEmNumero.length
  
    while (contador--) {
      multiplicador = multiplicador === 9 ? 2 : multiplicador + 1
  
      codigoDeBarrasEmNumero[contador] = codigoDeBarrasEmNumero[contador] * multiplicador
    }
  
    const totalSoma = retornaSomaTotalDoCampo(codigoDeBarrasEmNumero)
    const restoDaDivisao = totalSoma % 11
  
    if ([0, 1].includes(restoDaDivisao)) {
      return 0
    }
  
    if (restoDaDivisao === 10) {
      return 1
    }
  
    const digitoVerificador = 11 - restoDaDivisao
  
    return digitoVerificador
}
  
const montaResposta = (camposSemDV) => {
    const codigoDeBarras =
        camposSemDV.campo1 +
        camposSemDV.campo2 +
        camposSemDV.campo3 +
        camposSemDV.campo4

    const valorBoleto = (
        parseFloat(
        camposSemDV.campo1.slice(4, 12) + camposSemDV.campo2.slice(0, 4),
        ) / 100
    ).toFixed(2)

    const valor = valorBoleto !== '0.00' ? valorBoleto : undefined

    return {
        barCode: codigoDeBarras,
        amount: valor
    }
}


module.exports = {
    retornaDVModulo11,
    montaResposta
}