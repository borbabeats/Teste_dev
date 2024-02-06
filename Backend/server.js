const express = require('express')
const cors = require('cors')
const app = express()

const router = require('./src/routes/routes.js')

app.use(router)
app.use(cors({
    origin: ['https://cadastros-client-side.onrender.com', 'https://teste-dev-pi.vercel.app'],
    methods: ['POST', 'GET', 'DELETE', 'PUT'],
    allowedHeaders:'*',
    maxAge: 86400,
    credentials: true
}))
app.options('*', cors())

app.use(express.json())


app.listen(8080, () => {
    console.log('Aplicacao rodando na porta 8080')
})
