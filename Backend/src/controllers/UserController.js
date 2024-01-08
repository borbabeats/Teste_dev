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
        database.select('*').table('users').then((users) => {
            response.send(users)
        }).catch((error) => {
             console.error(error)
             response.status(500).send('Erro ao listar usuarios')
        })
    }

    cadastraPessoa(request, response) {
        
        const {nome, data_nascimento, cpf, genero, estado, cidade, bairro, logradouro, numero, complemento} = request.body

        database.insert({nome, data_nascimento, cpf, genero, estado, cidade, bairro, logradouro, numero, complemento})
        .table('pessoas').then(data => {
            console.log(data)
            response.json({message:'Pessoa cadastrada com sucesso!'})
        }).catch(err => {
                console.error(err)
            })
        }
    

    listarPessoas(req, res) {
        database.select('*').table('pessoas').then(data=>{
            console.log(data)
            res.json(data)
        }).catch(err => {
            console.error(err)
        })
    }

    deletarPessoa(req, res) {
        const id = req.params.id

        database.where({ id:id }).del().table('pessoas').then(deleteRows => {
            if (deleteRows > 0) {
                res.json({ message: 'Pessoa deletada da lista de cadastro' })
            } else {
                res.status(404).json({ message: 'Pessoa nao encontrada' })
            }
        }).catch(error => {
            res.status(500).json({  error: 'Erro ao deletar pessoa', details: error })
        })
    }

    novoProtocolo(req, res) {
        const {descricao, data_protocolo, prazo, nome} = req.body

        database.insert({descricao, data_protocolo, prazo, nome})
        .table('protocolos').then(data => {
            console.log(data)
            res.json({message: 'Protocolo preenchido com sucesso!'})
        }).catch(err => {
            console.error(err)
        })

    }

    listarProtocolos(req, res){
        database.select('*').table('protocolos').then(data => {
            console.log(data)
            res.json(data)
        }).catch(err => {
            console.error(err)
        })
    }

    deletarProtocolo(req, res) {
        const id = req.params.id

        database.where({ id:id }).del().table('protocolos').then(deleteRows => {
            if (deleteRows > 0) {
                res.json({ message: 'Protocolo deletado da lista de cadastro' })
            } else {
                res.status(404).json({ message: 'Protocolo nao encontrado' })
            }
        }).catch(error => {
            res.status(500).json({  error: 'Erro ao deletar protocolo', details: error })
        })
    }

    listarGenero(req, res) {
        database.select('*').table('gender').then(data => {
            console.log(data)
            res.json(data)
        }).catch(err => {
            console.error(err)
        })
    }
}
module.exports = new UserController()