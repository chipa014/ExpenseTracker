import { useState } from "react";

import ExpenseForm from "./ExpenseForm";

const ExpenseFormToggler = function (props) {
  const [formActive, setFormActive] = useState(false);

  const toggleFormHandler = function () {
    setFormActive((formActive) => !formActive);
  };

  if (!formActive)
    return (
      <button type="button" onClick={toggleFormHandler}>
        Add Expense
      </button>
    );

  return (
    <ExpenseForm
      onCancel={toggleFormHandler}
      onSaveExpenseData={props.onSaveExpenseData}
    />
  );
};

export default ExpenseFormToggler;
