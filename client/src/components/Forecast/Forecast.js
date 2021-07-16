import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';

const Forecast = () => {

    //EXAMPLE responseObj FOR THE CITY OF DENVER
    //{"coord":{"lon":-104.9847,"lat":39.7392},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":305.65,"feels_like":303.49,"temp_min":296.88,"temp_max":307.95,"pressure":1009,"humidity":18},"visibility":10000,"wind":{"speed":0.45,"deg":69,"gust":1.34},"clouds":{"all":100},"dt":1626468937,"sys":{"type":2,"id":2004334,"country":"US","sunrise":1626435920,"sunset":1626488779},"timezone":-21600,"id":5419384,"name":"Denver","cod":200}
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

        <button onClick={getForecast}>Get Forecast</button>

        <Conditions 

            responseObj={responseObj}
        
        />

    </div>

   )

}

export default Forecast;