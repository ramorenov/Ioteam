import React, { Component } from "react";
import Button from "./SearchButton";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sensorTypeInput: "",
      InitDateInput: "",
      FinalDateInput: ""
    };
  }

  handleSensorTypeInput = event => {
    this.setState({ sensorTypeInput: event.target.value });
  };

  handleInitDateInput = event => {
    this.setState({ InitDateInput: event.target.value });
  };

  handleFinalDateInput = event => {
    this.setState({ FinalDateInput: event.target.value });
  };

  handleForm = event => {
    this.props.search(
      this.state.InitDateInput,
      this.state.FinalDateInput,
      this.state.sensorTypeInput
    );
    event.preventDefault();
  };

  render() {
    return (
      <div className="search">
        <div className="titrep">
          <h4 className="text-left">Search Report</h4>
        </div>
        <div className="row search-wrapper">
          <div className="col">
            <form className="form-group search-box" onSubmit={this.handleForm}>
              <div className="search-row">
                <label htmlFor="Init Date"> Init date</label>
                <input
                  type="date"
                  id="InitDate"
                  className="form-control"
                  placeholder="Init Date"
                  onChange={this.handleInitDateInput}
                />

                <label htmlFor="Final Date"> Final date</label>
                <input
                  type="date"
                  id="FinalDate"
                  className="form-control"
                  placeholder="Final Date"
                  onChange={this.handleFinalDateInput}
                />

                <label htmlFor="SensorType">Sensor type</label>
                <input
                  value={this.state.sensorTypeInput}
                  type="text"
                  id="SensorType"
                  className="form-control"
                  placeholder="SensorType"
                  onChange={this.handleSensorTypeInput}
                />

                <Button />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
