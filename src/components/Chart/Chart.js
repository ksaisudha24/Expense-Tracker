import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  let valuePoints = props.dataPoints.map(dataPoint => dataPoint.value);
  let maxValue = Math.max(...valuePoints);
  return (
    <div className="chart">
      { props.dataPoints.map(dataPoint => (
          <ChartBar 
          key={dataPoint.label}
          label={dataPoint.label}
          maxValue={maxValue}
          value={dataPoint.value}
          />
      )) }
    </div>
  );
};

export default Chart;