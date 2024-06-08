const express = require('express')
const cors = require('cors')
const router = require('./src/routes/routes.js')

const app = express()

app.use(cors({
    origin:  'https://cadastros-client-side.onrender.com',
    methods: ['*'],
    allowedHeaders:['Content-Type', 'Authorization', 'Accept', 'Accept-Language', 'Content-Language', 'X-Requested-with'],
    maxAge: 86400,
    credentials: true
}))

app.use(express.json())
app.use(router)

app.listen(443, () => {
    console.log('Aplicacao rodando na porta 443')
})