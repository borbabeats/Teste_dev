import { useState } from 'react';
import Input from '../Components/form/Input';
import Submit from '../Components/form/Submit';
import api from '../Services/Api'; // Make sure this is correctly imported
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import LinkButton from '../Components/form/LinkButton';

const Login = () => {
  const [values, setValues] = useState({});
  const [cookies, setCookie] = useCookies(['token']);
  const navigate = useNavigate();

  api.defaults.withCredentials = true; // Ensure credentials are sent with the request

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://teste-dev-server-side.onrender.com/api/checklogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (data.Status && data.Status !== '') {
        const myToken = data.Status;
        localStorage.setItem('token', myToken);

        
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        console.log('Login failed response:', data);
        alert('Erro de login. Por favor, verifique suas credenciais');
      }
    } catch (err) {
      console.error('Erro no login:', err);
      alert('Erro no login. Tente novamente mais tarde.');
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className='login-screen'>
      <div className='bg-info border-1'>Usuário: root<br/>Senha: root</div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <Input
          text='Usuário'
          type='text'
          name='username'
          placeholder='Digite o seu usuário'
          onChange={handleChange}
        />
        <Input
          text='Senha'
          type='password'
          name='password'
          placeholder='Digite sua senha'
          onChange={handleChange}
        />
        <Submit className='btn btn-dark' text='Enviar' />
      </form>
    </div>
  );
};

export default Login;
