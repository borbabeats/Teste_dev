const express = require('express')
const cors = require('cors')
const router = require('./src/routes/routes.js')
const port = 10000

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

app.listen(port, () => {
    console.log(`Aplicacao rodando na porta ${port}`)
})