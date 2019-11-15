import React, { Component } from "react";
import "../Components/about.scss";
// import loginImg from "../img/logo_transparent.png";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
			<ul>
				<li><a href="#">About us</a>
				<div>
					<ul>
						<li class="titulo">Mision</li>
						<li>We are the company We are the companyWe are the companyWe are the companyWe are the company
                        yWe are the yWe are the 
                        </li>
					</ul>
					<ul>
						<li class="titulo">Vision</li>
						<li>Our company is the best Our company is the bestOur company is the bestOur company is the best</li>
					</ul>
					<ul>
						<li class="titulo">About</li>
						<li>We usWe usWe usWe usWe us</li>
					</ul>
				</div>
				</li>
			</ul>
		</nav>
        <div className="container"></div>
      </React.Fragment>
    );
  }
}

export default About;
