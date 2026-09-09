import { useState } from 'react'
import './App.css'

function App() {
  const [tela, setTela] = useState('')
  const [votosA, setVotosA] = useState(0)
  const [votosB, setVotosB] = useState(0)
  const [votosC, setVotosC] = useState(0)

  function digitar(numero: string) {
    setTela((atual) => atual + numero)
  }

  function corrige() {
    setTela('')
  }

  function confirma() {
    if (tela === '1') {
      setVotosA((votos) => votos + 1)
    } else if (tela === '2') {
      setVotosB((votos) => votos + 1)
    } else if (tela === '3') {
      setVotosC((votos) => votos + 1)
    }

    setTela('FIM')
    setTimeout(() => setTela(''), 2000)
  }

  return (
    <div className="urna-wrapper">
      <div className="urna">
        <div className="urna-tela">
          <p className="urna-tela-conteudo">{tela}</p>
        </div>

        <div className="urna-painel">
          <div className="teclado">
            <button type="button" className="tecla" onClick={() => digitar('1')}>1</button>
            <button type="button" className="tecla" onClick={() => digitar('2')}>2</button>
            <button type="button" className="tecla" onClick={() => digitar('3')}>3</button>
            <button type="button" className="tecla" onClick={() => digitar('4')}>4</button>
            <button type="button" className="tecla" onClick={() => digitar('5')}>5</button>
            <button type="button" className="tecla" onClick={() => digitar('6')}>6</button>
            <button type="button" className="tecla" onClick={() => digitar('7')}>7</button>
            <button type="button" className="tecla" onClick={() => digitar('8')}>8</button>
            <button type="button" className="tecla" onClick={() => digitar('9')}>9</button>
            <button type="button" className="tecla tecla-zero" onClick={() => digitar('0')}>0</button>
          </div>

          <div className="acoes">
            <button type="button" className="acao acao-branco">
              BRANCO
            </button>
            <button type="button" className="acao acao-corrige" onClick={corrige}>
              CORRIGE
            </button>
            <button type="button" className="acao acao-confirma" onClick={confirma}>
              CONFIRMA
            </button>
          </div>
        </div>
      </div>

      <p className="resultado-parcial">
        Candidato A: {votosA} | Candidato B: {votosB} | Candidato C: {votosC}
      </p>
    </div>
  )
}

export default App
