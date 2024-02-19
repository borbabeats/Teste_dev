const express = require('express')
const cors = require('cors')
const router = require('./src/routes/routes.js')


const app = express()


app.use(cors({
    origin: 'https://teste-dev-pi.vercel.app',
    methods: ['POST', 'GET', 'DELETE', 'PUT'],
    allowedHeaders:['Content-Type', 'Authorization', 'Accept', 'Accept-Language', 'Content-Language'],
    credentials: true //Allow credentials (cookies) to be sent cross-origin
}))

app.use(express.json())
app.use(router)

//Enable pre-flight requests
app.options('*', cors())

const PORT = process.env.PORT || 443


app.listen(PORT, () => {
    console.log('Aplicacao rodando na porta ${PORT}')
})
