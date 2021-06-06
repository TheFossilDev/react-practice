// Now needs a reference to the component css for injection
import "./ExpenseItem.css";
import Card from './Card';
import ExpenseDate from './ExpenseDate';

// Props is a convention name and is automatically interpreted by React
function ExpenseItem(props) {


  return (
    // Funny enough, className can't be called class because of the reserved js word
    <Card className="expense-item">
        <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
