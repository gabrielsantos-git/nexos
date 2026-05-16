import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function CadastroProfessores() {
  const [count, setCount] = useState(0)

  return (
    <>

    <header className='headerCoordenador'>
      <div>
        <h1>Cadastre um novo professor</h1>
      </div>
    </header>
    
     <main>

      <form className='formNProfessor' action="">
        <h2>Nome</h2>
        <input type="text" />
        <h2>Email</h2>
        <input type="email" />
        <h2>Senha</h2>
        <input type="text" />

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

export default CadastroProfessores
