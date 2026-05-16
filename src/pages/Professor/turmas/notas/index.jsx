import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function NotasProfessor() {
  const [count, setCount] = useState(0)

  return (
    <>

    <header className='headerNotas'>
      <h1>Notas</h1>
    </header>

    <main>     

       <form className='formNotasP' action="">
        <h3>Pesquise o aluno</h3>
        <div className='pesquisar'>
          <input className='pesquisarAluno' type="text" placeholder='Pesquise aqui...'/>
          <button className='buttonPesquisar' type='button'>Pesquisar</button>
        </div>  
        <h3>Adicionar nota</h3>
        <input className='ProfessorNotas' type="number" required/>

        <h3>Escoha uma turma</h3>
        <select className='selectTurma' name="" id="">
          <option value="">Inglês Intermediário - Noite</option>
          <option value="">Inglês Intermediário - Manhã</option>
          <option value="">Inglês Avançado - Noite</option>
        </select>

        <button className='salvarNota' type='button'>Salvar</button>
      </form>

    </main>
    </>
  )
}

export default NotasProfessor
