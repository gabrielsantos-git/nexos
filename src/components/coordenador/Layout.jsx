import { useState } from 'react'
import NavbarCoordenador from './Navbar.jsx'
import { Link, Outlet } from 'react-router-dom'

function LayoutCoordenador() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavbarCoordenador style={{display: 'flex'}} />

    <main style={{marginLeft: '320px', width: '70.4%', height: '101.6vh', paddingLeft: '80px', paddingTop: '30px'}}>
      <Outlet />
    </main>
    </>
  )
}

export default LayoutCoordenador
