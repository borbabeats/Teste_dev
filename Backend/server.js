const express = require('express')
const cors = require('cors')
const app = express()

const router = require('./src/routes/routes.js')


app.use(cors({
    origin: ['https://teste-dev-pi.vercel.app', 'http://localhost:5173' ],
    methods: ['POST', 'GET', 'DELETE', 'PUT'],
    allowedHeaders:['*'],
    maxAge: 86400,
    credentials: true
}))

app.use(router)

//app.options('*', cors())

app.use(express.json())


app.listen(8080, () => {
    console.log('Aplicacao rodando na porta 8080')
})
