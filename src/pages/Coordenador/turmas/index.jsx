import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function Turmas() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterTerm, setFilterTerm] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [selectedTurma, setSelectedTurma] = useState(null)
  const [selectedTurmaOption, setSelectedTurmaOption] = useState('')
  
  const turmas = [
    { nome: 'Basic A2', teacher: 'Teacher Igor', sala: 'Sala 01', id: 'T001' },
    { nome: 'Intermediate B1', teacher: 'Teacher Ana', sala: 'Sala 02', id: 'T002' },
    { nome: 'Advanced C1', teacher: 'Teacher Carlos', sala: 'Sala 03', id: 'T003' },
  ]
  
  const filteredTurmas = turmas.filter(turma =>
    turma.nome.toLowerCase().includes(filterTerm.toLowerCase()) ||
    turma.teacher.toLowerCase().includes(filterTerm.toLowerCase()) ||
    turma.sala.toLowerCase().includes(filterTerm.toLowerCase()) ||
    turma.id.toLowerCase().includes(filterTerm.toLowerCase())
  )
  
  const handleSearch = () => {
    setFilterTerm(searchTerm)
  }
  
  const handleAtualizar = (turma) => {
    setSelectedTurma(turma)
    setSelectedTurmaOption(turma.nome)
    setShowModal(true)
  }
  
  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedTurma(null)
    setSelectedTurmaOption('')
  }

  return (
    <>

    <header className='headerCoordenador'>
      <div>
        <h1>Turmas</h1>
        <h3>Turmas cadastradas</h3>
      </div>

      <Link to="/Coordenador/turmas/cadastrar_turmas">
        <button className='novoAluno' type='button'>Nova Turma</button>
      </Link>
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
        <div key={index} className='Turmas'>
          <div className='info_turmas'>
            <h1>{turma.nome}</h1>
            <h3>{turma.teacher}</h3>
            <h3>{turma.sala}</h3>

            <div>
              <button type='button' className='atualizar' onClick={() => handleAtualizar(turma)}>Atualizar</button>
              <button type='button' className='excluir'>Excluir</button>
            </div>
          </div>
        </div>
      ))}

    </main>

      {showModal && selectedTurma && (
      <div className='modal_professor'>
        <h3>Associe a turma ao professor</h3>
        <h3>Turma: {selectedTurma.nome}</h3>

        <select
          name="turmas"
          id="turmas_select"
          value={selectedTurmaOption}
          onChange={(e) => setSelectedTurmaOption(e.target.value)}
        >
            <option value="">Selecione uma turma</option>
            {turmas.map((turma, index) => (
              <option key={index} value={turma.nome}>
                {turma.nome}
              </option>
            ))}
        </select>

        <h3>Turma: {selectedTurma.nome}</h3>

        <select
          name="turmas"
          id="turmas_select"
          value={selectedTurmaOption}
          onChange={(e) => setSelectedTurmaOption(e.target.value)}
        >
            <option value="">Selecione uma turma</option>
            {turmas.map((turma, index) => (
              <option key={index} value={turma.nome}>
                {turma.nome}
              </option>
            ))}
        </select>


        <div className='SalvarCancelar'>
            <button className='cancelar' onClick={handleCloseModal}>Cancelar</button>
            <button className='salvar' onClick={handleCloseModal}>Salvar</button>
        </div>
      </div>
      )}

    </>
  )
}

export default Turmas
