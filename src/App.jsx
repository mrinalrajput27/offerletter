import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './components/LandingPage/Landing'
import Auth from './components/Auth/Auth'
import SignUp from './components/Auth/SignUp'



function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Landing}/>
      <Route path='/auth' Component={Auth}/>
      <Route path='/auth/signup' Component={SignUp}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
