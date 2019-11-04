import React from 'react';
import loginImg from '../../login.jpg';


export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        const registerData = {
            email: this.state.email,
            password: this.state.password
        }
        // console.log(JSON.stringify(registerData));
        fetch('https://ioteamcyf2019.herokuapp.com/api/v1/user/login', {
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
        const { name, value } = event.target
        this.setState({
            [name]: value
        });

    };

    render() {
        return <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Login</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} alt="logo" />
                </div>
                <form onSubmit={event => this.handleSubmit(event)} className="form">
                    <div className="form-group">
                        <label htmlFor="email">Email </label>
                        <input type="text" name="email" placeholder="email" onChange={this.handleOnChange}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password </label>
                        <input type="text" name="password" placeholder="password" onChange={this.handleOnChange}></input>
                    </div>
                    <div>
                        <button type="submit" className="btn">Login</button>
                    </div>
                </form>
            </div>
            <div className="footer">

            </div>
        </div>
    }
}