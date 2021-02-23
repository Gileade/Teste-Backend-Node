const { format, addDays } = require('date-fns')
const funcoesComuns = require("./ComunFunction")

const retornaDVModulo10 = (campo) => {
    const arrayDeNumeros = funcoesComuns.retornaArrayComOsNumeros(campo)
    const numerosMultiplicados = funcoesComuns.retornaMultiplicacaoDosNumerosPorDoisEUm(arrayDeNumeros)
    const somaTotalDoCampo = funcoesComuns.retornaSomaTotalDoCampo(numerosMultiplicados)
  
    const resto = somaTotalDoCampo % 10
    const dezena = (Math.floor(somaTotalDoCampo / 10) + 1) * 10
    const DV = (dezena - resto) % 10
  
    return DV
}

const retornaDVModulo11 = (codeBar) => {
    let codigoDeBarrasEmNumero = funcoesComuns.retornaArrayComOsNumeros(codeBar)
  
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

const validacaoDigitosVerificadores = (digitosValidados, digitosVerificadores) => {
    if (digitosValidados.digitoCampo1 !== digitosVerificadores.digitoCampo1) {
      throw new Error(
        message = `DV do campo 1 está incorreto! O DV esperado é ${digitosValidados.digitoCampo1}, DV recebido é ${digitosVerificadores.digitoCampo1}`
      )
    }
  
    if (digitosValidados.digitoCampo2 !== digitosVerificadores.digitoCampo2) {
      throw new Error(
        message = `DV do campo 2 está incorreto! O DV esperado é ${digitosValidados.digitoCampo2}, DV recebido é ${digitosVerificadores.digitoCampo2}`
      )
    }
  
    if (digitosValidados.digitoCampo3 !== digitosVerificadores.digitoCampo3) {
      throw new Error(
        message = `DV do campo 3 está incorreto! O DV esperado é ${digitosValidados.digitoCampo3}, DV recebido é ${digitosVerificadores.digitoCampo3}`
      )
    }
  
    if (digitosValidados.digitoCampo4 !== digitosVerificadores.digitoCampo4) {
      throw new Error(
        message = `DV do campo 4 está incorreto! O DV esperado é ${digitosValidados.digitoCampo4}, DV recebido é ${digitosVerificadores.digitoCampo4}`
      )
    }
}

const montaResposta = (codeBarValidado, valorBoleto, vencimento) => {
  const amount = valorBoleto !== '0.00' ? valorBoleto : undefined
  
    console.log(vencimento);

    const expirationDate =
        vencimento !== '0000'
        ? format(
            addDays(new Date(1997, 9, 7), Number(vencimento)),
            'yyyy-MM-dd',
        ).toString()
        : undefined

    return {
        barCode: codeBarValidado,
        amount,
        expirationDate,
    }
}

module.exports = {
  retornaDVModulo10,
  retornaDVModulo11,
  validacaoDigitosVerificadores,
  montaResposta
}