const BoletoErros = require('../erros/BoletoErros')

class BoletoService{
    
    validarBoleto(boleto, res){
        const tamanhosDeBoletosAceitos = [47, 48] // => Título / Convênio
        let ehValido = true
        let retorno = ''
        let erros = []
        let mensagemDeErro = ''

        //console.log(boleto.match(/^[0-9]+$/))
        console.log(tamanhosDeBoletosAceitos.includes(boleto.length))
        console.log(boleto.length)

        if (!tamanhosDeBoletosAceitos.includes(boleto.length)){
            ehValido = false
            mensagemDeErro = 'O Código inserido está com a quantidade de dígitos diferente do esperado'
            BoletoErros.adiciona(erros, mensagemDeErro)
        }

        if (boleto.match(/^[0-9]+$/) === null) {
            ehValido = false
            mensagemDeErro = 'O Código não pode conter letras ou caracteres especiais'
            BoletoErros.adiciona(erros, mensagemDeErro)
        }

        if (!ehValido){
            retorno = erros
        }else{
            retorno = {
                barCode: 123,
                amount: 50,
                expirationDate: '2022-01-01'
            }
        }
             
        return retorno
    }
}

module.exports = new BoletoService
