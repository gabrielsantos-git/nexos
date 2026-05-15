import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function Turmas() {
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

    <header>
      <h1>Turmas</h1>
      <h3>Turmas cadastradas</h3>

      <button type='button'>Nova turma</button>
    </header>
    
     <main>

      <input type="text" placeholder='Pesquise aqui...'/>

      <div className='Turmas'>
        <div className='info_turmas'>
          <h1>Basic A2</h1>
          <h3>Teacher Igor</h3>
          <h3>Sala 01</h3>

          <div className='botoes'>
            <button type='button'>Atualizar</button>
            <button type='button'>Excluir</button>
          </div>
        </div>
      </div>

    </main>
    </>
  )
}

export default Turmas
