import React from "react";

import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  // Uses JS array destructuring
  // First returned val: pointer to managed "variable"
  // Second returned val: function used to update stateful "variable"
  // First arg: initial value given to special state "variable"
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle('Updated!');
  // }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />

        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
