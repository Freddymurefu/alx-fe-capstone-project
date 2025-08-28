import CityTime from "./CityTime";
import CurrentWeather from "./CurrentWeather";
import 
function WeatherCard({city, temperature, description, icon, humidity, windSpeed}){
const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;


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
        <Forecast forecast5={[]} hourly={[]}/>
      </div>
    </div>
  );
}

export default WeatherCard;