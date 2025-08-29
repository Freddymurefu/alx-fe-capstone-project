import SevenDayForecast from "./SevenDayForecast";

function Forecast({ forecast7 = [] }) {
  return (
    <div>
      <SevenDayForecast forecast={forecast7} />
    </div>
  );
}

export default Forecast;
