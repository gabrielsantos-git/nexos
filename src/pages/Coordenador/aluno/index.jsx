import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function Aluno() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterTerm, setFilterTerm] = useState('')
  
  const alunos = [
    { nome: 'Gabriel', curso: 'Inglês Intermediário', id: 'A001' },
    { nome: 'Maria', curso: 'Inglês Avançado', id: 'A002' },
    { nome: 'João', curso: 'Inglês Básico', id: 'A003' },
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

      {filteredAlunos.map((aluno, index) => (
        <div key={index} className='Aluno'>
          <div className='info_aluno'>
            <h1>{aluno.nome}</h1>
            <h3>{aluno.curso}</h3>
            <h3>ID: {aluno.id}</h3>

            <div>
              <button type='button' className='atualizar'>Atualizar</button>
              <button type='button' className='excluir'>Excluir</button>
            </div>
          </div>
        </div>
      ))}

    </main>
    </>
  )
}

export default Aluno
