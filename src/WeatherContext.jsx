import { createContext, useReducer } from "react";

// Initial state
const initialState = {
  cities: [],
};

// Reducer function
const weatherReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CITY":
      return {
        ...state,
        cities: [...state.cities, action.payload],
      };

    case "UPDATE_WEATHER":
      return {
        ...state,
        cities: state.cities.map((city) =>
          city.name === action.payload.name ? action.payload : city
        ),
      };
    default:
      return state;
  }
};

// Create context
export const WeatherContext = createContext();

// WeatherProvider component
export const WeatherProvider = ({ children }) => {
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  return (
    <WeatherContext.Provider value={{ state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
};
