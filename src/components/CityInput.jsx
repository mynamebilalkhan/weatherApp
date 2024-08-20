import { useContext, useState } from "react";
import { WeatherContext } from "../WeatherContext";

const CityInput = () => {
  const [city, setCity] = useState("");
  const { dispatch } = useContext(WeatherContext);

  const fetchWeatherData = async (cityName) => {
    const apiKey = "bf65732583464a2abe491450242008"; // Replace with your WeatherAPI key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.location) {
        const cityWeather = {
          name: data.location.name,
          temperature: data.current.temp_c,
          description: data.current.condition.text,
          icon: data.current.condition.icon,
        };

        dispatch({ type: "ADD_CITY", payload: cityWeather });
      } else {
        alert("City not found!");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleAddCity = () => {
    if (city) {
      fetchWeatherData(city);
      setCity(""); // Clear input field
    }
  };

  return (
    <div className="city-input">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleAddCity}>Add City</button>
    </div>
  );
};

export default CityInput;
