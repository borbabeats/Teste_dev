const express = require('express')
const cors = require('cors')


const router = require('./src/routes/routes.js')
app.use(router)

const app = express()
app.use(cors({
    origin: 'https://crud-example-d15v.onrender.com',
    methods: ['POST', 'GET', 'DELETE', 'PUT'],
    allowedHeaders:'*',
    maxAge: 6400,
    credentials: true
}))

app.use(express.json())


app.listen(5000, () => {
    console.log('Aplicacao rodando na porta 5000')
})