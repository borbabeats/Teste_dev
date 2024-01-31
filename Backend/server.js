const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./src/routes/routes.js')
const port = 5000

app.use(cors({
    origin: ['http://localhost:5173'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Custom-Header'],
    methods: ['POST', 'GET', 'DELETE', 'PUT'],
    credentials: true
}))


app.use(express.json())
app.use(router)


app.listen(port, () => {
    console.log('Aplicacao rodando na porta 5000')
})
