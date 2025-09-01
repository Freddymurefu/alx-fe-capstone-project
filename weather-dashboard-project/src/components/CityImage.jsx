import clearImg from "../assets/weatherImages/clear.jpg";
import cloudyImg from "../assets/weatherImages/cloudy.jpg";
import mistyImg from "../assets/weatherImages/mist.jpg";
import rainImg from "../assets/weatherImages/rain.jpg";
import snowImg from "../assets/weatherImages/snow.jpg";
import thunderstormImg from "../assets/weatherImages/thunderstorm.jpg";
import sunnyImg from "../assets/weatherImages/sunny.jpg";



const images = {
    Clear: clearImg,
    Cloudy: cloudyImg,
    Mist: mistyImg,
    Rain: rainImg,
    Snow: snowImg,
    Thunderstorm: thunderstormImg,
    Sunny: sunnyImg,
};

function CityImage({condition}){
    const imageSrc = images[condition] || clearImg;
    return(
        <div>
            <img
            src={imageSrc}
            alt={condition}          
            />

        </div>
    )
};

export default CityImage;