import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PessoasDashboard from './Pages/PessoasDashboard.jsx'
import Login from './Pages/Login.jsx'
import ProtocolosDashboard from './Pages/ProtocolosDashboard.jsx'
import CadastraPessoa from './Pages/Pessoa.jsx'
import CadastraProtocolo from './Pages/Protocolo.jsx'
import Home from './Pages/Home.jsx'

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
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
