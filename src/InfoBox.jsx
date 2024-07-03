import Card from '@mui/material/Card';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import './InfoBox.css'
import WbSunny from '@mui/icons-material/WbSunny';
export default function InfoBox({info}) {
    const INIT_URL = "https://www.shutterstock.com/image-photo/dust-storm-australia-on-farm-600nw-561255439.jpg";
    const COLD_URL="https://www.shutterstock.com/image-vector/random-falling-snow-flakes-wallpaper-600nw-2282020887.jpg";
    const HOT_URL = "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const RAIN_URL="https://images.unsplash.com/photo-1697518725445-037f24d787b4?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"



    return (
        <div className='InfoBox'>
           
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }} >
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className='city_Icon'>
                            {info.city}&nbsp; &nbsp;<div className='icon' >{info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/> }</div>
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Feels Like = {info.feelsLike}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Max Temp = {info.tempMax}&deg;C</p>
                            <p>Min Temp = {info.tempMin}&deg;C</p>
                            <p>The weather can be described as  <i>{info.weather}</i></p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>

        </div>
    );
}