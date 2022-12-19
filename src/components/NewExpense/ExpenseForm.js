import { useState } from "react";
import moment from "moment";

const ExpenseForm = () => {
  // const [title, setTitle] = useState("");
  // const [amount, setAmount] = useState(0);
  // const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: 0,
    enteredDate: moment().format("YYYY-MM-DD"),
  });

  const titleChangeHandler = (event) => {
    setUserInput((prev) => {
      return { ...prev, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prev) => {
      return { ...prev, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prev) => {
      return { ...prev, enteredDate: event.target.value };
    });
  };
  console.log(userInput);
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={userInput.enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2023-12-31"
            onChange={dateChangeHandler}
            value={userInput.enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
