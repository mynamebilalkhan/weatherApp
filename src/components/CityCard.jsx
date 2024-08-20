import { useContext } from "react";
import { WeatherContext } from "../WeatherContext";

const CityCard = () => {
  const { state } = useContext(WeatherContext);

  return (
    <div className="city-card">
      {state.cities.map((city, index) => (
        <div key={index} className="city-card-item">
          <img src={`${city.icon}`} alt={city.description} />
          <h3>{city.name}</h3>
          <p>{city.temperature}°C</p>
          <p>{city.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CityCard;
