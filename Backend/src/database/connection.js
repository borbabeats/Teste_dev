const dotenv = require('dotenv')
dotenv.config()

var knex = require('knex') ({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'dados_usuario'
    }
})
module.exports = knex