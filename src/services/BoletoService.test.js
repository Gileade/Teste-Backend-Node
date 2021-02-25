const { validarBoleto, verificaTituloConvenio } = require("./BoletoService")

describe("Validação de inserção do boleto digitado", () => {
    it('Deve validar se contém caracteres no boleto digitado', () => {
      expect(() => validarBoleto('8360000000154602011031388344036040aa')).toThrow(Error)
    })

    it('Deve validar o tamanho do boleto digitado', () => {
      expect(() => validarBoleto('8360000000154602011031388344036040201002402308609')).toThrow(Error)
      expect(() => validarBoleto('2129000119211000121090447561740597587000000200')).toThrow(Error)
    })

    it('Deve retornar o tipo do boleto digitado', () => {
      const boletoConvenio = "836900000024460201103138834403604020100240230860"
      const boletoTitulo = "21290001192110001210904475617405975870000002000"
      expect(verificaTituloConvenio(boletoConvenio)).toBe('CONVENIO')
      expect(verificaTituloConvenio(boletoTitulo)).toBe('TITULO')
      })
})