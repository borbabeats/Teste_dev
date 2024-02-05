const express = require('express')
const cors = require('cors')
const router = require('./src/routes/routes.js')

const app = express()
app.use(express.json())
app.use(cors({
    origin: 'https://crud-example-d15v.onrender.com',
    methods: ['POST', 'GET', 'DELETE', 'PUT'],
    allowHeaders:'*',
    maxAge: 86400,
    credentials: true
}))

app.use(router)
app.listen(5000, () => {
    console.log('Aplicacao rodando na porta 5000')
})