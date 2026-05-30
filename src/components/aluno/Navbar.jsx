import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav className='navAluno'>
      <div className='portal_do_aluno'>
      <h1>Portal</h1>
      <h3>do aluno</h3>
      </div>
      
      <div className='interaction'>
        <Link to="/Alunos/avisos">Agendamentos</Link>
        <Link to="/Alunos/turma">Turma</Link>
        <Link to="/Alunos/nota">Notas</Link>
      </div>

      <div className='logout'>
          <a href="#">Sair</a>

          <h2>Nexos</h2>
      </div>
    </nav>
    </>
  )
}

export default Navbar
