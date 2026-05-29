import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './pages/Login/esqueci_senha/esquecisenha.css'
import LayoutAluno from './components/aluno/Layout.jsx'
import Avisos from './pages/Alunos/avisos'
import Turma from './pages/Alunos/turma'
import Nota from './pages/Alunos/notas'

import LayoutCoordenador from './components/coordenador/Layout.jsx'
import Aluno from './pages/Coordenador/aluno'
import CadastrarAluno from './pages/Coordenador/aluno/cadastrar_aluno'
import Professores from './pages/Coordenador/professores'
import CadastrarProfessores from './pages/Coordenador/professores/cadastrar_professores'
import Turmas from './pages/Coordenador/turmas'
import CadastrarTurmas from './pages/Coordenador/turmas/cadastrar_turmas'
import CadastroProfessores from './pages/Coordenador/CadastroProfessores'

import LayoutProfessor from './components/professor/Layout.jsx'
import AtividadesProfessores from './pages/Professor/atividades'
import TurmasProfessor from './pages/Professor/turmas'
import AlunosProfessor from './pages/Professor/turmas/alunos'
import NotasProfessor from './pages/Professor/turmas/notas'

import Login from './pages/Login'
import EsqueciSenha from './pages/Login/esqueci_senha'

import Home from './pages/Home'
import NavbarHome from './components/home/Navbar.jsx'
import FooterHome from './components/home/footer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<><NavbarHome /><Home /><FooterHome /></>}/>

      <Route path='/Alunos' element={<LayoutAluno />}>
        <Route path='/Alunos/Avisos' element={<Avisos />}/>
        <Route path='/Alunos/Turma' element={<Turma />}/>
        <Route path='/Alunos/Nota' element={<Nota />}/>
      </Route>

      <Route path='/Coordenador' element={<LayoutCoordenador />}>
        <Route path='/Coordenador/aluno' element={<Aluno />}/>
        <Route path='/Coordenador/aluno/cadastrar_aluno' element={<CadastrarAluno />}/>
        <Route path='/Coordenador/professores' element={<Professores />}/>
        <Route path='/Coordenador/professores/cadastrar_professores' element={<CadastrarProfessores />}/>
        <Route path='/Coordenador/turmas' element={<Turmas />}/>
        <Route path='/Coordenador/turmas/cadastrar_turmas' element={<CadastrarTurmas />}/>
        <Route path='/Coordenador/CadastroProfessores' element={<CadastroProfessores />}/>
      </Route>

      <Route path='/Professor' element={<LayoutProfessor />}>
        <Route path='atividades' element={<AtividadesProfessores />}/>
        <Route path='turmas' element={<TurmasProfessor />}/>
        <Route path='alunos' element={<AlunosProfessor />}/>
        <Route path='notas' element={<NotasProfessor />}/>
      </Route>

      <Route path='/Login' element={<Login />}/>
      <Route path='/Login/esqueci_senha' element={<EsqueciSenha />}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
