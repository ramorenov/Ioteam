import React from "react";
import "../../App.scss";
import Carouselimg from "./carousel";
import Redes from "../../Components/redes";
import About from "../../Components/about";

function Home() {
  return (
    <div className="App">
      <About />
      <header className="App-header">
        <div className="logotip"></div>
        <div className="App-carousel">
          <Carouselimg />
        </div>
      </header>
      <Redes />
    </div>
  );
}

export default Home;
