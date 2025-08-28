import CityTime from "./CityTime";

function WeatherCard({city, temperature, description, icon, humidity, windSpeed}){
const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;


    return (
    <div>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 260 }}>
          <CityTime city={city} />
        </div>

        
        <div style={{ flex: 1, minWidth: 260 }}>
          <h3>Current Weather</h3>
          <p>{temperature}°C</p>
          <p>{description}</p>
          <img src={iconUrl} alt={description} />
          <p>Humidity: {humidity}%</p>
          <p>Wind: {windSpeed} km/h</p>
        </div>
      </div>

      <div style={{ marginTop: 16 }}>
        [Forecast here]
      </div>
    </div>
  );
}

export default WeatherCard;