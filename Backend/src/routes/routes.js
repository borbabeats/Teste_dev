const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')

router.post('/users', UserController.novoUsuario)

module.exports = router