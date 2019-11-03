import React from "react";
import { Line } from "react-chartjs-2";

const Chart = props => (
  <div>
    <Line data={props.chartData} options={props.chartOptions} />
  </div>
);

export default Chart;
