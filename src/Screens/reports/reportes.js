import React, { Component } from 'react'


class Reports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sensorData: [],
            isLoading: true,

        };
    }

    componentDidMount = () => {
        fetch("https://ioteamcyf2019.herokuapp.com/api/v1/allevents/sensors")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const sensors = data.map(event => [
                    event.sensor_type,
                    event.instant_value])

                this.setState({
                    sensorData: sensors,
                    isLoading: false
                });
            })
            .catch(err => {
                this.setState({
                    isLoading: false,
                    err: err
                });
            });
    };

    render() {
        if (this.state.isLoading) {
            return <span>Loading....</span>;
        } else if (this.state.err) {
            return <span> something went wrong </span>
        } else if (!this.state.isLoading) {
            return (
                <ul>
                    {this.state.sensorData.map((sensor, index) => {
                        return <li key={index}>{sensor[0] + "........." + sensor[1]}</li>
                    })}

                </ul>

            );
        }
    }
}
export default Reports;