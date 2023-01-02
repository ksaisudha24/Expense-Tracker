import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
  });

  
    
  return (
    <Card className="expenses">
      <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpenseList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
