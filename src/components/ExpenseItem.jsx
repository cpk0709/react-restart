import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ expenses }) => {
  return (
    <>
      {expenses.map((obj) => {
        return (
          <div className="expense-item">
            {/* <div>
              <div>{obj.date.getFullYear()}</div>
              <div>{obj.date.toLocaleString("ko-KR", { month: "long" })}</div>
              <div>{obj.date.toLocaleString("ko-KR", { day: "numeric" })}</div>
            </div> */}
            <ExpenseDate date={obj.date} />
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
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
