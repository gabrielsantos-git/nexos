import { useState } from 'react'
import NavbarProfessor from './Navbar.jsx'
import { Link, Outlet } from 'react-router-dom'

function LayoutProfessor() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavbarProfessor style={{display: 'flex'}} />

    <main style={{marginLeft: '310px', width: '70.4%', height: '101.6vh', paddingTop: '30px'}}>
      <Outlet />
    </main>
    </>
  )
}

export default LayoutProfessor
