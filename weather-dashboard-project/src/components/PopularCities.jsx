function PopularCities( {onCityClick} ){
    const cities = ["Nairobi", "Mombasa", "Nakuru", "Kampala"];

    return(
        <div>
            {cities.map(city =>(
                <button key={city} onClick={() => onCityClick(city)}
                > {city}</button>
            ))};
        </div>
    )
}

export default PopularCities;