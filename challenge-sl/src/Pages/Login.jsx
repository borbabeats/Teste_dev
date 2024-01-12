import { useState } from 'react';
import Input from '../Components/form/Input';
import Submit from '../Components/form/Submit';
import api from '../Services/Api'
import { useNavigate } from 'react-router-dom';



const Login = () => {
   const [values, setValues] = useState([])  
  
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await api.post('/users', values)
      if(response.data.Status === 'Success') {
        navigate('/paginainicial')
      }
    } catch (err) {
        console.log(err)
   } 
  }


  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value})
    
  }

  return (
    <div className='login-screen '>
      <h1>Login</h1>




      
      <form onSubmit={handleSubmit}>
        <Input
          text='Usuario'
          type='text'
          name='username'
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