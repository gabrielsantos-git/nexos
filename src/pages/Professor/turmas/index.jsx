import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function TurmasProfessor() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterTerm, setFilterTerm] = useState('')
  
  const turmas = [
    { nome: 'Speaking Test 2', curso: 'Inglês Intermediário', sala: 'Sala 01', id: 'T001' },
    { nome: 'Speaking Test 6', curso: 'Inglês Intermediário', sala: 'Sala 07', id: 'T002' },
    { nome: 'Writing Test 1', curso: 'Inglês Avançado', sala: 'Sala 03', id: 'T003' },
  ]
  
  const filteredTurmas = turmas.filter(turma =>
    turma.nome.toLowerCase().includes(filterTerm.toLowerCase()) ||
    turma.curso.toLowerCase().includes(filterTerm.toLowerCase()) ||
    turma.sala.toLowerCase().includes(filterTerm.toLowerCase()) ||
    turma.id.toLowerCase().includes(filterTerm.toLowerCase())
  )
  
  const handleSearch = () => {
    setFilterTerm(searchTerm)
  }

  return (
    <>
    <header className='headerCoordenador'>
      <div>
        <h1>Minhas turmas</h1>
      </div>
    </header>

    <main>

      <div className='pesquisar'>
        <input 
          className='pesquisarAluno' 
          type="text" 
          placeholder='Pesquise aqui...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className='buttonPesquisar' type='button' onClick={handleSearch}>Pesquisar</button>
      </div> 

      {filteredTurmas.map((turma, index) => (
        <div key={index} className='turmas_professores'>
          <div className='info_turmap'>
            <h1>{turma.nome}</h1>
            <h3>{turma.curso}</h3>
            <h3>Sala: {turma.sala}</h3>

            <div>
              <Link to="/Professor/alunos">
                <button className='verTurma' type='button'>Ver turma</button>
              </Link  >  
            </div>
          </div>
        </div>
      ))}

    </main>
    </>
  )
}

export default TurmasProfessor
