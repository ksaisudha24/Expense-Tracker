import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseData(expenseData);
    setIsEditing(false);
  };
  
  const editHandler = () => {
    setIsEditing(true);
  }

  const cancelHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      { !isEditing && <button onClick={editHandler}>Add Expense</button> }
      { isEditing && <ExpenseForm onSaveExpenseData={saveExpenseData} onCancelHandler={cancelHandler}></ExpenseForm> }
    </div>
  );
};

export default NewExpense;
