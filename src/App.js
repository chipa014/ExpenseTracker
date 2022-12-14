import { useState } from "react";

import ExpenseContainer from "./components/Expenses/ExpensesContainer";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = function () {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = function (expenseData) {
    setExpenses((expenses) => [...expenses, expenseData]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseContainer expenses={expenses} />
    </div>
  );
};

export default App;
