const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')

router.post('/users', UserController.novoUsuario)
router.post('/users', UserController.checkLogin)

router.post('/pessoas', UserController.cadastraPessoa)
router.get('/pessoas', UserController.listarPessoas)
router.delete('/deleta/pessoa/:id', UserController.deletarPessoa)

router.post('/protocolos', UserController.novoProtocolo)
router.get('/protocolos', UserController.listarProtocolos)
router.delete('/deleta/protocolo/:id', UserController.deletarProtocolo)

router.get('/genero', UserController.listarGenero)




module.exports = router