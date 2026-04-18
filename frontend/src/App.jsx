import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import AppLayout from './Layout/AppLayout'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import Login from './Pages/Login'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route element={<AppLayout/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Route>
      {/* <Route path='/' element={<Login/>}/> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
