import React, {useEffect, useState} from "react";
import './app.css';


function App() {
  // const date = new Date();
  // let month = date.getMonth();
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [hemisphere, setHemisphere] = useState("");
  const [month, setMonth] = useState(new Date().getMonth());

  useEffect(() => {
    getLocation();
    const date = new Date();
    setMonth(date.getMonth());
  }, [])


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
      {/* <button onClick={getLocation}>get location</button> */}
      {
        (hemisphere === "Northern Hemisphere" && (month >= 2 && month <= 9)) || 
        (hemisphere === "Southern Hemisphere" && (month < 2 || month > 9))? (
          <div>
            <p>{longitude} {latitude}</p>
            <h1>It's Summer in the Northern Hemesphere.</h1>
            <p>Aaya Mousam Thande Thande Dermi Cool Ka</p>
            <img src="https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/wheat-2391348-1920_ver_1.jpg" alt="summer" />
          </div>
        ) : (
          hemisphere === "Northern Hemisphere" && (month <= 2 || month >= 9)? (
          <div>
            <h1>It's winter in the northern hemesphere.</h1>
            <p>Winter is Here.</p>
            <img src="https://www.usatoday.com/gcdn/presto/2023/03/03/USAT/3f908dae-00da-4d38-aa10-e82bbc92593b-AP_Winter_Weather_California.jpg" alt="winter" />
          </div> ) : (
            <h1>Relax We are fetching...</h1>
          )
        )
      }
    </div>
  );
}

export default App;