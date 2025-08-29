
function FiveDayForecast({ forecast }) {
  return (
    <div>
      <h3>5-Day Forecast</h3>
      <ul style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {forecast.map((day, index) => (
          <li key={index} style={{ textAlign: "center" }}>
            <p>{day.day}</p>
            <img
              src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
              alt={day.day}
            />
            <p>{day.temp}°C</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FiveDayForecast;
