import React from "react";
//import code from "../../img/ioteamlog.png";
import "../../App.scss";
import Carouselimg from "./carousel";
import loginImg from "../../img/logo_transparent.png";
// import Footer from '../../Components/footer';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="logotip">
                    <img src={loginImg} alt="logo" width="20%" />
                </div>
                {/* <h2>IOTEAM</h2> */}
                <div className="App-carousel">
                    <Carouselimg />
                </div>

                {/* <img src={code} className="App-logo" alt="logo" />  */}
            </header>

        </div>
    );
}

export default Home;
