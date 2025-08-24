
function WeatherCard({city, country, temperature, description, icon, humidity, windSpeed}){
const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

const roundedTemp = Math.round(temperature); //Round off temperature for cleaner display

    return(
        <div>
            <h2>{city}, {country}</h2>
            <p>{roundedTemp}°C</p>
            <p> {description} </p>
            <img src={iconUrl} alt={description}/>
            <p>Humidity: {humidity}% </p>
            <p>Wind: {windSpeed}km/h </p>
        </div>
        
    )
};

export default WeatherCard;