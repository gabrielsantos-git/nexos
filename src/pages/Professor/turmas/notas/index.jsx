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
      <h1>Notas</h1>

      <button type='button'>Adicionar nota</button>
    </header>

    <main>     

       <form action="">
        <h1>Pesquise o aluno</h1>
        <input type="search" required/>      
        <h1>Adicionar nota</h1>
        <input type="number" required/>

        <select name="" id="">
          <option value="">Inglês Intermediário - Noite</option>
          <option value="">Inglês Intermediário - Manhã</option>
          <option value="">Inglês Avançado - Noite</option>
        </select>

        <button type='button'>Salvar</button>
      </form>

    </main>
    </>
  )
}

export default Turmas_professor
