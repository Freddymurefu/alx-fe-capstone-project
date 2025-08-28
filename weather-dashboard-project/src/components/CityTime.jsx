function CityTime({city, date, time}){

const now = new Date();
const time = now.toLocaleTimeString([], {      //compute readable time from browser
    hour: "2-digit",
    minute: "2-digit"
})

const date = now.toLocaleTimeString([], {  //computer readable date from browser
   weekday: "long", 
   day: "2-digit",
   month: "short"
})
    return(
        <div>
            <h2>{city}</h2>
            <p>{time}</p>
            <p>{date}</p>
        </div>
    )
};

export default CityTime;