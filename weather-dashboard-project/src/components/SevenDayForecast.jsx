
function SevenDayForecast({ forecast }) {
  return (
    <div>
      <h3>7-Day Forecast</h3>
      <ul style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {forecast.map((day, index) => (
          <li key={index} style={{ textAlign: "center" }}>
            <p>{day.weekday}</p>
            <img
              src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
              alt={day.weekday}
            />
            <p>{day.temperature}°C</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SevenDayForecast;
