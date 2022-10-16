import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = function (props) {
  if (props.expenses.length === 0)
    return <h2 className="expenses-list__fallback">No expenses found!</h2>;

  return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => (
        <ExpenseItem expense={expense} key={expense.id} />
        //expense is {id, title, amount, date}
      ))}
    </ul>
  );

  //   return <ul className="expenses-list">{expensesContent}</ul>;
};

export default ExpensesList;
