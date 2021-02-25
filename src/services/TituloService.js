const funcoesTitulo = require("./functions/TituloFunction")
const funcoesComuns = require("./functions/ComunFunction")

const validarTitulo = (boleto) => {
  const campos = {
    campo1: boleto.slice(0, 10),
    campo2: boleto.slice(10, 21),
    campo3: boleto.slice(21, 32),
    campo4: boleto.slice(32, 33),
    campo5: boleto.slice(33, 47)
  }

  const posicoesCodigoDeBarras = {
    pos10a19: campos.campo5.slice(4, 14),
    pos20a24: campos.campo1.slice(4, 9),
    pos25a34: campos.campo2.slice(0, 10),
    pos35a44: campos.campo3.slice(0, 10)
  }

  const siloc = campos.campo1.slice(0, 3)
  const moeda = campos.campo1.slice(3, 4)
  const vencimento = campos.campo5.slice(0, 4)

  const codigoDeBarraNaoValidado =
    siloc +
    moeda +
    vencimento +
    posicoesCodigoDeBarras.pos10a19 +
    posicoesCodigoDeBarras.pos20a24 +
    posicoesCodigoDeBarras.pos25a34 +
    posicoesCodigoDeBarras.pos35a44

  const digitosValidados = {
    digito1: funcoesComuns.retornaDVModulo10(campos.campo1.slice(0, 9)),
    digito2: funcoesComuns.retornaDVModulo10(campos.campo2.slice(0, 10)),
    digito3: funcoesComuns.retornaDVModulo10(campos.campo3.slice(0, 10)),
    digito4: funcoesTitulo.retornaDVModulo11(codigoDeBarraNaoValidado)
  }

  const digitosVerificadores = {
    digito1: Number(campos.campo1.slice(9, 10)),
    digito2: Number(campos.campo2.slice(10, 11)),
    digito3: Number(campos.campo3.slice(10, 11)),
    digito4: Number(campos.campo4)
  }

  funcoesComuns.validacaoDigitosVerificadores(digitosValidados, digitosVerificadores)

  const codigoDeBarraValidado =
    siloc +
    moeda +
    digitosValidados.digitoCampo4 +
    vencimento +
    posicoesCodigoDeBarras.pos10a19 +
    posicoesCodigoDeBarras.pos20a24 +
    posicoesCodigoDeBarras.pos25a34 +
    posicoesCodigoDeBarras.pos35a44;

  const valorBoleto = (parseFloat(campos.campo5.slice(4, 14)) / 100).toFixed(2);

  return funcoesTitulo.montaResposta(codigoDeBarraValidado, valorBoleto, vencimento)
}

module.exports = {
  validarTitulo
}