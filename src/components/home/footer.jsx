import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function NavbarHome() {
  const [count, setCount] = useState(0)

  return (
    <>
    <footer className='footerHome'>
      <h4>Suporte</h4>
      <h5 className='borocoxo'>nexossuporte@nexos.com</h5>

      <div className='linhaFooter'></div>

      <h4>Sede Nacional</h4>
      <h5 className='borocoxo'>Av. Paulista, 1000 - São Paulo/SP</h5>

      <div className='copyright'><h5>Copyright © 2026 Nexos. Todos os direitos reservados.</h5></div>
    </footer>
    </>
  )
}

export default NavbarHome 
