
function FiveDayForecast({ forecast }) {
  return (
    <div className="bg-gray-100 p-5 rounded-xl shadow-md max-w-xl mx-auto">
      <h3>5-Day Forecast</h3>
      <ul className=" flex flex-wrap justify-between gap-3">
        {forecast.map((day, index) => (
          <li className="flex flex-col items-center bg-gradient-to-br from-blue-50 to-blue-100 
             p-3 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-transform duration-300"        
          key={index} style={{ textAlign: "center" }}>
            <p className="font-medium">{day.day}</p>
            <img
              src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
              alt={day.day}
              className="w-16 h-16"
            />
            <p className="font-bold mt-1">{day.temp}°C</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FiveDayForecast;
