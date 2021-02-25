const { validarTitulo } = require("./TituloService")

describe("Retornar dados corretos do título", () => {
  it('Deve retornar os campos esperados', () => {
    const boletoTitulo = "21290001192110001210904475617405975870000002000"
    const result = validarTitulo(boletoTitulo)
    expect(result).toHaveProperty("barCode")
    expect(result).toHaveProperty("amount")
    expect(result).toHaveProperty("expirationDate")
  })

  it('Deve validar DV do boleto', () => {
    expect(() => validarTitulo('21290001102110001210904475617405975870000002000')).toThrow(Error)
    expect(() => validarTitulo('21290001192110001210104475617405975870000002000')).toThrow(Error)
    expect(() => validarTitulo('21290001192110001210904475617402975870000002000')).toThrow(Error)
    expect(() => validarTitulo('21290001192110001210904475617405275870000002000')).toThrow(Error)
  })
  
})