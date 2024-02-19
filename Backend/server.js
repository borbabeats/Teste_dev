const express = require('express')
const cors = require('cors')
const router = require('./src/routes/routes.js')


const app = express()


app.use(cors({
    origin: 'https://teste-dev-pi.vercel.app',
    methods: ['POST', 'GET', 'DELETE', 'PUT'],
    allowedHeaders:['Content-Type', 'Authorization', 'Accept', 'Accept-Language', 'Content-Language'],
    exposedHeaders:'*',
    maxAge: 86400,
    credentials: true
}))

app.use(express.json())
app.use(router)

//app.options('*', cors())




app.listen(8080, () => {
    console.log('Aplicacao rodando na porta 8080')
})
