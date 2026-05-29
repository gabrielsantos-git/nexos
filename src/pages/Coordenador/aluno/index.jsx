import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function Aluno() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterTerm, setFilterTerm] = useState('')
  const [matriculaFilter, setMatriculaFilter] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [selectedAluno, setSelectedAluno] = useState(null)
  const [selectedTurma, setSelectedTurma] = useState('')
  const [selectedName, setSelectedName] = useState('')
  const [selectedAction, setSelectedAction] = useState('')
  
  const [alunos, setAlunos] = useState([
    { nome: 'Gabriel', curso: 'Inglês Intermediário', id: 'A001', matriculado: true },
    { nome: 'Maria', curso: 'Inglês Avançado', id: 'A002', matriculado: false },
    { nome: 'João', curso: 'Inglês Básico', id: 'A003', matriculado: true },
  ])
  
  const filteredAlunos = alunos.filter(aluno => {
    const matchesText =
      aluno.nome.toLowerCase().includes(filterTerm.toLowerCase()) ||
      aluno.curso.toLowerCase().includes(filterTerm.toLowerCase()) ||
      aluno.id.toLowerCase().includes(filterTerm.toLowerCase())

    const matchesMatricula =
      matriculaFilter === '' ||
      (matriculaFilter === 'matriculados' && aluno.matriculado) ||
      (matriculaFilter === 'nao-matriculados' && !aluno.matriculado)

    return matchesText && matchesMatricula
  })
  
  const handleSearch = () => {
    setFilterTerm(searchTerm)
  }

  const handleMatriculaFilter = (filter) => {
    setMatriculaFilter(filter)
  }

  const handleOpenModal = (aluno, action) => {
    setSelectedAluno(aluno)
    setSelectedAction(action)
    setSelectedName(aluno.nome)
    setSelectedTurma(aluno.curso)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedAluno(null)
    setSelectedName('')
    setSelectedTurma('')
    setSelectedAction('')
  }

  const handleSalvarModal = () => {
    if (!selectedAluno) {
      handleCloseModal()
      return
    }

    const updatedAlunos = alunos.map(aluno => {
      if (aluno.id !== selectedAluno.id) {
        return aluno
      }

      return {
        ...aluno,
        nome: selectedName,
        curso: selectedTurma || aluno.curso,
      }
    })

    setAlunos(updatedAlunos)
    handleCloseModal()
  }

  return (
    <>

    <header className='headerCoordenador'>
      <div>
        <h1>Alunos</h1>
        <h3>Alunos cadastrados</h3>
      </div>

      <Link to="/Coordenador/aluno/cadastrar_aluno">
        <button className='novoAluno' type='button'>Novo Aluno</button>
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

      <div className='filtro'>
        <button
          className={`buttonFiltro ${matriculaFilter === 'matriculados' ? 'active' : ''}`}
          type='button'
          onClick={() => handleMatriculaFilter('matriculados')}
        >
          Matriculados
        </button>
        <button
          className={`buttonFiltro ${matriculaFilter === 'nao-matriculados' ? 'active' : ''}`}
          type='button'
          onClick={() => handleMatriculaFilter('nao-matriculados')}
        >
          Não Matriculados
        </button>
        <button
          className='buttonFiltro limparFiltro'
          type='button'
          onClick={() => handleMatriculaFilter('')}
        >
          Todos
        </button>
      </div>

      {filteredAlunos.map((aluno, index) => {
        const isNaoMatriculado =
          aluno.matriculado === false ||
          aluno.matriculado === 'false' ||
          aluno.matriculado === 'Não Matriculado' ||
          aluno.matriculado === 'nao-matriculado' ||
          aluno.matriculado === 'nao' ||
          aluno.matriculado === 'não'

        return (
          <div key={index} className='Aluno'>
            <div className='info_aluno'>
              <h1>{aluno.nome}</h1>
              <h3>{aluno.curso}</h3>
              <h3>ID: {aluno.id}</h3>

              <div>
                {!isNaoMatriculado && (
                  <button
                    type='button'
                    className='atualizar'
                    onClick={() => handleOpenModal(aluno, 'atualizar')}
                  >
                    Atualizar
                  </button>
                )}
                {isNaoMatriculado && (
                  <button
                    type='button'
                    className='atualizar'
                    onClick={() => handleOpenModal(aluno, 'atribuir')}
                  >
                    Atribuir turma
                  </button>
                )}
                <button type='button' className='excluir'>Excluir</button>
              </div>
            </div>
          </div>
        )
      })}

      {showModal && selectedAluno && (
      <div className='modal_aluno'>
        <h3>{selectedAction === 'atualizar' ? 'Atualizar aluno' : 'Atribuir turma'}</h3>
        <h4>{selectedAluno.id}</h4>

        {selectedAction === 'atualizar' && (
          <div className='campo-modal'>
            <label htmlFor='nome_aluno'>Nome</label>
            <input
              id='nome_aluno'
              type='text'
              value={selectedName}
              onChange={(e) => setSelectedName(e.target.value)}
            />
          </div>
        )}

        <div className='campo-modal'>
          <label htmlFor='turmas_select'>Turma</label>
          <select
            name='turmas'
            id='turmas_select'
            value={selectedTurma}
            onChange={(e) => setSelectedTurma(e.target.value)}
          >
            <option value=''>Selecione uma turma</option>
            <option value='Inglês Intermediário - Noite'>Inglês Intermediário - Noite</option>
            <option value='Inglês Intermediário - Manhã'>Inglês Intermediário - Manhã</option>
            <option value='Inglês Avançado - Noite'>Inglês Avançado - Noite</option>
          </select>
        </div>

        <div className='SalvarCancelar'>
            <button className='cancelar' onClick={handleCloseModal}>Cancelar</button>
            <button className='salvar' onClick={handleSalvarModal}>Salvar</button>
        </div>
      </div>
    )}

    </main>
    </>
  )
}

export default Aluno
