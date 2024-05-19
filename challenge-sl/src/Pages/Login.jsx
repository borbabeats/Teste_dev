import { useState } from 'react';
import Input from '../Components/form/Input';
import Submit from '../Components/form/Submit';
import api from '../Services/Api'
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Login = () => {
  const [values, setValues] = useState([]) 
  const [cookies, setCookie] = useCookies(['token'])
  //console.log('cookies', cookies)
  const navigate = useNavigate()

  api.defaults.withCredentials = true
 
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await api.post('/api/checklogin', values);
      if (res.data.Status !== '') {
        const myToken = res.data.Status
        console.log('myToken', myToken)
        setCookie('token', myToken, { path: '/' } )
        setTimeout(() => {
          navigate('/');
      }, 300)
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (err) {
      console.error(err);
    }
  }

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value})
  }

  return (
    <div className='login-screen '>
      <div className='bg-info border-1'>Usuario: root<br/>Senha: root</div>
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