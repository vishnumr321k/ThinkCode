import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router'
import LandingPage from './pages/LandingPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<LandingPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App