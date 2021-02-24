const validarBoleto = (boleto) => {
    if (boleto.match(/^[0-9]+$/) === null) {
        throw new Error(message = 'É esperado apenas números')
    }

    if (boleto.length < 47){
        throw new Error(message = 'O Código inserido está com menos dígitos que o esperado')
    }

    if (boleto.length > 48){
        throw new Error(message = 'O Código inserido está com mais dígitos que o esperado')
    }
}

const verificaTituloConvenio = (boleto) => boleto.length === 47 ? 'TITULO' : 'CONVENIO'

module.exports = {
    validarBoleto ,
    verificaTituloConvenio
}
