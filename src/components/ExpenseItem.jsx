import "./ExpenseItem.css";

const ExpenseItem = ({ expenses }) => {
  // const expenseDate = props.date;
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;

  return (
    <>
      {expenses.map((obj) => {
        return (
          <div className="expense-item">
            <div>{obj.date.toISOString()}</div>
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
