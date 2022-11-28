import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";

const Expenses = ({ items }) => {
  return (
    <Card className="expenses">
      {items.map((item) => {
        return (
          <ExpenseItem
            id={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
