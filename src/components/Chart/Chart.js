import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = function (props) {
  const max = Math.max(...props.data.map((month) => month.value));
  return (
    <div className="chart">
      {props.data.map((elem) => (
        <ChartBar
          value={elem.value}
          maxValue={max}
          label={elem.label}
          key={elem.label}
        />
      ))}
    </div>
  );
};

export default Chart;
