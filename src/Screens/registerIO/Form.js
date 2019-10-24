import React, { Component, Fragment } from "react";
// import Counter from "./Counter";
class Form extends Component {
    state = {
        count: 0,
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
        console.log(this.state);
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
                    <h2>Register Form</h2>
                    <label htmlFor="name">Nombre: </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        onChange={this.handleOnChange}
                    /><br />
                    <label htmlFor="lastname">Apellido: </label>
                    <input
                        id="lastName"
                        type="text"
                        name="lastname"
                        onChange={this.handleOnChange}
                    /><br />
                    <label htmlFor="age">Edad: </label>
                    <input
                        id="age"
                        type="text"
                        name="age"
                        onChange={this.handleOnChange}
                    /><br />
                    <label htmlFor="age">Email: </label>
                    <input
                        id="email"
                        type="text"
                        name="email"
                        onChange={this.handleOnChange}
                    /><br />
                    {/* {this.validateEmail ? '' : <span>
            'Password must be 8 characters long!'</span>} */}

                    <label htmlFor="password">password: </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        onChange={this.handleOnChange}
                    />
                    <button type="submit" value="Enviar" disabled={this.state.isInValid}>
                        enviar
          </button>
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
