import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function Nota() {
  const [count, setCount] = useState(0)

  return (
    <>

    <header className='header_nota'>
      <h1>Minhas notas</h1>
      <h3>Inglês Intermediário - Noite</h3>
    </header>

    <main>

      <div className='Notas_aluno'>

        <div className='notas'>
          <div className='info_nota'>
            <div className='pontos'>
              <h1>8.5</h1>
            </div>

            <div className='info_mat'>
            <h1>Unit 1</h1>
            <h5>Intermediate B1</h5>
          </div>
          </div>

          <h3>07 mai</h3>
        </div>
      </div>
    </main>
    </>
  )
}

export default Nota
