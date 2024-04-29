const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')

router.post('/api/newusers', UserController.novoUsuario)
router.post('/api/checklogin', UserController.checkLogin)

router.post('/api/pessoas', UserController.cadastraPessoa)
router.get('/api/pessoas', UserController.listarPessoas)
router.get('/api/pessoas/:id', UserController.listarUmaPessoa)
router.delete('/api/deleta/pessoa/:id', UserController.deletarPessoa)
router.put('/api/atualizar/pessoa/:id', UserController.atualizaPessoa)

router.post('/api/protocolos', UserController.novoProtocolo)
router.get('/api/protocolos', UserController.listarProtocolos)
router.get('/api/protocolos/:id', UserController.listarUmProtocolo)
router.delete('/api/deleta/protocolo/:id', UserController.deletarProtocolo)
router.patch('/api/atualizar/protocolo/:id', UserController.atualizarProtocolo)

router.get('/api/genero', UserController.listarGenero)




module.exports = router