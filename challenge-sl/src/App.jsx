import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PessoasDashboard from './Pages/PessoasDashboard.jsx'
import Login from './Pages/Login.jsx'
import ProtocolosDashboard from './Pages/ProtocolosDashboard.jsx'
import CadastraPessoa from './Pages/Pessoa.jsx'
import CadastraProtocolo from './Pages/Protocolo.jsx'
import EditaPessoa from './Pages/EditPessoa.jsx'
import Home from './Pages/Home.jsx'
import Register from './Pages/Register.jsx'




function App() {
  //const isAuthenticated = !!localStorage.getItem('token')
  return (

    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Home />} />
          <Route path='/dashboardpessoas' element={<PessoasDashboard />} />
          <Route path='/dashboardprotocolo' element={<ProtocolosDashboard />} />
          <Route path='/cadastrapessoa' element={<CadastraPessoa />} />
          <Route path='/cadastraprotocolo' element={<CadastraProtocolo />} />
          <Route path='/editarpessoa/:id' element={<EditaPessoa />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

/*<BrowserRouter>
      <Routes>

        
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        
        <Route path='/'  element={isAuthenticated ? <Home/> : <Navigate to='/login'/>} />
        <Route path='/dashboardpessoas' element={isAuthenticated ? <PessoasDashboard/> : <Navigate to='/login'/>}/>
        <Route path='/dashboardprotocolo' element={isAuthenticated ? <ProtocolosDashboard/> : <Navigate to='/login' />}/>
        <Route path='/cadastrapessoa' element={isAuthenticated ? <CadastraPessoa/> : <Navigate to='/login'/>}/>
        <Route path='/cadastraprotocolo' element={isAuthenticated ? <CadastraProtocolo/> : <Navigate to='/login'/>}/>
        <Route path='/editarpessoa/:id' element={isAuthenticated ? <EditaPessoa/> : <Navigate to='/login' />}/>
      </Routes>
    </BrowserRouter>*/