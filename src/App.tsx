import { useState } from 'react'
import './App.css'

function App() {
  const [numeroDigitado, setNumeroDigitado] = useState('')
  const [votosA, setVotosA] = useState(0)
  const [votosB, setVotosB] = useState(0)
  const [votosC, setVotosC] = useState(0)
  const [mensagem, setMensagem] = useState('')

  function handleConfirmar() {
    switch (numeroDigitado) {
      case '1':
        setVotosA((votos) => votos + 1)
        break
      case '2':
        setVotosB((votos) => votos + 1)
        break
      case '3':
        setVotosC((votos) => votos + 1)
        break
      default:
        return
    }

    setMensagem('Voto computado')
    setNumeroDigitado('')
  }

  return (
    <div className="voting-app">
      <h1>Urna Eletrônica</h1>
      <div className="ballot">
        <input
          type="number"
          className="ballot-input"
          placeholder="Número do candidato"
          value={numeroDigitado}
          onChange={(event) => setNumeroDigitado(event.target.value)}
        />
        <button type="button" className="confirm-button" onClick={handleConfirmar}>
          Confirmar
        </button>
      </div>
      {mensagem && <p className="status-message">{mensagem}</p>}
    </div>
  )
}

export default App
