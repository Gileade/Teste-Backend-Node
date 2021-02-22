
class BoletoErros{
    
    adiciona(erros, mensagemDeErro){
        
        erros.push(
            {
                mensagemErro: mensagemDeErro
            }
        )

        return erros
    }
}

module.exports = new BoletoErros