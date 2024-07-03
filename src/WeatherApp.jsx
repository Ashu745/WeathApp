import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo] = useState(
        {
            city: "Delhi",
            feelsLike: 30.77,
            humidity: 89,
            temp: 27.05,
            tempMax: 27.05,
            tempMin: 27.05,
            weather: "mist"
        }
    )

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h1>Weather ForeCast</h1>
            <SearchBox updateInfo={updateInfo}/>    
            <InfoBox info={weatherInfo}/>
        </div>
    );
}