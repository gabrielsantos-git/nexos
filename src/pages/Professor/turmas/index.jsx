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
      <h1>Minha turmas</h1>
    </header>

    <main>

      <div className='turmas_professores'>
        <div className='info_turmap'>
          <h1>Speaking Test 2</h1>
          <h3>Inglês Intermediário</h3>
          <h3>Sala: 01</h3>

          <div className='botoes'>
            <button type='button'>Ver turma</button>
            <button type='button'>Excluir</button>
          </div>
        </div>

        <div className='nota'>8.5</div>
      </div>

    </main>
    </>
  )
}

export default Turmas_professor
