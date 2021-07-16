import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css';

const Forecast = () => {

    //EXAMPLE responseObj FOR THE CITY OF DENVER
    //{"coord":{"lon":-104.9847,"lat":39.7392},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":305.65,"feels_like":303.49,"temp_min":296.88,"temp_max":307.95,"pressure":1009,"humidity":18},"visibility":10000,"wind":{"speed":0.45,"deg":69,"gust":1.34},"clouds":{"all":100},"dt":1626468937,"sys":{"type":2,"id":2004334,"country":"US","sunrise":1626435920,"sunset":1626488779},"timezone":-21600,"id":5419384,"name":"Denver","cod":200}
    let [responseObj, setResponseObj] = useState({});

    let [city, setCity] = useState('');

    let [unit, setUnit] = useState('imperial');

    let [error, setError] = useState(false);

    let [loading, setLoading] = useState(false);

    const uriEncodedCity = encodeURIComponent(city)

    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=${unit}&q=${uriEncodedCity}&appid=e85d65f27c4dba6f1470e1cee950c874`

   function getForecast(e) {

    // PREVENTS THE PAGE FROM REFRESHING AFTER CLICKING 'GET FORECAST' BUTTON
    e.preventDefault();

    //IF THE USER DOESNT ENTER ANY CHAR IN THE INPUT, DONT REQUEST
    if (city.length === 0) {
        return setError(true);
    }

    // Clear state in preparation for new data
   setError(false);
   setResponseObj({});
  
   setLoading(true);



    fetch(apiUrl)

    //CONVERTS THE RESPONSE INTO A JSON OBJECT 
    .then(response => response.json())

    //AND THEN ASSIGN THE RESPONSE VALUE TO THE responseObj VARIABLE IN OUR STATE
    .then(response => {

        //THROW AN ERROR IF THE CODE ON THE RESPONSE IS NOT 200
        if (response.cod !== 200) {

            throw new Error()

        }

        setResponseObj(response);

        setLoading(false);

    }).catch(err => {

        setError(true);

        setLoading(false);

        console.log(err.message);

    });

   }

   return (

    // JSX code will go here

    <div>

        <h2>Find Current Weather Conditions</h2>

        <form onSubmit={getForecast}>

            <input

                type="text"
                placeholder="Enter City"
                maxLength="50"
                value={city}
                className={classes.textInput}
                onChange={(e) => setCity(e.target.value)}

            />

            <label className={classes.Radio}>

                <input

                    type="radio"
                    name="units"
                    checked={unit === "imperial"}
                    value="imperial"
                    onChange={(e) => setUnit(e.target.value)}

                />

                Fahrenheit

            </label>

            <label className={classes.Radio}>

                <input

                    type="radio"
                    name="units"
                    checked={unit === "metric"}
                    value="metric"
                    onChange={(e) => setUnit(e.target.value)}

                />

                Celcius

            </label>

            <button className={classes.Button} type="submit">Get Forecast</button>

        </form>


        <Conditions 

            responseObj={responseObj}
            error={error} 
            loading={loading}
        
        />

    </div>

   )

}

export default Forecast;