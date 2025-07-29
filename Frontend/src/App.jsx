import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router'
import LandingPage from './pages/LandingPage'
import Signup from './pages/Signup'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<LandingPage/>}/>
        <Route path='/signup' element = {<Signup/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App