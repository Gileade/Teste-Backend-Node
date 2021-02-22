const BoletoService = require('../services/BoletoService')

module.exports = app => {
    app.get('/boleto/:boleto', (req, res) =>{
        try {
            const numeroDoBoletoRecebido = req.params.boleto
    
            const boleto = BoletoService.validarBoleto(numeroDoBoletoRecebido, res)

            return res.status(200).json(boleto)
        } catch (error) {
            return res.status(400).json({error: err.message})
        }
    })
}