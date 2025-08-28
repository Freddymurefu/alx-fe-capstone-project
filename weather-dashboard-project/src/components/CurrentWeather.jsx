
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
    <div>
      <h3>Current Weather</h3>

      <p>{temperature != null ? `${temperature}°C` : "—"}</p>

      <div>
        {iconUrl && <img src={iconUrl} alt={description || "weather icon"} />}
        <p>{description || "—"}</p>
      </div>

      <p>Humidity: {humidity != null ? `${humidity}%` : "—"}</p>
      <p>Wind: {windSpeed != null ? `${windSpeed} km/h` : "—"}</p>
    </div>
  );
}

export default CurrentWeather;