import { useState } from 'react'
import './App.css'

const CANDIDATOS: Record<string, string> = {
  '1': 'Candidato A',
  '2': 'Candidato B',
  '3': 'Candidato C',
}

function App() {
  const [tela, setTela] = useState('')
  const [modo, setModo] = useState<'digitando' | 'nome' | 'fim'>('digitando')
  const [, setVotosA] = useState(0)
  const [, setVotosB] = useState(0)
  const [, setVotosC] = useState(0)

  function tocarSomConfirmacao() {
    new Audio('/som-urna.mp3').play()
  }

  function digitar(numero: string) {
    if (modo === 'fim') {
      setModo('digitando')
      setTela(numero)
      return
    }

    setTela((atual) => atual + numero)
  }

  function corrige() {
    setModo('digitando')
    setTela('')
  }

  function confirma() {
    tocarSomConfirmacao()

    switch (tela) {
      case '1':
        setVotosA((votos) => votos + 1)
        break
      case '2':
        setVotosB((votos) => votos + 1)
        break
      case '3':
        setVotosC((votos) => votos + 1)
        break
    }

    const nomeCandidato = CANDIDATOS[tela] ?? 'VOTO NULO'
    setModo('nome')
    setTela(nomeCandidato)

    setTimeout(() => {
      setModo('fim')
      setTela('FIM')
    }, 2000)
  }

  const classeTela =
    modo === 'fim'
      ? 'urna-tela-conteudo urna-tela-conteudo--fim'
      : modo === 'nome'
        ? 'urna-tela-conteudo urna-tela-conteudo--nome'
        : 'urna-tela-conteudo'

  return (
    <div className="urna-wrapper">
      <div className="urna">
        <div className="urna-tela">
          <p className={classeTela}>{tela}</p>
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

      {modo === 'nome' && (
        <p className="feedback-mensagem">Voto computado com sucesso!</p>
      )}
    </div>
  )
}

export default App
