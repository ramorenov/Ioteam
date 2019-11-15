import React, { Component } from "react";
import Sensorchart from "./sensorchart";
import Card from "./card";
import temp from "../../img/sensors/temp.png";
import humidity from "../../img/sensors/humidity.png";
import gas from "../../img/sensors/gas.png";
import dist from "../../img/sensors/dist.png";
import "./dashboard.scss";

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
        <br />
        <h2>Device Dashboard</h2>
        <div className="chart-container">
          <Card
            img={temp}
            chart={
              <Sensorchart
                sensor={this.state.realTimeData.tempSensor}
                sensorName={"Temperature ºC"}
                color={"#F93822FF"}
              />
            }
            text="Temperature sensors use a thermistor to accurately measure temperatures. These sensors are perfect for monitoring ambient temperatures around the sensors physical location."
          />

          <Card
            img={humidity}
            chart={
              <Sensorchart
                sensor={this.state.realTimeData.humSensor}
                sensorName={"Humidity %"}
                color={"#FDD20EFF"}
              />
            }
            text="Humidity sensors allow you to monitor the relative humidity of the air within a room or enclosure."
          />

          <Card
            img={dist}
            chart={
              <Sensorchart
                sensor={this.state.realTimeData.distSensor}
                sensorName={"Distance cm"}
                color={"#28334AFF"}
              />
            }
            text="Distance sensors use an infrared sensing technology to accurately detect obstacles within 40 - 50 cms range"
          />
          <Card
            img={gas}
            chart={
              <Sensorchart
                sensor={this.state.realTimeData.gasSensor}
                sensorName={"Gas Lev"}
                color={"#86c232"}
              />
            }
            text="Gas sensors allows you to monitor the level of gasses like Propane, Hydrogen, CO and even methane in the surrounding air."
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
