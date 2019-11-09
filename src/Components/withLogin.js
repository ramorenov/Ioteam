import React, { Component } from "react";
import { MyContext } from "../App";

function withLogin(WrappComp) {
  return class loggedComponent extends Component {
    render() {
      return (
        <MyContext.Consumer>
          {value => (
            <WrappComp
              logged={value.logged}
              toogleLogged={value.toogleLogged}
              {...this.props}
            />
          )}
        </MyContext.Consumer>
      );
    }
  };
}

export default withLogin;
