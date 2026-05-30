import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

const agendamentos = [
  {
    id: 1,
    titulo: 'Agendamento 1',
    detalhe: 'Horário: 10h30min | Data: 12/06/2026',
    status: 'em aberto',
  },
  {
    id: 2,
    titulo: 'Agendamento 2',
    detalhe: 'Horário: 11h10min | Data: 20/06/2026',
    status: 'cancelado',
  },
  {
    id: 3,
    titulo: 'Agendamento 3',
    detalhe: 'Horário: 14h00min | Data: 22/06/2026',
    status: 'concluido',
  },
]

function AgendamentosCoordenador() {
  const [activeTab, setActiveTab] = useState('todos')

  const tabs = [
    { key: 'em aberto', label: 'Em aberto' },
    { key: 'cancelado', label: 'Cancelado' },
    { key: 'concluido', label: 'Concluído' },
    { key: 'todos', label: 'Todos' },
  ]

  const filteredAgendamentos =
    activeTab === 'todos'
      ? agendamentos
      : agendamentos.filter((item) => item.status === activeTab)

  return (
    <>
      <header className='header_agenda'>
        <h1>Agendamentos</h1>
      </header>

      <main>
        <section className='section_turma'>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type='button'
              className={`tab-button ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </section>

        {filteredAgendamentos.length === 0 ? (
          <div className='Agendamento_aluno'>
            <div className='notas'>
              <div className='info_nota'>
                <div className='info_agendamento'>
                  <h1>Nenhum agendamento encontrado</h1>
                  <h5>Tente outra aba ou aguarde novos agendamentos.</h5>
                </div>
              </div>
            </div>
          </div>
        ) : (
          filteredAgendamentos.map((item) => (
            <div key={item.id} className='Agendamento_aluno'>
              <div className='agendamentos'>
                <div className='info_agenda'>
                  <div className='info_agendamento'>
                    <h1>{item.titulo}</h1>
                    <h5>{item.detalhe}</h5>
                    <Link>
                      <h4>Excluir</h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </main>
    </>
  )
}

export default AgendamentosCoordenador