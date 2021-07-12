
import { React, useState, useEffect } from "react";


function App() {

  const [api, setApi] = useState({});
  let [city, setCity] = useState('');
  const uriEncodedCity = encodeURIComponent(city);

  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${uriEncodedCity}&appid=e85d65f27c4dba6f1470e1cee950c874`
  useEffect(() => {

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApi(data))
      

  })



  return (
    <div className="App">
      {/* <input name="city" onChange={handleChange} value={search.city}></input> */}
     {/* <text>weather description goes here</text> */}
   
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                

             

           
     <h1>{JSON.stringify(api)}</h1>
    </div>
  );
}

export default App;
