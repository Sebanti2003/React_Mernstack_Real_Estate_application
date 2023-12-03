import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Signin from './components/Signin'
import Home from './components/Home'
import Signup from './components/Signup'
import About from './components/About'
import Profile from './components/Profile'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App
