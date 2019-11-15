import React, { Component } from "react";
import Chart from "./chart";

class Sensorchart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sensorData: 0,

      chartData: {
        labels: [],
        datasets: [
          {
            label: this.props.sensorName,
            data: [],
            backgroundColor: this.props.color
          }
        ]
      },

      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,

        tooltips: {
          enabled: true
        },
        scales: {
          xAxes: [
            {
              ticks: {
                autoSkip: true,
                maxTicksLimit: 10
              }
            }
          ]
        }
      }
    };
  }

  getChartData = () => {
    const oldDataSet = this.state.chartData.datasets[0];
    const newDataSet = { ...oldDataSet };
    newDataSet.data.push(this.state.sensorData);
    //console.log(this.state.sensorData);

    const newChartData = {
      ...this.state.chartData,
      datasets: [newDataSet],
      labels: this.state.chartData.labels.concat(
        new Date().toLocaleTimeString()
      )
    };
    this.setState({ chartData: newChartData });
  };

  UNSAFE_componentWillReceiveProps() {
    this.setState({ sensorData: this.props.sensor });
    this.getChartData();
  }

  render() {
    return (
      <div className="sensor-chart">
        <Chart
          chartData={this.state.chartData}
          chartOptions={this.state.chartOptions}
        />
      </div>
    );
  }
}

export default Sensorchart;
