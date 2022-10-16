import "./NewExpense.css";

import ExpenseFormToggler from "./ExpenseFormToggler";

const NewExpense = function (props) {
  const saveExpenseDataHandler = function (enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseFormToggler onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
