import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function Turmas_professor() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>
      <div className='portal_do_aluno'>
      <h1>Portal</h1>
      <h3>do professor</h3>
      </div>
      
      <div className='interaction'>
        <Link to="/Professor/atividades">Atividades</Link>
        <Link to="/Professor/turmas">Turmas</Link>
      </div>

      <div>
          <a href="#">Sair</a>

          <h2>Nexos</h2>
      </div>
    </nav>

    <header>
      <h1>Alunos</h1>
    </header>

    <main>

      <div className='atividades_professores'>
        <div className='info_atividadep'>
          <h1>Gabriel</h1>
          <h3>Inglês Intermediário</h3>
          <h3>Entrega: 19 de abril de 2026</h3>

          <div className='nota_professor'>
            <h1>8.5</h1>
            </div>
        </div>  

          <button type='button'>Atualizar</button>
      </div>

    </main>
    </>
  )
}

export default Turmas_professor
