import { useState } from 'react';
import ErrorMessage from "./components/ErrorMessage";
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';


function App() {
  const[weatherData, setWeatherData] = useState(null);
  const[error, setError] = useState(null);
  const[isLoading, setIsLoading] = useState(false)
 
  const handleSearch = async(city) => {
    setError(null);
    setIsLoading(true);
    
    try {
      const data = await fetchWeather(city);
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
        {weatherData && <WeatherCard data={weatherData} />}
      </div>

   
    </>
  )
};

export default App;
