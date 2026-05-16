import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function AlunosProfessor() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterTerm, setFilterTerm] = useState('')
  
  const alunos = [
    { nome: 'Gabriel', curso: 'Inglês Intermediário', id: 'A001' },
    { nome: 'Filipe', curso: 'Inglês Intermediário', id: 'A002' },
    { nome: 'Maria', curso: 'Inglês Avançado', id: 'A003' },
  ]
  
  const filteredAlunos = alunos.filter(aluno =>
    aluno.nome.toLowerCase().includes(filterTerm.toLowerCase()) ||
    aluno.curso.toLowerCase().includes(filterTerm.toLowerCase()) ||
    aluno.id.toLowerCase().includes(filterTerm.toLowerCase())
  )
  
  const handleSearch = () => {
    setFilterTerm(searchTerm)
  }

  return (
    <>

    <header className='headerCoordenador'>
        <h1>Minhas turmas</h1>
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

      {filteredAlunos.map((aluno, index) => (
        <div key={index} className='atividadesprofessores'>
          <div className='info_atividadepro'>
            <h1>{aluno.nome}</h1>
            <h3>{aluno.curso}</h3>
          </div>  
            <Link className='LinkProfessor' to="/Professor/notas">
              <button className='buttonAtualizar' type='button'>Atualizar</button>
            </Link>
        </div>
      ))}

    </main>
    </>
  )
}

export default AlunosProfessor
