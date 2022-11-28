import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ expenses }) => {
  return (
    <>
      {expenses.map((obj) => {
        return (
          <div className="expense-item">
            <ExpenseDate date={obj.date} />
            <div className="expense-item__description">
              <h2>{obj.title}</h2>
              <div className="expense-item__price">${obj.amount}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ExpenseItem;
