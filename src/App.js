import { FiSearch } from "react-icons/fi";
function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      
      <div className="container Input">
        <input
         type="text"
         placeholder="Digite seu CEP..."
        />

        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      <div>

      </div>
      
    </div>
  );
}

export default App;