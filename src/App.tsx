import { useState } from 'react'
import './App.css'

function App() {
  const [votesA, setVotesA] = useState(0)
  const [votesB, setVotesB] = useState(0)

  return (
    <div className="voting-app">
      <h1>Sistema de Votação</h1>
      <div className="candidates">
        <button
          type="button"
          className="vote-button"
          onClick={() => setVotesA((votes) => votes + 1)}
        >
          Candidato A: {votesA}
        </button>
        <button
          type="button"
          className="vote-button"
          onClick={() => setVotesB((votes) => votes + 1)}
        >
          Candidato B: {votesB}
        </button>
      </div>
    </div>
  )
}

export default App
