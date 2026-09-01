import { BrowserRouter ,Routes, Route, Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import Home from './Home'
import Dashboard from './Dashboard.jsx'
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Dashboard/*" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
