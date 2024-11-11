const dotenv = require('dotenv')
dotenv.config()

var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.REACT_APP_DB_HOST,
        user: process.env.REACT_APP_DB_USER,
        password: process.env.REACT_APP_DB_PASSWORD,
        database: process.env.REACT_APP_DB_DATABASE
    }
})

module.exports = knex
