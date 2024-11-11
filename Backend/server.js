const express = require('express')
const cors = require('cors')
const router = require('./src/routes/routes.js')
const port = 4000

const app = express()

// Define the list of allowed origins
const allowedOrigins = [
  'https://cadastros-client-side.onrender.com',
  'http://localhost:5173',
  'https://teste-dev-r3gx.vercel.app/'
]

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (e.g. mobile apps or Postman)
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Specify allowed methods
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Accept-Language', 'Content-Language', 'X-Requested-With'],
  maxAge: 86400,
  credentials: true
}))

// Middleware to parse JSON bodies
app.use(express.json())

// Use the router to handle routes
app.use(router)

// Start the server
app.listen(port, () => {
  console.log(`Aplicacao rodando na porta ${port}`)
})
