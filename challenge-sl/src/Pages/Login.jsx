import Input from '../Components/form/Input';
import Submit from '../Components/form/Submit';
import { useState } from 'react';
import api from '../Services/Api';
import { validarSenha } from '../Utils/validation';
import UserService from '../Services/UserService'


const userService = new UserService()

function Login() {
  const [form, setform] = useState([])


  async function handleLogin(e) {
    e.preventDefault()
    try {
      const response = await userService.login(form)
      console.log('response do login',response)
      if (response === true) {
        <Navigate to />
        //to home
      }
      alert('Envia') 
    } catch (err) {
      console.error(err)
    }
  }

  function handleChange (e) {
    setform({...form, [e.target.name]: e.target.value})
    console.log(form)
  }

  const validadorInput = () => {
    return validarSenha(form.password)
  }

  console.log(validadorInput())

  return (
    <div className='login-screen '>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <Input
          text='Usuario'
          type='text'
          name='usuario'
          placeholder='Digite o seu usuario'
          onChange={handleChange}
        />
        <Input 
          text='Senha'
          type='password'
          name='password'
          placeholder='Digite sua senha'
          onChange={handleChange}
        />
        <Submit text='Entrar' />
      </form>
       
    </div>
  )
}

export default Login