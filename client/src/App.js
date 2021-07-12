
import { React, useState, useEffect } from "react";


function App() {

  const [api, setApi] = useState({});

  const apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=denver&appid=e85d65f27c4dba6f1470e1cee950c874"
  useEffect(() => {

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApi(data))
      

  })

console.log(api)

  return (
    <div className="App">
      {/* <input name="city" onChange={handleChange} value={search.city}></input> */}
     {/* <text>weather description goes here</text> */}
     <h1>{JSON.stringify(api)}</h1>
    </div>
  );
}

export default App;
