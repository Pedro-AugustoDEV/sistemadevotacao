import './App.css'

function App() {
  return (
    <div className="voting-app">
      <h1>Sistema de Votação</h1>
      <div className="candidates">
        <button type="button" className="vote-button">
          Candidato A
        </button>
        <button type="button" className="vote-button">
          Candidato B
        </button>
      </div>
    </div>
  )
}

export default App
