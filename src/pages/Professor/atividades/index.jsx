import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function Atividades() {
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
      <h1>Minhas atividades</h1>

      <button type='button'>Adicionar atividade</button>
    </header>

    <main>

      <div className='atividades_professores'>
        <div className='info_atividades'>
          <h1>Speaking Test 2</h1>
          <h3>Inglês Intermediário</h3>
          <h3>Entrega: 19 de abril de 2026</h3>

          <div className='botoes'>
            <button type='button'>Atualizar</button>
            <button type='button'>Excluir</button>
          </div>
        </div>

        <div className='nota'>8.5</div>
      </div>

    </main>

    <div className='modal_atividade'>
      <h3>Nome da atividade</h3>
      <input type="text" required/>
      <h3>Descreva a atividade</h3>
      <textarea name="" id="" placeholder='Descreva a atividade aqui...' required></textarea>
      <input type="file" />

      <div className='atividade_sc'>
        <button type='button'>Salvar</button>
        <button type='button'>Cancelar</button>
      </div>
    </div>
    </>
  )
}

export default Atividades
