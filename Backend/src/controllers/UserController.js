const database = require('../database/connection')

class UserController {
    novoUsuario(request, response) {

    const {username, password} = request.body

    console.log(username, password)

    database.insert({username, password}).table('users').then(data=>{
        console.log(data)
        response.json({message:'Usuario criado com sucesso!'})
    }).catch(error=>{
        console.error(error)
    })
}

    listarUsuarios(request, response) {
        database.select('*').table
    }
}
module.exports = new UserController()