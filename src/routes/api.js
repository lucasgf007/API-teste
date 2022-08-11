const Router = require("express");
const router = Router();

const { all } = require('../controllers/api.Controller')

router.get('/ping', all.ping)
router.get('/listarvendedores', all.listarVendedores)

// Envio 
router.post('/novouser', all.enviarUser)

module.exports.router = router