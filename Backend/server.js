const express = require('express')
const cors = require('cors')
const router = require('./src/routes/routes.js')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
require('dotenv').config();
const SECRET = 'maiconteste'


const app = express()
app.use(cors())
app.use(express.json())
app.use(router)
app.use(bodyParser.json())


function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token']
    jwt.verify(token, SECRET, (err, decoded) => {
        if(err) return res.status(401).end()
        req.userId = decoded.userId
    next()
    })
}

//app.use('/api', indexRouter)
app.post('/login', (req, res) => {
    if (req.body.username === 'maicon' && req.body.password === '123') {
        const token = jwt.sign({userId: 1}, SECRET, { expiresIn: 300 })
        return res.json({auth: true, token})
    }

    res.status(401).end()
})


app.listen(5000, () => {
    console.log('Aplicacao rodando na porta 5000')
})
