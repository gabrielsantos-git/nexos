import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function Turma() {
  const [activeTab, setActiveTab] = useState('todas')

  return (
    <>
    <header className='header_turma'>
      <h1>Minhas atividades</h1>
      <h3>Inglês Intermediário - Noite</h3>
    </header>

    <section className='section_turma'>
      <button 
        className={`tab-button ${activeTab === 'todas' ? 'active' : ''}`}
        onClick={() => setActiveTab('todas')}
      >
        Todas
      </button>
      <button 
        className={`tab-button ${activeTab === 'pendentes' ? 'active' : ''}`}
        onClick={() => setActiveTab('pendentes')}
      >
        Pendentes
      </button>
      <button 
        className={`tab-button ${activeTab === 'entregues' ? 'active' : ''}`}
        onClick={() => setActiveTab('entregues')}
      >
        Entregues
      </button>
    </section>

    <main>
      {activeTab === 'todas' && (
        <>
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
        </>
      )}
      {activeTab === 'pendentes' && (
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
      )}
      {activeTab === 'entregues' && (
        <div className='atividades_turma'>
          <div className='infot_atividades'>
            <h1>Speaking Test 1</h1>
            <h3>Inglês Intermediário</h3>
            <h3>Entregue: 10 de abril de 2026</h3>
  
            <div>
              <button type='button' className='botoesturma'>Ver atividade</button>
            </div>
          </div>
        </div>
      )}
    </main>
    </>
  )
}

export default Turma
