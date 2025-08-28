import { useState } from 'react';
import { useEffect } from 'react';
import ErrorMessage from "./components/ErrorMessage";
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import { fetchWeatherData } from './services/WeatherService';
import LoadingSpinner from './components/LoadingSpinner';

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
      <div className='text-3xl font-bold text-gray-600'>
        {error && <ErrorMessage message={error} />}
        {isLoading && <LoadingSpinner />}
        < SearchBar onSearch={handleSearch} />
        {weatherData && (
        <WeatherCard
         city={weatherData.city}
         temperature={Math.round(weatherData.temperature)} 
         description={weatherData.description}
         icon={weatherData.icon}
         humidity={weatherData.humidity}
         windSpeed={weatherData.windSpeed || "N/A"} 
        />
      )}
      </div>

   
    </>
  )
}

export default App;
