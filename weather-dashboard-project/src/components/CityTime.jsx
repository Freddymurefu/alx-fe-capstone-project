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
    <div className="w-full sm:w-64 md:w-72 lg:w-80 rounded-2xl bg-white/80 backdrop-blur ring-1 ring-slate-200 shadow-[10px_10px_0_rgba(15,23,42,0.18)] p-5 flex flex-col items-start">
      <h2 className="text-slate-800 font-semibold text-xl truncate">{city}</h2>
      <p className="text-slate-700 text-lg mt-1">{formattedTime}</p>
      <p className="text-slate-500 text-sm">{formattedDate}</p>
    </div>
  );
}

export default CityTime;
