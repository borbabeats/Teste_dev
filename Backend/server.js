const express = require('express')
const cors = require('cors')
const router = require('./src/routes/routes.js')

const app = express()

app.use(cors({
    origin: ['https://teste-dev-pi.vercel.app'],
    methods: ['POST', 'GET', 'DELETE', 'PUT', 'OPTIONS'],
    allowedHeaders:['Content-Type', 'Authorization', 'Accept', 'Accept-Language', 'Content-Language', 'X-Requested-with'],
    maxAge: 86400,
    credentials: true
}))
app.get('/', (req, res) => {
    // Set cookie for the root route
    res.cookie('cookieName', 'cookieValue', { sameSite: 'none', secure: true });
    res.send('Cookie set successfully!'); // Send a response to indicate that the cookie has been set
});
/*app.use((req, res, next) => {
    res.setHeader('Set-Cookie', 'SameSite=None; Secure'); 
    next();
});*/

app.use(express.json())
app.use(router)

app.listen(443, () => {
    console.log('Aplicacao rodando na porta 443')
})
