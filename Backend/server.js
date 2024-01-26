const express = require('express')
const cors = require('cors')
const router = require('./src/routes/routes.js')
const bodyParser = require('body-parser')


const app = express()
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5000'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Custom-Header'],
    methods: ['POST', 'GET', 'DELETE', 'PUT'],
    credentials: true
}))
app.use(router)
app.use(bodyParser.json())




app.listen(5000, () => {
    console.log('Aplicacao rodando na porta 5000')
})
