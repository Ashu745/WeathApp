import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';
const API_KEY = "https://api.openweathermap.org/data/2.5/weather"
const API_URL = "8eeb0054757fda127fffa4c72b02bd76"

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);





    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonresponse = await response.json();

            let result = {
                city: city,
                temp: jsonresponse.main.temp,
                tempMax: jsonresponse.main.temp_max,
                tempMin: jsonresponse.main.temp_min,
                humidity: jsonresponse.main.humidity,
                feelsLike: jsonresponse.main.feels_like,
                weather: jsonresponse.weather[0].description,
            };
            console.log(result);
            return result;
        }
        catch (err) {
            throw err;
        }

    }
    let handlechange = (evt) => {
        setCity(evt.target.value)
    }

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newinfo = await getWeatherInfo();
            updateInfo(newinfo);
        }
        catch (err) {
            setError(true);
        }

    };


    return (
        <div className='searchbox'>

            <form onSubmit={handleSubmit}>

                <TextField id="city" label="City" variant="standard" required value={city} onChange={handlechange} />   <br /><br />
                <Button variant="contained" type="submit" >
                    Search
                </Button>
                {error && <p style={{ color: "Red" }}>No such place exist</p>}
            </form>
        </div>
    );
}