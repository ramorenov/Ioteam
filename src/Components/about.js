import React, { Component } from "react";
import "../Components/about.scss";
import loginImg from "../img/logo_transparent.png";

class About extends Component{
    render(){
        return(
            <fragment>
            <header>
                <div className="container">
                <div>
                    <img src={loginImg} alt="logo"/>
                </div>
                    <nav className="menu-fixed">
                        <ul>
                            <li><button href="#">Description</button></li>
                                <ul>
                                    <p>
                                        This is a project IOT was designed for monitoring sensors.
                                    </p>
                                </ul>
                            <li><button href="#">Mision</button></li>
                                <ul>
                                    <p>
                                        Show and moniyoring systema survillance
                                    </p>
                                </ul>
                            <li><button href="#">Vision</button></li>
                                <ul>
                                    <p>
                                        To be a Company with powerfull and improve security.
                                    </p>
                                </ul>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="container">
                
            </div>
            </fragment>
        )
        
    }
}


export default About;