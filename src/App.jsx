// import "./App.css";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2021, 2, 23),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    { id: "e3", title: "New TV", amount: 799.49, date: new Date(2021, 3, 2) },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hi, my name is <span style={{ color: "pink" }}>phil choi!</span>
        </p>
        <Expenses items={expenses} />
      </header>
    </div>
  );
}

export default App;
