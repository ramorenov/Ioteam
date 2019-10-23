import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/"><button>Home</button></Link>
                    </li>
                    <li>
                        <Link to="/about"><button>Register</button></Link>
                    </li>
                    <li>
                        <Link to="/DashBoard"><button>DashBoard</button></Link>
                    </li>
                    <li>
                        <Link to="/Reports"><button>Reports</button></Link>
                    </li>
                </ul>
            </nav >
        )
    }
}

export default Navbar;