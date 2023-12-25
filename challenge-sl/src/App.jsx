import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pessoa from './Pages/Pessoa.jsx'
import Login from './Pages/Login.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Pessoa/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
