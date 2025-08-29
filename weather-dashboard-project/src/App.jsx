import { useState } from 'react';
import { useEffect } from 'react';
import ErrorMessage from "./components/ErrorMessage";
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import { fetchWeatherData } from './services/WeatherService';
import LoadingSpinner from './components/LoadingSpinner';
import { fetchForecast } from './services/WeatherService';

function App() {

  const[weatherData, setWeatherData] = useState(null);
  const[error, setError] = useState(null);
  const[isLoading, setIsLoading] = useState(false)
  const [forecast, setForecast] = useState([])
  const [previousCity, setPreviousCity] = useState(null);
  const REFRESH_MS = 5 * 60 * 1000; //Set to 5 minutes to prevent exhaustion of free API call limit
 
  const handleSearch = async(city) => {
    setError(null);
    setIsLoading(true);
    setPreviousCity(city) //Keep the city the user searched for
    
    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
      const forecastData = await fetchForecast(city);
      setForecast(forecastData);
      
      
    } catch (error) {
      setError(error.message);
      setWeatherData(null);
      setForecast([])
    }finally{
      setIsLoading(false);
    };


  };
useEffect(()=>{
  if(!previousCity) return; //if theres no city yet, dont even start

  const id = setInterval(() => {
    if(!isLoading){
      handleSearch(previousCity);
    }
  }, REFRESH_MS);

return ()=> clearInterval(id);
}, [previousCity, isLoading]);
  
  return (
    <>
      <div className='text-3xl font-bold text-gray-600'>
        {error && <ErrorMessage message={error} />}
        {isLoading && <LoadingSpinner />}
        < SearchBar onSearch={handleSearch} />
        {weatherData && (
          <>
        <WeatherCard
         city={weatherData.city}
         temperature={Math.round(weatherData.temperature)} 
         description={weatherData.description}
         icon={weatherData.icon}
         humidity={weatherData.humidity}
         windSpeed={weatherData.windSpeed || "N/A"}
        forecast5={forecast}

      />
       
      <button
      onClick={()=> handleSearch(weatherData.city)}
      >Refresh</button>


      </>
        )}
      </div>

   
    </>
  )
}

export default App;
