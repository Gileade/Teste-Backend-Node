const funcoesConvenio = require("./functions/ConvenioFunction")
const funcoesComuns = require("./functions/ComunFunction")

const validaConvenio = (boleto) => {
  const campos = {
    campo1: boleto.slice(0, 12),
    campo2: boleto.slice(12, 24),
    campo3: boleto.slice(24, 36),
    campo4: boleto.slice(36, 48)
  }

  const camposSemDV = {
    campo1: campos.campo1.slice(0, 11),
    campo2: campos.campo2.slice(0, 11),
    campo3: campos.campo3.slice(0, 11),
    campo4: campos.campo4.slice(0, 11)
  }

  const valorEfetivoOuReferencia = Number(campos.campo1.slice(2, 3))

  if (![6, 7, 8, 9].includes(valorEfetivoOuReferencia)) {
    throw new Error(
      message = 'Valor Efetivo ou Referência não é válido',
    )
  }

  const modulo = [6, 7].includes(valorEfetivoOuReferencia) ? 10 : 11

  const codigoDeBarraNaoValidado =
    camposSemDV.campo1.slice(0, 3) +
    camposSemDV.campo1.slice(4, 12) +
    camposSemDV.campo2 +
    camposSemDV.campo3 +
    camposSemDV.campo4

  const digitosVerificadores = {
    digito1: Number(campos.campo1.slice(11, 12)),
    digito2: Number(campos.campo2.slice(11, 12)),
    digito3: Number(campos.campo3.slice(11, 12)),
    digito4: Number(campos.campo4.slice(11, 12)),
    digitoGeral: Number(campos.campo1.slice(3, 4))
  }

  const digitosValidados = {
    digito1:
      modulo === 10
        ? funcoesComuns.retornaDVModulo10(campos.campo1.slice(0, 11))
        : funcoesConvenio.retornaDVModulo11(campos.campo1.slice(0, 11)),
    digito2:
      modulo === 10
        ? funcoesComuns.retornaDVModulo10(campos.campo2.slice(0, 11))
        : funcoesConvenio.retornaDVModulo11(campos.campo2.slice(0, 11)),
    digito3:
      modulo === 10
        ? funcoesComuns.retornaDVModulo10(campos.campo3.slice(0, 11))
        : funcoesConvenio.retornaDVModulo11(campos.campo3.slice(0, 11)),
    digito4:
      modulo === 10
        ? funcoesComuns.retornaDVModulo10(campos.campo4.slice(0, 11))
        : funcoesConvenio.retornaDVModulo11(campos.campo4.slice(0, 11)),
    digitoGeral:
      modulo === 10
        ? funcoesComuns.retornaDVModulo10(codigoDeBarraNaoValidado)
        : funcoesConvenio.retornaDVModulo11(codigoDeBarraNaoValidado)
  }

  funcoesComuns.validacaoDigitosVerificadores(digitosValidados, digitosVerificadores)
  return funcoesConvenio.montaResposta(camposSemDV)
}

module.exports = {
  validaConvenio
}
