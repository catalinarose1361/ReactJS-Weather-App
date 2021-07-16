import React, { useState } from 'react';

const Forecast = () => {

    let [responseObj, setResponseObj] = useState({});

    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=denver&appid=e85d65f27c4dba6f1470e1cee950c874`

   function getForecast() {
    fetch(apiUrl)
    // getForecast CONVERTS THE RESPONSE INTO A JSON OBJECT 
    .then(response => response.json())
    //AND THEN ASSIGN THE RESPONSE VALUE TO THE responseObj VARIABLE IN OUR STATE
    .then(response => {
        setResponseObj(response)
    })

   }

   return (

    // JSX code will go here

    <div>

        <h2>Find Current Weather Conditions</h2>

        <div>
            {JSON.stringify(responseObj)}
        </div>

        <button onClick={getForecast}>Get Forecast</button>

    </div>

   )

}

export default Forecast;