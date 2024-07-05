import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function WeatherDetails() {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=13a4dce35d31a296c0f7d54f31b19a71`
        );
        const data = await response.json();
        if (response.ok) {
          setWeather(data);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='weather-details'>
      <h1>Weather in {city}</h1>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
      <p>Description: {weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherDetails;
