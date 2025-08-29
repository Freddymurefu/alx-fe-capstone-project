import FiveDayForecast from "./FiveDayForecast";

function Forecast({ forecast5 = [] }) {
  return (
    <div>
      <FiveDayForecast forecast={forecast5} />
    </div>
  );
}

export default Forecast;
