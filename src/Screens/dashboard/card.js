import React, { Component } from "react";
import "./dashboard.scss";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  clickHandler = () => {
    this.setState(prev => ({ show: !prev.show }));
  };

  render() {
    return (
      <div className="card-container">
        <button type="button" onClick={this.clickHandler}>
          Show/Hide
        </button>
        <div>
          {this.state.show ? (
            this.props.chart
          ) : (
            <img src={this.props.img} alt="img" />
          )}
        </div>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Card;
