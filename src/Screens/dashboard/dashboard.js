import React, { Component } from "react";

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      realTimeData: {},
      isLoading: true
    };
  }

  recursiveFetch = () => {
    fetch("https://ioteamcyf2019.herokuapp.com/api/v1/sensors/realtime")
      .then(res => res.json())
      .then(data => {
        const datares = Object.assign({}, data);
        console.log(datares);
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
    setTimeout(this.recursiveFetch, 5000);
  };

  componentDidMount = () => {
    this.recursiveFetch();
  };

  render() {
    if (this.state.isLoading) {
      return <span>Loading....</span>;
    } else if (this.state.err) {
      return <span> something went wrong </span>;
    } else if (!this.state.isLoading) {
      return (
        <div className="wraper">
          <div className="wraper-reg"><h2>Realtime Data</h2>
            <p>Gas sensor {this.state.realTimeData.gasSensor}</p>
            <p>Temperature sensor {this.state.realTimeData.tempSensor}</p>
            <p>Voltage sensor {this.state.realTimeData.potSensor}</p>
          </div>
        </div>
      );
    }
  }
}

export default DashBoard;
