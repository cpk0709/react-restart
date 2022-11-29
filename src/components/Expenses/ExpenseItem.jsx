import React, { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ id, title, amount, date }) => {
  const [titleValue, setTitleValue] = useState(title);

  const clickHandler = () => {
    setTitleValue("updated!!");
  };

  return (
    <>
      <Card className="expense-item" id={id}>
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{titleValue}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </>
  );
};

export default ExpenseItem;
