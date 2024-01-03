import UserServices from "../Services/UserService";
import Login from '../Pages/Login'

const UserService = new UserServices()

const Privateroutes = ({children}) => {
    const usuarioAutenticado = userService.usuarioAutenticado()
    return usuarioAutenticado ? children : 
}