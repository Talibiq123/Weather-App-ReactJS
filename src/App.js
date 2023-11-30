import React, {useState} from "react";
import './app.css';


function App() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [hemisphere, setHemisphere] = useState("");


  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);

        if (location.coords.latitude > 0) {
          setHemisphere("Northern Hemisphere");
        } else if (location.coords.latitude <  0) {
          setHemisphere("Southern Hemisphere");
        } else {
          setHemisphere("Equator");
        }
      })
    } else {
      console.log("Geolocation is not supported by this browser.");
    }

    
  }

  


  return (
    <div>
      <h1>Latitude: {latitude}</h1>
      <h1>Longitude: {longitude}</h1>
      <h1>Hemisphere: {hemisphere}</h1>
      <button onClick={getLocation}>get location</button>
    </div>
  );
}

export default App;