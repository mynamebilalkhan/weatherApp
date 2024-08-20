import { WeatherProvider } from "./WeatherContext";
import CityInput from "./components/CityInput";
import CityCard from "./components/CityCard";

const WeatherApp = () => {
  return (
    <WeatherProvider>
      <div className="app-container">
        <h1>Weather App</h1>
        <CityInput />
        <div className="card-container">
          <CityCard />
        </div>
      </div>
    </WeatherProvider>
  );
};

export default WeatherApp;
