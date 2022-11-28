import ExpenseItem from "./ExpenseItem";

const Expenses = () => {
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
    <>
      <ExpenseItem expenses={expenses} />
    </>
  );
};

export default Expenses;
