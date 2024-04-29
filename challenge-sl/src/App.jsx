import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import PessoasDashboard from './Pages/PessoasDashboard.jsx'
import Login from './Pages/Login.jsx'
import ProtocolosDashboard from './Pages/ProtocolosDashboard.jsx'
import CadastraPessoa from './Pages/Pessoa.jsx'
import CadastraProtocolo from './Pages/Protocolo.jsx'
import EditaPessoa from './Pages/EditPessoa.jsx'
import Home from './Pages/Home.jsx'
import Register from './Pages/Register.jsx'
import { useCookies } from "react-cookie"



function App() {

  const [cookies] = useCookies(['token'])

  const isAuthenticated = !!cookies.token
  console.log('auth', isAuthenticated)
  return (

    <div className='App'>
    <BrowserRouter>
      <Routes>

        
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
          
          <Route path='/'  element={isAuthenticated ? <Home/> : <Navigate to='/login'/>} />
          <Route path='/dashboardpessoas' element={isAuthenticated ? <PessoasDashboard/> : <Navigate to='/login'/>}/>
          <Route path='/dashboardprotocolo' element={isAuthenticated ? <ProtocolosDashboard/> : <Navigate to='/login' />}/>
          <Route path='/cadastrapessoa' element={isAuthenticated ? <CadastraPessoa/> : <Navigate to='/login'/>}/>
          <Route path='/cadastraprotocolo' element={isAuthenticated ? <CadastraProtocolo/> : <Navigate to='/login'/>}/>
          <Route path='/editarpessoa/:id' element={isAuthenticated ? <EditaPessoa/> : <Navigate to='/login' />}/>

      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
