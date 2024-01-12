const express = require('express')
const cors = require('cors')
const router = require('./src/routes/routes.js')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
require('dotenv').config();




const app = express()
app.use(express.json())
app.use(cors())
app.use(router)
app.use(bodyParser.json())




app.listen(5000, () => {
    console.log('Aplicacao rodando na porta 5000')
})
