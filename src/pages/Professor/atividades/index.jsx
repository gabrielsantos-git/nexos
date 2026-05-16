import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function AtividadesProfessores() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterTerm, setFilterTerm] = useState('')
  
  const atividades = [
    { nome: 'Speaking Test 2', curso: 'Inglês Intermediário', entrega: '19 de abril de 2026', id: 'AT001' },
    { nome: 'Speaking Test 5', curso: 'Inglês Intermediário', entrega: '13 de abril de 2026', id: 'AT002' },
    { nome: 'Writing Test 1', curso: 'Inglês Avançado', entrega: '20 de abril de 2026', id: 'AT003' },
  ]
  
  const filteredAtividades = atividades.filter(atividade =>
    atividade.nome.toLowerCase().includes(filterTerm.toLowerCase()) ||
    atividade.curso.toLowerCase().includes(filterTerm.toLowerCase()) ||
    atividade.id.toLowerCase().includes(filterTerm.toLowerCase())
  )
  
  const handleSearch = () => {
    setFilterTerm(searchTerm)
  }

  return (
    <>

    <header className='headerCoordenador'>
      <div>
        <h1>Minhas atividades</h1>
      </div>

      <button className='novoAluno' type='button'>Criar atividade</button>
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

      {filteredAtividades.map((atividade, index) => (
        <div key={index} className='atividades_professores'>
          <div className='info_atividades'>
            <h1>{atividade.nome}</h1>
            <h3>{atividade.curso}</h3>
            <h3>Entrega: {atividade.entrega}</h3>

            <div>
              <button type='button' className='atualizar'>Atualizar</button>
              <button type='button' className='excluir'>Excluir</button>
            </div>
          </div>
        </div>
      ))}

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

export default AtividadesProfessores
