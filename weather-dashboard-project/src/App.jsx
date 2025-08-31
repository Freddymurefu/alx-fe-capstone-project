import { useState } from 'react';
import { useEffect } from 'react';
import ErrorMessage from "./components/ErrorMessage";
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import { fetchWeatherData } from './services/WeatherService';
import LoadingSpinner from './components/LoadingSpinner';
import { fetchForecast } from './services/WeatherService';
import CityTime from './components/CityTime';
import FiveDayForecast from './components/FiveDayForecast';
import Forecast from './components/Forecast';

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
    <div className='min-h-screen bg-gradient-to-br from-slate-100 to-blue-200'>
      <div className='max-w-6xl mx-auto px-4 py-6 space-y-6'>
                < SearchBar onSearch={handleSearch} />

        <div className='mt-4 space-y-4'>
        {error && <ErrorMessage message={error} />}
        {isLoading && <LoadingSpinner />}
        

        {weatherData && (
          <div className='bg-white/80 backdrop-blur rounded-2xl shadow-lg p-6 sm:p-8 max-w-md mx-auto'>
        <CityTime city={weatherData.city} />
        <WeatherCard
         temperature={Math.round(weatherData.temperature)} 
         description={weatherData.description}
         icon={weatherData.icon}
         humidity={weatherData.humidity}
         windSpeed={weatherData.windSpeed || "N/A"}
        />
        <div>
       <Forecast forecast5={forecast} />
         </div>
      <button
      onClick={()=> handleSearch(weatherData.city)}
      >Refresh</button>


      </div>
      
        )}
        </div>
      </div>

   
    </div>
  )
}

export default App;
