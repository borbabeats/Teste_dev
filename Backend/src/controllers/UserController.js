const dotenv = require('dotenv')
const database = require('../database/connection')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
dotenv.config()

const jwtToken = process.env.REACT_APP_JWT_SECRET


class UserController {
    novoUsuario(request, response) {

    const {username, password} = request.body

    console.log(username, password)

    //generate a salt to use for hashing
    bcrypt.genSalt(10, (err, salt) => {
        if(err) {
            console.error(err)
            response.status(500).json({ error: 'Erro ao criar usuario' })
        }

        //hash the password using the generated salt
        bcrypt.hash(password, salt, (err, hash) => {
            if(err) {
                console.error(err)
                return response.status(500).json({ error:'Erro ao criar o usuario' })
            }

            database.insert({ username, password: hash }).table('users').then(data=>{
                console.log(data)
                response.json({message:'Usuario criado com sucesso!'})
            }).catch(error=>{
                console.error(error)
                response.status(500).json({ error: 'Erro ao criar usuario' })
            })
        })

        })
    }
    
    
    const checkLogin = (req, res) => {
        const { username, password } = req.body;
        
        console.log('Received login request for username:', username); // Debugging log
    
        database.select('*').table('users').where('username', username).then(data => {
            if (data.length > 0) {
                const hashedPassword = data[0].password;
    
                bcrypt.compare(password.toString(), hashedPassword, (bcryptErr, response) => {
                    if (bcryptErr) {
                        console.error('Bcrypt error:', bcryptErr); // Debugging log
                        return res.json({ Error: 'Password compare error' });
                    }
                    if (response) {
                        const token = jwt.sign({ username }, jwtToken, { expiresIn: '1h' });
                        res.cookie('token', token, { httpOnly: true, sameSite: 'None', secure: true });
                        console.log('Login successful, token generated:', token); // Debugging log
                        return res.json({ Status: token });
                    } else {
                        console.log('Password not matched for username:', username); // Debugging log
                        return res.json({ Error: 'Password not matched' });
                    }
                });
            } else {
                console.log('No user found with username:', username); // Debugging log
                return res.json({ Error: 'No username exists' });
            }
        }).catch(err => {
            console.error('Database error:', err); // Debugging log
            return res.json({ Error: 'Login error in server' });
        });
    };

    verifyToken(req, res, next) {
        const token = req.cookies.token

        if(!token) {
            return res.status(401).json({ error: 'Unauthorized - Please log in' })
        }
        jwt.verify(token, jwtToken, (err, decoded) => {
            if(err) {
                return res.status(401).json({ error: 'Invalid token' })
            }

            req.user = decoded
            next()
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

    listarUmaPessoa(req, res) {
        const { id } = req.params
        database.select('*').table('pessoas').where({ id:id }).then(data=>{
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

    atualizaPessoa(req, res) {
        const id = req.params
        const {nome, data_nascimento, cpf, genero, estado, cidade, bairro, logradouro, numero, complemento} = req.body

        database.where({ id:id }).update({nome, data_nascimento, cpf, genero, estado, cidade, bairro, logradouro, numero, complemento})
        .table('pessoas').then(data=>{
            res.json({message:'Pessoa atualizada com sucesso'}) //verificar se eh response o res
        }).catch(err=>{
            response.json(err)
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

    listarUmProtocolo(req, res) {
        const { id } = req.params
        database.select('*').table('protocolos').where({ id:id }).then(data=>{
            res.json(data)
        }).catch(err => {
            console.error(err)
        })
    }

    atualizarProtocolo(req, res) {
        const id = req.params
        const {descricao, data_protocolo, prazo, nome} = req.body


        database.where({ id:id }).update({descricao, data_protocolo, prazo, nome})
        .table('protocolos').then(data => {
            console.log(data)
            res.json({message: 'Protocolo preenchido com sucesso!'})
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