import ExpenseItem from "./ExpenseItem";

const Expenses = ({ items }) => {
  return (
    <>
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
    </>
  );
};

export default Expenses;
