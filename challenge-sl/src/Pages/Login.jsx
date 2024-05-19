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
    console.log('handleSubmit triggered'); // Log to ensure the function is called
  
    try {
      console.log('Form values:', values); // Log form values
  
      // Send POST request to the login endpoint with the form values
      const res = await api.post('/api/checklogin', values);
  
      // Log the response data for debugging
      console.log('Response data:', res.data);
  
      // Check if login was successful
      if (res.data.Status && res.data.Status !== '') {
        const myToken = res.data.Status;
        console.log('Token received:', myToken); // Debugging: log the received token
  
        // Set the token in cookies
        setCookie('token', myToken, { path: '/' });
  
        // Delay navigation by 300ms to ensure cookie is set
        setTimeout(() => {
          navigate('/');
        }, 300);
      } else {
        // Log the response data to understand why it failed
        console.log('Login failed response:', res.data);
        alert('Login failed. Please check your credentials.');
      }
    } catch (err) {
      console.error('Login error:', err); // Enhanced error logging
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