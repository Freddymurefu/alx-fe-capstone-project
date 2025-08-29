//Service function to fetch and clean weather data for a given city
export async function fetchWeatherData(city) {
    
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

//API request URL with metric units(Celsius Degrees)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);  //send request to API


    const data = await response.json();      //Convert raw response into JSON
    //if city is nonexistent or API doesn't work, throw an error
    if(!response.ok || data.cod !== 200){
        throw new Error(data.message || "City not found");
    }


    //Return only fields my weather card needs
    return {
        city: data.name,
        temperature: data.main?.temp,
        description: data.weather[0].description,
        icon: data.weather?.[0]?.icon,
        humidity: data.main?.humidity,
        windSpeed: data.wind?.speed ? Math.round(data.wind.speed * 3.6).toFixed(1) : null,
        lat: data.coord.lat,
        lon: data.coord.lon,
    };
    
};


// function to fetch 5-day forecast data (free plan)
export async function fetchForecast(city) {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch forecast");
  }

  // OpenWeather gives forecast in 3-hour intervals
  // I'll reduce to 1 forecast per day (e.g. noon data)
  const dailyData = data.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return dailyData.map((dayData) => {
    const date = new Date(dayData.dt * 1000);
    const dayName = date.toLocaleDateString("en-US", { weekday: "short" });

    return {
      day: dayName,
      temp: Math.round(dayData.main.temp),
      icon: dayData.weather[0].icon,
    };
  });
}
