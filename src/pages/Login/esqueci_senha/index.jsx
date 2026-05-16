import { useState } from 'react'
import './esquecisenha.css'
import { Link } from 'react-router-dom'

function EsqueciSenha() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='body'>
      <main className='main_login'>
        <h1>Nexos</h1>

        <form className='form_login' action="">
          <div className='esquecisenha'>
            <h3>CPF</h3>
            <input type="number" required/>
            <h3>Nova senha</h3>
            <input type="number" required/>
            <h3>Confirmar nova senha</h3>
            <input type="number" required/>
          </div>
          <button type="submit" className='button_login'>Salvar nova senha</button>
        </form>
      </main>
    </div>
    </>
  )
}

export default EsqueciSenha
