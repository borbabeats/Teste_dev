import { useState } from 'react';
import Input from '../Components/form/Input';
import Submit from '../Components/form/Submit';
import api from '../Services/Api'
import { useNavigate } from 'react-router-dom';



const Register = () => {
   const [values, setValues] = useState([])  
  
    const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    if(values.password){
    api.post('/newusers', values)
    .then(res => {
        if(res.data.Status === 'Success') {
            navigate('/')
        }
    })
    .catch(err => console.log(err))
    } else {
      console.error('Password cannot be empty')
    }}



  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value})
    console.log(values)
  }


  return (
    <div className='login-screen '>
      <h1>Register</h1>

      
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

export default Register