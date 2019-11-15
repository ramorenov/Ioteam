import React, { Component } from "react";

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = this.props.results.map((sensor, index) => {
      return (
        <tr key={sensor._id} className="Report-table">
          <td>{sensor.date}</td>
          <td>{sensor.time}</td>
          <td>{sensor.sensor_type}</td>
          <td>{sensor.instant_value}</td>
          <td>{sensor.event_type}</td>
          <td>{sensor.activated ? "on" : "off"}</td>
        </tr>
      );
    });

    return (
      <div className="table">
        <table className="tablemain">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Sensor Type</th>
              <th scope="col">Value</th>
              <th scope="col">Event Type</th>
              <th scope="col">State</th>
            </tr>
          </thead>
          <tbody className="datbody">{data.reverse()}</tbody>
        </table>
      </div>
    );
  }
}

export default SearchResult;
