import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function Professores() {
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
      <h1>Professores</h1>
      <h3>Professores cadastrados</h3>

      <button type='button'>Novo professor</button>
    </header>
    
     <main>

      <input type="text" placeholder='Pesquise aqui...'/>

      <div className='Professor'>
        <div className='info_professor'>
          <h1>Igor Pimenta</h1>
          <h3>Inglês Intermediário</h3>
          <h3>ID: P001</h3>

          <div className='botoes'>
            <button type='button'>Atualizar</button>
            <button type='button'>Excluir</button>
          </div>
        </div>
      </div>
    </main>

    <div className='modal_turma'>
      <h3>Igor Pimenta</h3>
      <h3>ID: P001</h3>

      <select name="turmas" id="turmas_select">
          <option value="">Inglês Intermediário - Noite</option>
          <option value="">Inglês Intermediário - Manhã</option>
          <option value="">Inglês Avançado - Noite</option>
        </select>
    </div>
    </>
  )
}

export default Professores
