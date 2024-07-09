import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import { Dashboard } from './Pages/Dashboard'
import Home from './Pages/Home'
import Category from './Pages/Category'
import Contest from './Pages/Contest'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/category' element={<Category/>}/>
      <Route path='/contest' element={<Contest/>}/>
    </Routes>
    </>
  )
}

export default App
