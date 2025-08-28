//This is the wrapper for my bottom row

function Forecast({ forecast5 = [], hourly = [] }) {
  return (
    <div>
      {/* Bottom Left: Five day forecast (placeholder for now) */}
      <div>[FiveDayForecast will go here]</div>

      {/*Bottom Right: Hourly forecast (placeholder for now) */}
      <div>[HourlyForecast will go here]</div>
    </div>
  );
}



export default Forecast;