import { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";

import "./ExpensesContainer.css";

const ExpenseContainer = function (props) {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);

  const expensesFiltered = props.expenses.filter(
    (expense) => expense.date.getFullYear() === year
  );

  const filterExpensesHandler = function (newYear) {
    setYear(newYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilterExpenses={filterExpensesHandler}
          filterYear={year.toString()}
          currentYear={currentYear}
        />
        <ExpensesChart expenses={expensesFiltered} />
        <ExpensesList expenses={expensesFiltered} />
      </Card>
    </div>
  );
};

export default ExpenseContainer;
