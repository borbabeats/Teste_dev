const express = require('express')
const cors = require('cors')
const router = require('./src/routes/routes.js')

const app = express()

app.use(cors({
    origin: ['https://teste-dev-pi.vercel.app', 'https://localhost:5173'],
    methods: ['POST', 'GET', 'DELETE', 'PUT', 'OPTIONS'],
    allowedHeaders:['Content-Type', 'Authorization', 'Accept', 'Accept-Language', 'Content-Language', 'X-Requested-with'],
    maxAge: 86400,
    credentials: true
}))

/*app.use((req, res, next) => {
    res.setHeader('Set-Cookie', 'SameSite=None; Secure'); 
    next();
});*/

app.use(express.json())
app.use(router)


app.listen(443, () => {
    console.log('Aplicacao rodando na porta 443')
})
