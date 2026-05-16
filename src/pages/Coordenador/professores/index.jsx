import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function Professores() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterTerm, setFilterTerm] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [selectedProfessor, setSelectedProfessor] = useState(null)
  
  const professores = [
    { nome: 'Igor Pimenta', curso: 'Inglês Intermediário', id: 'P001' },
    { nome: 'Ana Silva', curso: 'Inglês Avançado', id: 'P002' },
    { nome: 'Carlos Santos', curso: 'Inglês Básico', id: 'P003' },
  ]
  
  const filteredProfessores = professores.filter(professor =>
    professor.nome.toLowerCase().includes(filterTerm.toLowerCase()) ||
    professor.id.toLowerCase().includes(filterTerm.toLowerCase())
  )
  
  const handleSearch = () => {
    setFilterTerm(searchTerm)
  }
  
  const handleAtualizar = (professor) => {
    setSelectedProfessor(professor)
    setShowModal(true)
  }
  
  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedProfessor(null)
  }

  return (
    <>

    <header className='headerCoordenador'>
      <div>
        <h1>Professores</h1>
        <h3>Professores cadastrados</h3>
      </div>

      <Link to="/Coordenador/professores/cadastrar_professores">
        <button className='novoAluno' type='button'>Novo Professor</button>
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

      {filteredProfessores.map((professor, index) => (
        <div key={index} className='Professor'>
          <div className='info_professor'>
            <h1>{professor.nome}</h1>
            <h3>{professor.curso}</h3>
            <h3>ID: {professor.id}</h3>

            <div className='botoes'>
              <button type='button' className='atualizar' onClick={() => handleAtualizar(professor)}>Atualizar</button>
              <button type='button' className='excluir'>Excluir</button>
            </div>
          </div>
        </div>
      ))}
    </main>

    {showModal && selectedProfessor && (
      <div className='modal_turma'>
        <h3>{selectedProfessor.nome}</h3>
        <h3>ID: {selectedProfessor.id}</h3>

        <select name="turmas" id="turmas_select">
            <option value="">Inglês Intermediário - Noite</option>
            <option value="">Inglês Intermediário - Manhã</option>
            <option value="">Inglês Avançado - Noite</option>
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

export default Professores
