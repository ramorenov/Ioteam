import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav class="topnav">
                <Link to="/"><button class="btn-borde">Home</button></Link>

                <Link to="/about"><button class="btn-borde">Register</button></Link>

                <Link to="/DashBoard"><button class="btn-borde">DashBoard</button></Link>

                <Link to="/Reports"><button class="btn-borde">Reports</button></Link>
            </nav >
        )
    }
}

export default Navbar;