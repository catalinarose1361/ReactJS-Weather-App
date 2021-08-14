
import { React, useState, useEffect } from "react";
import './App.css';
import Forecast from "./components/Forecast/Forecast";
import Logo from './components/Logo/Logo';

function App() {

    return (
        <>

        <header className="App-header">

            <Logo />

            <h1>React Weather App</h1>
            
        </header>

        <main>

            <Forecast />

        </main>

        <footer>

            Application Developed By <a href="http://www.hirecatalina.com">Catalina Williams</a>
            
        </footer>

        </>

    )


}

export default App;

