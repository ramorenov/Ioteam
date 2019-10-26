import React, { Component, Fragment } from "react";
// import Counter from "./Counter";
class Form extends Component {
    state = {
        email: '',
        password: '',
        isInValid: true,
        errors: {
            email: '',
            password: ''
        }
    };

    handleSubmit = event => {
        event.preventDefault();

        const registerData = {
            name: this.state.name,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password
        }
        console.log(this.state)
        console.log(JSON.stringify(registerData));
        fetch('https://ioteamcyf2019.herokuapp.com/api/v1/user/sing-up', {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(registerData)
        })
            .then(function (res) {
                return console.log(res.json())

            }).catch(function (res) {
                return console.log(res.json())
            })
    };

    handleOnChange = event => {
        const { id, value } = event.target
        this.setState({
            [id]: value
        });
        this.executeValidations(id, value)
    };

    executeValidations = (id, value) => {

        const { errors } = this.state
        let error = value.length === 0
            ? 'El campo es requerido'
            : ''
        if (id === 'email' && value.length > 0) {
            error = this.validateEmail(value)
                ? ''
                : 'El campo no es un email'
        }
        errors[id] = error
        this.setState({
            errors
        })
        if (errors.email.length || errors.password.length) {
            this.setState({ isInValid: true })
        } else {
            this.setState({ isInValid: false })
        }
    }

    handleCounterClick = () => {
        this.setState({ count: this.state.count + 1 });
    };

    validateEmail = (value) => {
        const regExpMail = new RegExp(
            // eslint-disable-next-line no-useless-escape
            /^(([^<>()*#$`~'"=+!¡¿?%^&{}/äáàëéèíìöóòúùñ|ºª·ç¨\[\]\.,;:\s@\"]+(\.[^<>()*#$`~'"=+!¡¿?%^&{}/äáàëéèíìöóòúùñ|ºª·ç¨\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        );

        console.log('cualquier cosa', regExpMail.test(value));

        return regExpMail.test(value)
    }
    render() {
        return (
            <Fragment>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <div className="wraper">
                        <div className="wraper-reg"><h2>Register Form</h2>
                            <label htmlFor="name">Name: </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                onChange={this.handleOnChange}
                            /><br />
                            <label htmlFor="lastname">Lastname: </label>
                            <input
                                id="lastname"
                                type="text"
                                name="lastname"
                                onChange={this.handleOnChange}
                            /><br />
                            {/* <label htmlFor="age">Edad: </label>
                            <input
                                id="age"
                                type="text"
                                name="age"
                                onChange={this.handleOnChange}
                            /><br /> */}
                            <label htmlFor="age">Email: </label>
                            <input
                                id="email"
                                type="text"
                                name="email"
                                onChange={this.handleOnChange}
                            /><br />
                            {this.validateEmail ? '' : <span>
                                'Password must be 8 characters long!'</span>}

                            <label htmlFor="password">Password: </label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                onChange={this.handleOnChange}
                            /><br />
                            <button type="submit" value="Enviar" className="btn-border" disabled={this.state.isInValid}>
                                enviar
          </button>
                        </div>
                    </div>
                </form>
                {/* <Counter
          count={this.state.count}
          handleCounterClick={this.handleCounterClick}
        /> */}
            </Fragment>
        );
    }
}
export default Form;
