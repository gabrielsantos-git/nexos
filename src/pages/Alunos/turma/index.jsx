import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function Turma() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className='header_turma'>
      <h1>Minhas atividades</h1>
      <h3>Inglês Intermediário - Noite</h3>
    </header>

    <section className='section_turma'>
      <a href="#">Todas</a>
      <a href="#">Pendentes</a>
      <a href="#">Entregues</a>
    </section>

    <main>

      <div className='atividades_turma'>
        <div className='infot_atividades'>
          <h1>Speaking Test 2</h1>
          <h3>Inglês Intermediário</h3>
          <h3>Entrega: 19 de abril de 2026</h3>
    
          <div>
            <button type='button' className='botoesturma'>Enviar atividade</button>
          </div>
        </div>
      </div>

    </main>
    </>
  )
}

export default Turma
