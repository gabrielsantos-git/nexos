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
            <h3>Confirmar CPF</h3>
            <input className='CPF' type="number" required/>
            <h5 className='erro'>CPF não encontrado!</h5>
            <h3>Nova senha</h3>
            <input className='senha' type="number" required/>
            <h3>Confirmar nova senha</h3>
            <input className='senha' type="number" required/>
            <h5 className='erro'>As senhas não coincidem!</h5>
          </div>
          <button type="submit" className='button_login'>Salvar nova senha</button>
        </form>
      </main>
    </div>
    </>
  )
}

export default EsqueciSenha
