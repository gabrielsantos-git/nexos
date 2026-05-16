import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function NavbarProfessor() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav className='navProfessor'>
      <div className='portal_do_professor'>
      <h1>Portal</h1>
      <h3>do Professor</h3>
      </div>
      
      <div className='interactionProfessor'>
        <Link to="/Professor/turmas">Turma</Link>
        <Link to="/Professor/atividades">Atividades</Link>
      </div>

      <div className='logout'>
          <a href="#">Sair</a>

          <h2>Nexos</h2>
      </div>
    </nav>
    </>
  )
}

export default NavbarProfessor
