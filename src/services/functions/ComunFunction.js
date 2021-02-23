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

module.exports = {
    retornaArrayComOsNumeros,
    retornaMultiplicacaoDosNumerosPorDoisEUm,
    retornaSomaTotalDoCampo
  }