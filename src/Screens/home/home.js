import React from "react";
//import code from "../../img/ioteamlog.png";
import "../../App.scss";
import Carouselimg from "./carousel";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>IOTEAM</h2>
        <div className="App-carousel">
          <Carouselimg />
        </div>

        {/* <img src={code} className="App-logo" alt="logo" />  */}
      </header>
    </div>
  );
}

export default Home;
