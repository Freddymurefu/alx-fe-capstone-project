
 function CurrentWeather({
  temperature,
  description,
  icon,
  humidity,
  windSpeed,
}) {
  // guard against missing icon/description so it never crashes
  const iconUrl = icon
    ? `https://openweathermap.org/img/wn/${icon}@2x.png`
    : null;

  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-5 shadow-md max-w-xs mx-auto">
      <h3 className="text-lg font-semibold mb-3">Current Weather</h3>
<div className="flex-items-center gap-x-4 mb-4">
      <p className="text-4xl font-bold mb-4">{temperature != null ? `${temperature}°C` : "—"}</p>

      <div className="flex flex-col items-center items-center">
        {iconUrl &&
        
        <img src={iconUrl} alt={description || "weather icon"} className="w-16 h-16" />}
        <p className="mt-1">{description || "—"}</p>
        
      </div>
</div>
<div className="flex flex-col sm:flex-row sm:justify-between text-gray-700 text-sm gap-y-1">
      <p>💧Humidity: {humidity != null ? `${humidity}%` : "—"}</p>
      <p>🌬️Wind: {windSpeed != null ? `${windSpeed} km/h` : "—"}</p>
</div>      
    </div>
  );
}

export default CurrentWeather;