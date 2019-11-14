import React, { Component } from "react";
import Sensorchart from "./sensorchart";

class Dashboard extends Component {
  state = {
    realTimeData: []
  };
  timer = null;
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
    this.timer = setTimeout(this.getSensorData, 2000);
  };

  componentDidMount() {
    this.getSensorData();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {



    
    return (
      <div className="wrapper">
        <h2>My Dashboard</h2>
        <div className="chart-container">
          <Sensorchart
            sensor={this.state.realTimeData.tempSensor}
            sensorName={"Temperature ºC"}
            color={"#F93822FF"}
          />
          <Sensorchart
            sensor={this.state.realTimeData.humSensor}
            sensorName={"Humidity %"}
            color={"#FDD20EFF"}
          />
          <Sensorchart
            sensor={this.state.realTimeData.distSensor}
            sensorName={"Distance cm"}
            color={"#28334AFF"}
          />
          <Sensorchart
            sensor={this.state.realTimeData.gasSensor}
            sensorName={"Gas Lev"}
            color={"#86c232"}
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
