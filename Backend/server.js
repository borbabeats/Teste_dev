const express = require('express')
const cors = require('cors')

const router = require('./src/routes/routes')

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(5000, () => {
    console.log('Aplicacao rodando na porta 5000')
})

app.get('/',(request, response) => {
    response.send('Hello world')
})