import React from "react";
import loginImg from "../../img/login.png";
import { MyContext } from "../../App";

class LoginPrev extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const loginData = {
      email: this.state.email,
      password: this.state.password
    };
    // console.log(JSON.stringify(registerData));
    fetch("https://ioteamcyf2019.herokuapp.com/api/v1/user/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(loginData)
    })
      .then(function(res) {
        return res.json();
      })
      .then(res => {
        if (!res.token) {
          this.props.contextValue.toogleLogged(false);
        } else {
          this.props.contextValue.toogleLogged(true);
        }

        localStorage.setItem("token", res.token);

        return alert(res.message);
      })
      .catch(function(res) {
        return console.log(res.json());
      });
  };

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="logo" />
          </div>
          <form
            onSubmit={event => {
              this.handleSubmit(event);
            }}
            className="form"
          >
            <div className="form-group">
              <label htmlFor="email">Email </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                autoComplete="off"
                onChange={this.handleOnChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                autoComplete="off"
                onChange={this.handleOnChange}
              ></input>
            </div>
            <div>
              <button type="submit" className="btn">
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}

export const Login = props => (
  <MyContext.Consumer>
    {value => <LoginPrev {...props} contextValue={value} />}
  </MyContext.Consumer>
);
