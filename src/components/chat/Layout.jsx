import { useState } from 'react'
import NavbarProfessor from './Navbar.jsx'
import { Link, Outlet } from 'react-router-dom'

function LayoutChat() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavbarProfessor style={{display: 'flex'}} />

    <main style={{marginLeft: '15%', width: '70.4%', height: '101.6vh', paddingLeft: '80px', paddingTop: '30px', paddingBottom: '250px'}}>
      <Outlet />
    </main>
    </>
  )
}

export default LayoutChat
