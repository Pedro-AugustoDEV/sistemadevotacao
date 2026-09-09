import './App.css'

function App() {
  return (
    <div className="urna-wrapper">
      <div className="urna">
        <div className="urna-tela">
          <p className="urna-tela-conteudo"></p>
        </div>

        <div className="urna-painel">
          <div className="teclado">
            <button type="button" className="tecla">1</button>
            <button type="button" className="tecla">2</button>
            <button type="button" className="tecla">3</button>
            <button type="button" className="tecla">4</button>
            <button type="button" className="tecla">5</button>
            <button type="button" className="tecla">6</button>
            <button type="button" className="tecla">7</button>
            <button type="button" className="tecla">8</button>
            <button type="button" className="tecla">9</button>
            <button type="button" className="tecla tecla-zero">0</button>
          </div>

          <div className="acoes">
            <button type="button" className="acao acao-branco">
              BRANCO
            </button>
            <button type="button" className="acao acao-corrige">
              CORRIGE
            </button>
            <button type="button" className="acao acao-confirma">
              CONFIRMA
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
