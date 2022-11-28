// import "./App.css";
import Expenses from "./components/Expenses";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hi, my name is <span style={{ color: "pink" }}>phil choi</span>
        </p>
        <Expenses />
      </header>
    </div>
  );
}

export default App;
