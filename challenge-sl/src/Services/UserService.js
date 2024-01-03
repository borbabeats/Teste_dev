import api from './Api'

     export default class UserServices {
         async login(dados) {
        const { data } = await api.post('/login', dados)

        if (data) {
            localStorage.setItem('usuario', data.user.nome)
            localStorage.setItem('token', data.token.token)
            return true
        }
        return 
    }

    usuarioAutenticado () {
        return localStorage.getItem('token') !== undefined ? true : false
    }
}


