import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function NavbarCoordenador() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav className='navCoordenador'>
      <div className='portal_do_coordenador'>
      <h1>Portal</h1>
      <h3>do coordenador</h3>
      </div>
      
      <div className='interactionCoordenador'>
        <Link to="/Coordenador/aluno">Alunos</Link>
        <Link to="/Coordenador/professores">Professores</Link>
        <Link to="/Coordenador/turmas">Turmas</Link>
        <Link to="/Coordenador/agendamentos">Agendamentos</Link>
      </div>

      <div className='logout'>
          <a href="#">Sair</a>

          <h2>Nexos</h2>
      </div>
    </nav>
    </>
  )
}

export default NavbarCoordenador
