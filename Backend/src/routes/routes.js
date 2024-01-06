const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')

router.post('/users', UserController.novoUsuario)
router.post('/pessoas', UserController.cadastraPessoa)
router.get('/pessoas', UserController.listarPessoas)
router.post('/protocolos', UserController.novoProtocolo)
router.get('/protocolos', UserController.listarProtocolos)




module.exports = router