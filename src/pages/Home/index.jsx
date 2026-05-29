import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className='Home'>

    <div className='bannerHome'>
      <div className='infoBanner'>
        <h3>BEM-VINDO A NEXOS</h3>
        <h2>Inglês de uma forma eficaz!</h2>
        <h5>Conquiste sua influência com aulas
          exclusivas e em tempo real. A Spaceclass molda o ensino
          de acordo com o seu ritmo e os seus planos.
        </h5>

        <Link className='metodologia' to="#">Conheça a nossa metodologia</Link>  
      </div> 

      <img className='imgmenina' src="/src/assets/smiling-teenager-reading-book 1.png" alt="" />     
    </div>

    <div className='cardHome'>
      <div className='card1' id='CardHome'>
        <h3>Aprenda de forma eficiente.</h3>
        <div className='linha'></div>  
      </div>  
      <div className='card2' id='CardHome'>
        <h3>Pratique com interação real.</h3>
        <div className='linha'></div>  
      </div>  
      <div className='card3' id='CardHome'>
        <h3>Vença os desafios do mercado.</h3>
        <div className='linha'></div>  
      </div>  
    </div>   

    <div className='mainHome'>
      <div className='sectionOportunidades'>
        <div className='imgHome'>
          <div className='imgOportunidade'></div>
          <div className='imgPerdeu'></div>
        </div>

        <div className='infoHome'>
          <h2>Quantas <strong>oportunidades</strong> você
          <strong> perdeu </strong> por não falar inglês?</h2>

          <h5>Em um país onde apenas 1% da população fala inglês fluente,
            fica evitente que os métodos de ensino de idiomas utilizadas
            até hoje são ineficientes.
          </h5>

          <Link to="#">Saiba mais</Link>
        </div>
      </div>

      <div className='sectionSolução'>
        <div className='sistemasSolucionam'>
          <h4>Resultados comprovados</h4>
          <h2>Sistemas que solucionam</h2>
          <h5>Com mais de 21 anos de experiência, oferecemos soluções
              tecnológicas personalizadas que conectam empresas ao
              sucesso, com automação, eficiência e segurança para
              resultados reais.</h5>

          <div className='estatisticas'>
            <div className='numerosAlunos'>
              <h1>100+</h1>
              <h3>Alunos</h3>
            </div>
            <div className='numerosAlunos'>
              <h1>200+</h1>
              <h3>Alunos</h3>
            </div>
          </div>
          
        </div> 

        <div className='imgSolucao'></div>
      </div>
    </div>   
    </main>
    </>
  )
}

export default Home
