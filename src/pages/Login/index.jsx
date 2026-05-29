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
            <h5 className='erro'>CPF não encontrado!</h5>
            <h3>Senha</h3>
            <input className='senha' type="number" required/>
            <h5 className='erro'>Senha incorreta!</h5>
          </div>
          <button type="submit" className='button_login'>Acessar</button>
        </form>
        <Link to="/Login/esqueci_senha">Esqueci a senha</Link>
      </main>
    </div>
    </>
  )
}

export default Login
