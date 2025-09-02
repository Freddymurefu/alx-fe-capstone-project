import sunriseImg from "../assets/weatherImages/mynewsunnybackground.webp";

function PopularCities({ onCityClick }) {
  const cities = ["Nairobi", "Bangkok", "Toronto", "Phoenix"];

  return (
    <div
      className="relative w-full min-h-[400px] flex flex-col items-center justify-center p-6
                 bg-cover bg-center bg-no-repeat rounded-lg"
      style={{ backgroundImage: `url(${sunriseImg})` }}
    >
      <div className="absolute inset-0 bg-black/30 rounded-lg"></div>

      <div className="relative flex flex-col items-center gap-4 text-center text-white">
        <p className="text-2xl italic drop-shadow mb-6">
          Weather the day with confidence
        </p>
        <p className="text-xl sm:text-2xl italic drop-shadow mb-4 sm:mb-6">
          Get weather for any city, anywhere 🌍
        </p>
        <p className="text-lg italic drop-shadow mb-6 sm:mb-8">
          Check out weather in trending destinations:
        </p>

        <div className="flex flex-col items-center gap-4">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => onCityClick(city)}
              className="w-32 sm:w-40 px-5 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow
                         hover:bg-blue-200 hover:text-skyblue transition duration-200
                         hover:scale-105 active:scale-95"
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularCities;
