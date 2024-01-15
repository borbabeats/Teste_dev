import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PessoasDashboard from './Pages/PessoasDashboard.jsx'
import Login from './Pages/Login.jsx'
import ProtocolosDashboard from './Pages/ProtocolosDashboard.jsx'
import CadastraPessoa from './Pages/Pessoa.jsx'
import CadastraProtocolo from './Pages/Protocolo.jsx'
import Home from './Pages/Home.jsx'
import Register from './Pages/Register.jsx'





function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>

        
        <Route path='/login' element={<Login/>}/>
        
          <Route path='/register' element={<Register/>}/>
          <Route path='/'  element={<Home/>}/>
          <Route path='/dashboardpessoas' element={<PessoasDashboard/>}/>
          <Route path='/dashboardprotocolo' element={<ProtocolosDashboard/>}/>
          <Route path='/cadastrapessoa' element={<CadastraPessoa/>}/>
          <Route path='/cadastraprotocolo' element={<CadastraProtocolo/>}/>
    
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
