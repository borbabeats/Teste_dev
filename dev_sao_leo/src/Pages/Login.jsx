import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';


function Login() {
  const schema = yup.object().shape({
    user: yup.string().required('Campo "user" e obrigatorio'),
    password: yup.string().required('Campo "senha" e obrigatorio')
  })


  async function handleLogin(values) {
    try {
      const response = await axios.post('http:/localhost:5000/login', values)
      const data = response.data
      if (response.status === 200) {
        
       
        //Send form data to MySQL database
        await axios.post('http:/localhost:3000/login', values)
      } else {
        alert(data.message)
      }
    } catch (error) {
      console.error(error)
      alert('An error occurred while logging in')
    }
  }

  return (
    <>
      <h1>Login</h1>
      <Formik initialValues={{ user: '', password: '' }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          handleLogin(values)
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type='text' name='user' />
            <ErrorMessage name='user' component='div' />
            <Field type='password' name='password' />
            <ErrorMessage name='password' component='div' />
            <button type='submit' disabled={isSubmitting}>
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default Login