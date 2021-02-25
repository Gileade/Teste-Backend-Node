const BoletoService = require('../services/BoletoService')
const ConvenioService = require('../services/ConvenioService')
const TituloService = require('../services/TituloService')

module.exports = app => {
    app.get('/boleto/:numBoleto', (req, res) =>{
        try {
            const numeroDoBoletoRecebido = req.params.numBoleto
            
            BoletoService.validarBoleto(numeroDoBoletoRecebido)
            
            const corpo = BoletoService.verificaTituloConvenio(numeroDoBoletoRecebido) === 'TITULO' 
            ? TituloService.validarTitulo(numeroDoBoletoRecebido)
            : ConvenioService.validarConvenio(numeroDoBoletoRecebido)

            return res.status(200).json(corpo)
        } catch (error) {
            return res.status(400).json({error: error.message})
        }
    })
}