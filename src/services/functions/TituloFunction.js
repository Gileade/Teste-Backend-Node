const { format, addDays } = require('date-fns')
const funcoesComuns = require("./ComunFunction")

const retornaDVModulo11 = (codigoDeBarra) => {
    let codigoDeBarrasEmNumero = funcoesComuns.retornaArrayComOsNumeros(codigoDeBarra)
  
    let multiplicador = 9
    let contador = codigoDeBarrasEmNumero.length
  
    while (contador--) {
      multiplicador = multiplicador === 9
        ? 2
        : multiplicador + 1
  
      codigoDeBarrasEmNumero[contador] = codigoDeBarrasEmNumero[contador] * multiplicador
    }
  
    const totalSoma = funcoesComuns.retornaSomaTotalDoCampo(codigoDeBarrasEmNumero)
    const restoDaDivisao = totalSoma % 11
  
    const digito = 11 - restoDaDivisao
  
    return [0, 10, 11].includes(digito)
      ? 1
      : digito
}

const montaResposta = (codigoDeBarraValidado, valorBoleto, vencimento) => {
  const valor = valorBoleto !== '0.00' ? valorBoleto : undefined
  
    const dataDeValidade =
        vencimento !== '0000'
        ? format(
            addDays(new Date(1997, 9, 7), Number(vencimento)),
            'yyyy-MM-dd',
        ).toString()
        : undefined

    return {
        barCode: codigoDeBarraValidado,
        amount: valor,
        expirationDate: dataDeValidade
    }
}

module.exports = {
  retornaDVModulo11,
  montaResposta
}