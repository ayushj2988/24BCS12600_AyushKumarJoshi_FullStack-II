import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './Home'
import About from './About'
import './App.css'

function App() {
  return (
    <>
      <Link to="/Home">Home</Link>
      <br />
      <Link to="/About">About</Link>
      <NavLink to="Home"></NavLink>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  )
}

export default App