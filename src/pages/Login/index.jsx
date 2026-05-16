import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function Login() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='body'>
      <main className='main_login'>
        <h1>Nexos</h1>

        <form className='form_login' action="">
          <div ClassName="form-group">
            <h3>CPF</h3>
            <input className='CPF' type="number" required/>
            <h3>Senha</h3>
            <input className='senha' type="number" required/>
          </div>
          <button type="submit" className='button_login'>Acessar</button>
        </form>
        <Link to="/Login/esqueci_senha">Esqueci a senha</Link>

        <h4>Os dados, programas e imagens neste sistema são confidenciais e de uso exclusivo da Spaceclass.
            As imagens dos alunos, professores e colaboradores, incluindo as suas dependências internas e
            externas não poderão ser reproduzidas ou utilizadas para quaisquer fins sem a prévia e expressa
            autorização.</h4>
      </main>
    </div>
    </>
  )
}

export default Login
