import React, { Component } from "react";
import Sensorchart from "./sensorchart";

class Dashboard extends Component {
  state = {
    realTimeData: []
  };

  getSensorData = () => {
    fetch("https://ioteamcyf2019.herokuapp.com/api/v1/sensors/realtime")
      .then(res => res.json())
      .then(data => {
        const datares = Object.assign({}, data);

        this.setState({
          realTimeData: datares,
          isLoading: false
        });
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          err: err
        });
      });
    //console.log(this.state.realTimeData);
    setTimeout(this.getSensorData, 5000);
  };

  componentDidMount() {
    this.getSensorData();
  }

  render() {
    return (
      <div className="chart-container">
        <h2>My Dashboard</h2>
        <Sensorchart
          sensor={this.state.realTimeData.gasSensor}
          sensorName={"GasSensor"}
          color={"rgba(50,220,220,0.5)"}
        />
        <Sensorchart
          sensor={this.state.realTimeData.tempSensor}
          sensorName={"TempSensor"}
        />
      </div>
    );
  }
}

export default Dashboard;
