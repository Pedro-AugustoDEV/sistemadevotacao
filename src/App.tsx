import './App.css'

function App() {
  return (
    <div className="voting-app">
      <h1>Urna Eletrônica</h1>
      <div className="ballot">
        <input
          type="number"
          className="ballot-input"
          placeholder="Número do candidato"
        />
        <button type="button" className="confirm-button">
          Confirmar
        </button>
      </div>
    </div>
  )
}

export default App
