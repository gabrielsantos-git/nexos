import { useState } from 'react'
import Navbar from './Navbar.jsx'
import { Link, Outlet } from 'react-router-dom'

function LayoutHome() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar style={{display: 'flex', justifyContent: 'center'}} />

    </>
  )
}

export default LayoutHome
