
function FiveDayForecast({ forecast }) {
  return (
    <div className="bg-white-100 p-6 rounded-2xl shadow-lg max-w-4xl mr-2 mx-auto">
    <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">5-day Weather Forecast</h3>

      <ul className="flex flex-wrap justify-between gap-3">
        {forecast.map((day, index) => (
          <li className="flex flex-col items-center bg-gradient-to-br from-blue-50 to-blue-100 
             p-4 rounded-xl shadow-md hover:shadow-md hover:-translate-y-1 transition-transform duration-300"        
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
