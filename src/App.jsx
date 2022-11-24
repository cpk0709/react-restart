// import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hi, my name is <span style={{ color: "pink" }}>phil choi</span>
        </p>
        <ExpenseItem />
        <ExpenseItem />
      </header>
    </div>
  );
}

export default App;
