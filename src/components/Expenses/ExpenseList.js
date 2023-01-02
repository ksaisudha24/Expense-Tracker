import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.expenses.length === 0) {
    return (<p className="expenses-list__fallback">No expenses to show.</p>);
  }
  return (
    <ul className='expenses-list'>
      { props.expenses.map((expense) => (<ExpenseItem 
        className="expenses-list"
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />)) }
    </ul>
  );
}

export default ExpenseList;