function CityTime({ city }) {
  const now = new Date();

  const formattedTime = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  const formattedDate = now.toLocaleDateString([], {
    weekday: "long",
    day: "2-digit",
    month: "short"
  });

  return (
    <div>
      <h2>{city}</h2>
      <p>{formattedTime}</p>
      <p>{formattedDate}</p>
    </div>
  );
}

export default CityTime;
