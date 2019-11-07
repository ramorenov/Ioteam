import React, { Component } from "react";
import "../Components/redes.scss"

class Redes extends Component{
    render(){
        return(
            <div className="red"> 
	        <div id="facebook">{null}<a href="https://www.facebook.com/IoTeam-107894270659076/?modal=admin_todo_tour" target="none" className="fa fa-facebook">{null}</a></div>
	        <div id="youtube">{null}<a href="http://www.youtube.com" className="fa fa-youtube-play">{null}</a></div>
	        <div id="twitter"><a href="https://twitter.com/IoTeam6" className="fa fa-twitter">{null}</a></div>
	        <div id="correo"><a href="mailto:ioteamcyf@gmail.com" className="fa fa-envelope">{null}</a></div>
            </div>
        )
        
    }
}

export default Redes;
