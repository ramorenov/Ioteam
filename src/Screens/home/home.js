import React from 'react'
import code from '../../img/ioteamlog.png'
import '../../App.css';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>IOTEAM</h1>
                <img src={code} className="App-logo" alt="logo" />
            </header>
        </div>
    );
}

export default Home;