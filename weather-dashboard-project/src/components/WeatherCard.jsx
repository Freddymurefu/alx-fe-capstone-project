
function WeatherCard({city, temperature, description, icon, humidity, windSpeed}){
const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;


    return(
        <div>
            <h2>{city}</h2>
            <p>{temperature}°C</p>
            <p> {description} </p>
            <img src={iconUrl} alt={description}/>
            <p>Humidity: {humidity}% </p>
            <p>Wind: {windSpeed}km/h </p>
        </div>
        
    )
};

export default WeatherCard;