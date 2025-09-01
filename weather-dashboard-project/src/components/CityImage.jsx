import clearImg from "../assets/weatherImages/clear.jpg";
import cloudyImg from "../assets/weatherImages/cloudy.jpg";
import mistyImg from "../assets/weatherImages/mist.jpg";
import rainImg from "../assets/weatherImages/rain.jpg";
import snowImg from "../assets/weatherImages/snow.jpg";
import thunderstormImg from "../assets/weatherImages/thunderstorm.jpg";
import sunnyImg from "../assets/weatherImages/sunny.jpg";

export function mapDescriptionToCondition(description) {     //Function normalises description to match images
  const desc = description?.toLowerCase()|| "";

  if (desc.includes("cloud")) return "Cloudy";
  if (desc.includes("rain")) return "Rain";
  if (desc.includes("snow")) return "Snow";
  if (desc.includes("thunderstorm")) return "Thunderstorm";
  if (desc.includes("mist") || desc.includes("fog") || desc.includes("haze")) return "Mist";
  if (desc.includes("clear")) return "Clear";

  return "Sunny"; //The fallbackn option
}


const images = {
    Clear: clearImg,
    Cloudy: cloudyImg,
    Mist: mistyImg,
    Rain: rainImg,
    Snow: snowImg,
    Thunderstorm: thunderstormImg,
    Sunny: sunnyImg,
};

export default function CityImage({condition}){
    const imageSrc = images[condition] || clearImg;
    return(
        <div className="w-full sm:w-64 md:w-74 rounded-2xl bg-white/80 backdrop-blur ring-1 ring-slate-200  flex justify-center">
            <img
            src={imageSrc}
            alt={condition}   
            className="w-full h-auto max-h-60 object-cover rounded-xl"
       
            />

        </div>
    )
};

