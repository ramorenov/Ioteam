import React, { Component } from 'react'

class Form extends Component {
    state = {
        error: 'Este espacio vacio',
        mostrar: false,
        validNum: false
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

    render() {
        return (
            <div>
                <form className="formulario" action="Hola">
                    <h1>Form Elkin</h1>
                    <input
                        type="text"
                        name="nombre"
                        placeholder="text"
                        onChange={this.comparar}
                    />
                    {this.state.mostrar ? <p>{this.state.error}</p> : null}
                    <h2>Telefono:</h2>
                    <input
                        type="text"
                        name="telefono"
                        onChange={this.validacionNumero}
                    />
                </form>
                {this.state.validacionNumero ? <p>Este campo solo admite Números</p> : null}
            </div>
        )
    }
}
export default Form;