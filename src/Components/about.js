import React, { Component } from "react";
import "../Components/about.scss";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <ul>
            <li>
              <a href="#">About us</a>
              <div>
                <ul>
                  <li className="titulo">Mision</li>
                  <li>
                    Provide and develop technological solutions in the IOT field
                    for the benefit of all.{" "}
                  </li>
                </ul>
                <ul>
                  <li className="titulo">Vision</li>
                  <li>
                    Through innovation become leaders in the development, advice
                    and application of IOT technologies in all productive fields
                    (monitoring and response tasks.)
                  </li>
                </ul>
                <ul>
                  <li className="titulo">Objetive</li>
                  <li>
                    Accompany, advise and develop technological tools according
                    to the needs of our customers.
                  </li>
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
