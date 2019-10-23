import React, { Component } from 'react'

class Form extends Component {
    state = {
        error: 'Este campo No puede estar vacío!!',
        mostrar: false,
        validNum: false,
        validarEmail: false
    }
    comparar = ({ target: { value } }) => {
        console.log(value)
        this.setState({
            mostrar: !value
        })
    }

    validacionNumero = ({ target: { value } }) => {
        const validacion = /^([0-9])*$/.test(value);
        console.log(/^([0 - 9])*$/.test(value));

        this.setState({
            validacionNumero: !validacion
        })
    }

    validarEmail = ({ target: { value } }) => {
        const validateem = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3,4})+$/.test(value);
        this.setState({
            validarEmail: !validateem
        })
    }

    render() {
        return (
            <div>
                <form className="formulario" action="Hola">
                    <h2>Enter your name:</h2>
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Name Complete"
                        autocomplete="off"
                        onChange={this.comparar}
                    />
                    {this.state.mostrar ? <p>{this.state.error}</p> : null}
                    <h2>Phone:</h2>
                    <input
                        type="text"
                        name="telefono"
                        placeholder="Numbers"
                        autocomplete="off"
                        onChange={this.validacionNumero}
                    />
                    {this.state.validacionNumero ? <p>Este campo solo admite Números</p> : null}
                    <h2>eMail:</h2>
                    <input
                        type="text"
                        name="mail"
                        placeholder="email"
                        autocomplete="off"
                        onChange={this.validarEmail}
                    />
                    {this.state.validarEmail ? <p>campo imcorrecto</p> : null}
                </form>
            </div>
        )
    }
}
export default Form;