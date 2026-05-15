import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 
import LayoutAluno from './components/aluno/Layout.jsx'
import Avisos from './pages/Alunos/avisos'
import Turma from './pages/Alunos/turma'
import Nota from './pages/Alunos/notas'

import LayoutCoordenador from './components/coordenador/Layout.jsx'
import Aluno from './pages/Coordenador/aluno'
import Professores from './pages/Coordenador/professores'
import Turmas from './pages/Coordenador/turmas'

import Login from './pages/Login'
import EsqueciSenha from './pages/Login/esqueci_senha'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LayoutAluno />}>
        <Route index element={<Avisos />}/>
        <Route path='/Alunos/Turma' element={<Turma />}/>
        <Route path='/Alunos/Nota' element={<Nota />}/>
      </Route>

      <Route path='/Coordenador' element={<LayoutCoordenador />}>
        <Route path='/Coordenador/aluno' element={<Aluno />}/>
        <Route path='/Coordenador/professores' element={<Professores />}/>
        <Route path='/Coordenador/turmas' element={<Turmas />}/>
      </Route>

      <Route path='/Login' element={<Login />}/>
      <Route path='/Login/esqueci_senha' element={<EsqueciSenha />}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
