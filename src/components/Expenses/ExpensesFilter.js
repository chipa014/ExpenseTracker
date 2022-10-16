import "./ExpensesFilter.css";

const ExpensesFilter = function (props) {
  const yearSelectHandler = function (e) {
    const year = +e.target.value;
    props.onFilterExpenses(year);
  };
  const lastFourYears = [0, -1, -2, -3].map((el) => el + props.currentYear);
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.filterYear} onChange={yearSelectHandler}>
          {lastFourYears.map((year) => (
            <option value={year.toString()} key={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
