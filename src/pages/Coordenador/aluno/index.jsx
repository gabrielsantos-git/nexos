import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function Aluno() {
  const [count, setCount] = useState(0)

  return (
    <>

    <header>
      <h1>Alunos</h1>
      <h3>Alunos cadastrados</h3>

      <button type='button'>Novo Aluno</button>
    </header>
    
     <main>

      <input type="text" placeholder='Pesquise aqui...'/>

      <div className='Aluno'>
        <div className='info_aluno'>
          <h1>Gabriel</h1>
          <h3>Inglês Intermediário</h3>
          <h3>ID: A001</h3>

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

export default Aluno
