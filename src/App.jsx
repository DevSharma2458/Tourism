// import { useState } from 'react'

import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'

import Cities from './pages/Cities'
import Explore from './pages/Explore'

function App() {
  
  

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/cities" element={<Cities />} />
        
        <Route path="/explore/:cityId" element={<Explore />} />
      </Routes>
      r</BrowserRouter>
    </div>
  )
}

export default App
