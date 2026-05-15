import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function Aluno() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>
      <div className='portal_do_aluno'>
      <h1>Portal</h1>
      <h3>do coordenador</h3>
      </div>
      
      <div className='interaction'>
        <Link to="/Coordenador/aluno">Alunos</Link>
        <Link to="/Coordenador/professores">Professores</Link>
        <Link to="/Coordenador/turmas">Turmas</Link>
        <Link to="/Coordenador/agendamentos">Agendamentos</Link>
      </div>

      <div>
          <a href="#">Sair</a>

          <h2>Nexos</h2>
      </div>
    </nav>

    <head>
      <h1>Cadastrar aluno</h1>
    </head>
    
     <main>
      <form action="">
        <input type="text" />
        <input type="email" />
        <select name="turmas" id="turmas_select">
          <option value="">Inglês Intermediário - Noite</option>
          <option value="">Inglês Intermediário - Manhã</option>
          <option value="">Inglês Avançado - Noite</option>
        </select>
      </form>
    </main>
    </>
  )
}

export default Aluno
