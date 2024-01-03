import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pessoa from './Pages/Pessoa.jsx'
import Login from './Pages/Login.jsx'
import Protocolo from './Pages/Protocolo.jsx'
import Home from './Pages/Home.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cadastrapessoa' element={<Pessoa/>}/>
        <Route path='/protocolo' element={<Protocolo/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
