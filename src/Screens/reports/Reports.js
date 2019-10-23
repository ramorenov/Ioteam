import React, { Component } from "react";
import Search from "./Search";
import SearchReport from "./SearchReport";
import moment from "moment";

class Reports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sensorData: [],
      originData: [],
      isLoading: true
    };
  }

  componentDidMount = () => {
    fetch("https://ioteamcyf2019.herokuapp.com/api/v1/allevents/sensors")
      .then(res => res.json())
      .then(data => {
        const dataFormated = data.map(item => {
          const o = Object.assign({}, item);
          o.date = moment(item.createdAt).format("YYYY-MM-DD");
          o.time = moment(item.createdAt).format("LTS");
          return o;
        });

        this.setState({
          originData: dataFormated,
          sensorData: dataFormated,
          isLoading: false
        });
        //console.log(dataFormated);
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          err: err
        });
      });
  };

  search = (InitDate, FinalDate, sensorType) => {
    //console.info("TO DO!", sensorType);
    console.log(InitDate, FinalDate, sensorType);
    if (InitDate === "" && FinalDate === "" && sensorType === "") {
      const filterdata = this.state.originData;
      this.setState({ sensorData: filterdata });
    } else if (InitDate === "" && FinalDate === "" && sensorType !== "") {
      const filterdata = this.state.originData.filter(
        item => item.sensor_type === sensorType
      );
      this.setState({ sensorData: filterdata });
    } else {
      if (FinalDate >= InitDate && InitDate !== "") {
        if (sensorType === "") {
          const filterdata = this.state.originData.filter(
            item => item.date > InitDate && item.date < FinalDate
          );
          this.setState({ sensorData: filterdata });
        } else {
          const filterdata = this.state.originData.filter(
            item =>
              item.date > InitDate &&
              item.date < FinalDate &&
              item.sensor_type === sensorType
          );
          this.setState({ sensorData: filterdata });
        }
      } else {
        alert("El rango de fechas no es correcto");
      }
    }
  };

  render() {
    if (this.state.isLoading) {
      return <span>Loading....</span>;
    } else if (this.state.err) {
      return <span> something went wrong </span>;
    } else if (!this.state.isLoading) {
      return (
        <div>
          <div className="App-container" class="tablerep">
            <Search search={this.search} />
            <SearchReport results={this.state.sensorData} />
          </div>
        </div>
      );
    }
  }
}
export default Reports;
