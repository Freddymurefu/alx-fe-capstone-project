import CityTime from "./CityTime";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

function WeatherCard({city, temperature, description, icon, humidity, windSpeed, forecast7}){

    return (
    <div>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 260 }}>
          <CityTime city={city} />
        </div>

        
        <div style={{ flex: 1, minWidth: 260 }}>
          
        <CurrentWeather
            temperature={temperature}
            description={description}
            icon={icon}
            humidity={humidity}
            windSpeed={windSpeed}
           />
        </div>
      </div>

      <div style={{ marginTop: 16 }}>
        <Forecast forecast7={forecast7}/>
      </div>
    </div>
  );
}

export default WeatherCard;