import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function NavbarHome() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav className='navHome'>
      <div className='NavBarHome'>
        <Link className='Nexos' to="/">Nexos</Link>

        <div className='interactionHome'>
          <Link to="/">Quem somos?</Link>
          <Link to="/Login">Matricular-se</Link>
          <Link to="/Login">Portal</Link>
        </div>
      </div>
    </nav>
    </>
  )
}

export default NavbarHome 
