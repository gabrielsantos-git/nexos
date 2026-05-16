import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function CadastrarTurma() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className='headerCoordenador'>
      <div>
        <h1>Cadastre uma nova turma</h1>
      </div>
    </header>
    
     <main>

      <form className='formNProfessor' action="">
        <h2>Nome</h2>
        <input type="text" />
        <h2>Professor</h2>
        <select name="professor" id="professor_select">
          <option value="">Igor Pimenta</option>
          <option value="">Calor Santos</option>
          <option value="">Ana Silva</option>
        </select>

        <h2>Turma</h2>
        <select name="turmas" id="turmas_select">
          <option value="">Inglês Intermediário - Noite</option>
          <option value="">Inglês Intermediário - Manhã</option>
          <option value="">Inglês Avançado - Noite</option>
        </select>

        <div className='salvaCancelar'>
          <button className='cancelar'>Cancelar</button>
          <button className='salvar'>Salvar</button>
        </div>
      </form>
    </main>
    </>
  )
}

export default CadastrarTurma
