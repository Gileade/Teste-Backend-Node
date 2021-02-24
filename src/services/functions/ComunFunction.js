const retornaDVModulo10 = (campo) => {
    const arrayDeNumeros = retornaArrayComOsNumeros(campo)
    const numerosMultiplicados = retornaMultiplicacaoDosNumerosPorDoisEUm(arrayDeNumeros)
    const somaTotalDoCampo = retornaSomaTotalDoCampo(numerosMultiplicados)
  
    const resto = somaTotalDoCampo % 10
    const dezena = (Math.floor(somaTotalDoCampo / 10) + 1) * 10
    const DV = (dezena - resto) % 10
  
    return DV
}

const retornaArrayComOsNumeros = (campo) => {
    const campoArray = campo.split('')
  
    let arrayDeNumeros = []
    for (var i = 0; i < campoArray.length; i++) {
        arrayDeNumeros[i] = Number(campoArray[i])
    }
  
    return arrayDeNumeros
}

const retornaMultiplicacaoDosNumerosPorDoisEUm = (numeros) => {
    let multiplicador = 1
    for (var i = numeros.length - 1; i >= 0; i--) {
      multiplicador = multiplicador === 1 ? 2 : 1
      numeros[i] = retornaSomaDosDigitos(numeros[i] * multiplicador)
    }
  
    return numeros
}

const retornaSomaDosDigitos = (numero) => {
    let saida = []
    let strNumero = numero.toString()
  
    for (var i = 0, len = strNumero.length; i < len; i++) {
        saida.push(Number(strNumero.charAt(i)))
    }
  
    for (var i = 0, soma = 0; i < saida.length;) {
      soma += saida[i++]
    }
  
    return soma
  }

const retornaSomaTotalDoCampo = (numeros) => {
    let soma = 0
  
    for (var t = 0; t < numeros.length; t++) {
      soma += numeros[t]
    }
  
    return soma
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

    if (digitosValidados.digitoGeral !== digitosVerificadores.digitoGeral) {
      throw new Error(
        `DV Geral está incorreto! O DV esperado é ${digitosValidados.digitoGeral}, DV recebido é ${digitosVerificadores.digitoGeral}`
      )
    }
}

module.exports = {
    retornaDVModulo10,
    retornaArrayComOsNumeros,
    retornaMultiplicacaoDosNumerosPorDoisEUm,
    retornaSomaTotalDoCampo,
    validacaoDigitosVerificadores
  }