import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function Chat() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='ButtonChat'>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chat-dots-fill" viewBox="0 0 16 16">
        <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
      </svg>
    </div>

    <div className='windowsChat'>

      <div className='HeaderChat'><h3>ChatNexos</h3></div>

      <div className='msgChat'>
        <h4>O que deseja?</h4>
        <h4>1. Agendamento;</h4>
        <h4>2. Minha turma.</h4>

        <div className='infoDate'><h5>11:54</h5></div>
      </div>

      <div className='msgUser'>
        <h4>1.</h4>

        <div className='infoDate'><h5>12:10</h5></div>
      </div>

      <div className='Send'>
        <input type="text"  placeholder='Digite aqui...'/>
        <div className='enviar'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
          </svg>
        </div>
      </div>
    </div>
    </>
  )
}

export default Chat
