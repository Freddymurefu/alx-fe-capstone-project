
function FiveDayForecast({ forecast }) {
  return (
    <div className="bg-white-100 p-4 sm:p-6 rounded-2xl shadow-lg max-w-5xl ml-0 mr-auto">
    <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 text-center">5-day Weather Forecast</h3>

      <ul className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {forecast.map((day, index) => (
          <li className="flex flex-col items-center bg-gradient-to-br from-blue-50 to-blue-100 
             p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"        
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
