const { validarConvenio } = require("./ConvenioService")

describe("Retornar dados corretos do Convênio", () => {
  it('Deve retornar os campos esperados', () => {
    const linhaDigitavelConvenio = "836900000024460201103138834403604020100240230860"
    const result = validarConvenio(linhaDigitavelConvenio)
    expect(result).toHaveProperty("barCode")
    expect(result).toHaveProperty("amount")
  })

  it('Deve validar DV do boleto', () => {
    expect(() => validaConvenio('836000000025460201103138834403604020100240230860')).toThrow(Error)
    expect(() => validaConvenio('836900000024460201103137834403604020100240230860')).toThrow(Error)
    expect(() => validaConvenio('836900000024460201103138834403604021100240230860')).toThrow(Error)
    expect(() => validaConvenio('836900000024460201103138834403604020000240230860')).toThrow(Error)
  })
})