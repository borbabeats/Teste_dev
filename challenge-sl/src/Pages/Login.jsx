import { useState } from 'react';
import Input from '../Components/form/Input';
import Submit from '../Components/form/Submit';
import api from '../Services/Api'
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Login = () => {
  const [values, setValues] = useState({}) 
  const [cookies, setCookie] = useCookies(['token'])

  const navigate = useNavigate()

  api.defaults.withCredentials = true
 
  async function handleSubmit(e) {
    e.preventDefault();
  
    try {
   
      // Enviar solicitação POST para o endpoint de login com os valores do formulário
      const res = await fetch('https://teste-dev-server-side.onrender.com/api/checklogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
        credentials: 'include', // Inclui cookies na solicitação
      });
  
      // Converter a resposta para JSON
      const data = await res.json();
      console.log('Response data:', data);
  
      // Verificar se o login foi bem-sucedido
      if (data.Status && data.Status !== '') {
        const myToken = data.Status;
        console.log('Token received:', myToken); // Debugging: log the received token
  
        // Definir o token nos cookies
        setCookie('token', myToken, { path: '/' });
  
        // Delay navigation by 9000ms to ensure cookie is set
        setTimeout(() => {
          navigate('/');
        }, 9000);
      } else {
        // Log the response data to understand why it failed
        console.log('Login failed response:', data);
        alert('Erro de login. Por favor, verifique suas credenciais');
      }
    } catch (err) {
      console.error('Erro no login:', err); // Enhanced error logging
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