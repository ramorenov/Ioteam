import React, { Component } from "react";
import { MyContext } from "../App";

function withLogin(WrappComp) {
  return class loggedComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        logged: false
      };
    }

    render() {
      return (
        <MyContext.Consumer>
          {value => <WrappComp logged={value.logged} {...this.props} />}
        </MyContext.Consumer>
      );
    }
  };
}

export default withLogin;
