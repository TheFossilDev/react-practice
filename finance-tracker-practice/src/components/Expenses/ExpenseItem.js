import React, { useState } from 'react';

// Now needs a reference to the component css for injection
import "./ExpenseItem.css";
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

// Props is a convention name and is automatically interpreted by React
const ExpenseItem = props => {
  // Uses array destructuring. Names in [] are arbitrary
  // Convention is to do [name, setName]
  // State is a service managed by React. We have methods to set a new state, and when a component fetches from state React does the heavy lifting
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated!');
    console.log("Clicked!");
  };

  return (
    // Funny enough, className can't be called class because of the reserved js word
    <Card className="expense-item">
        <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
