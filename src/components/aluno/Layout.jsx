import { useState } from 'react'
import Navbar from './Navbar.jsx'
import { Link, Outlet } from 'react-router-dom'

function LayoutAluno() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar style={{display: 'flex'}} />

    <main style={{marginLeft: '310px', width: '70.4%', height: '101.6vh', paddingTop: '30px'}}>
      <Outlet />
    </main>
    </>
  )
}

export default LayoutAluno
