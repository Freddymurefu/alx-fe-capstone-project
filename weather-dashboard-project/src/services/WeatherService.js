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

//function to fetch 7 day weather forecast data

export async function fetchForecast(lat, lon){
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${apiKey}`;
    const response = await fetch(url);

    const data = await response.json();

    if (!response.ok|| !data.daily ) {
        throw new Error(data.message || "Failed to fetch weekly forecast");
    }
  return data.daily.slice(0, 7).map((dayData) => {
    const date = new Date(dayData.dt * 1000);
    const dayName = date.toLocaleDateString("en-US", { weekday: "short" });

  return {
    day: dayName,
    temp: Math.round(dayData.temp.day),
    icon: `https://openweathermap.org/img/wn/${dayData.weather[0].icon}.png`,
    };
  });

}