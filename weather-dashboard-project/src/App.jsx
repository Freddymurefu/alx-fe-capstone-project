import { useState } from 'react';
import { useEffect } from 'react';
import ErrorMessage from "./components/ErrorMessage";
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import { fetchWeatherData } from './services/WeatherService';

function App() {

  const[weatherData, setWeatherData] = useState(null);
  const[error, setError] = useState(null);
  const[isLoading, setIsLoading] = useState(false)
 
  const handleSearch = async(city) => {
    setError(null);
    setIsLoading(true);
    
    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
      
      
    } catch (error) {
      setError(error.message);
      setWeatherData(null);
    }finally{
      setIsLoading(false);
    };


  };
  
  return (
    <>
      <div className='text-3xl font-bold underline text-blue-600'>
        {error && <ErrorMessage message={error} />}
        < SearchBar onSearch={handleSearch} />
        {weatherData && (
        <WeatherCard
         city={weatherData.name}
         country={weatherData.sys.country}
         temperature={Math.round(weatherData.main.temp- 273.15)} //convert temp from Kelvin to Celsius then round off
         description={weatherData.weather[0].description}
         icon={weatherData.weather[0].icon}
         humidity={weatherData.main.humidity}
         windSpeed={Math.round(weatherData.wind.speed * 3.6).toFixed(1)} //convert windSpeed from m/s to km/h then round off
        />
      )}
      </div>

   
    </>
  )
}

export default App;
