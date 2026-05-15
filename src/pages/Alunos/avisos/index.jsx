import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function Avisos() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className='main_aluno'>

      <aside>
        <h4>Welcome</h4>
        <h1>Gabriel Santos</h1>
        <h4 className='msg'>Keep up the great work on your English journey!</h4>
      </aside>

      <div className='Atividades_Recentes'>
        <h1>Atividades recentes</h1>

        <div className='atividade'>
          <div className='info_atividade'>
            <h1>Homework - Unit 7 Exercise</h1>
            <h5>Intermediate B1</h5>
          </div>
          <h3>07 mai</h3>
        </div>
      </div>

      <div className='Notas_Recentes'>
        <h1>Notas Recentes</h1>

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

export default Avisos
