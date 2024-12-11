import { useState } from "react";
import { weather } from "../axios";

function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);

  function handleChage() {
    weather(`data/2.5/weather?q=${city}&appid={your_api_key}`)
      .then((response) => {
        const data = {
          name: response.data.name,
          temp: response.data.main.temp,
          humidity: response.data.main.humidity,
          windSpeed: response.data.wind.speed,
        };
        setWeatherData(data);
      })
      .catch((error) => {
        setWeatherData([]);
      });
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 border rounded-lg shadow-md bg-white">
      <h1 className="text-3xl font-bold text-center mb-5">Ob Havo Ma'lumotlari</h1>
      <div className="flex items-center space-x-4 mb-6">
        <input
          type="text"
          placeholder="Shahar nomini kiriting"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full py-2 px-4 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          onClick={handleChage}
          className="py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Qidirish
        </button>
      </div>
      {weatherData.length > 0 && (
        <div className="p-4 bg-gray-100 border rounded-lg shadow-sm">
          <h2 className="text-xl font-medium text-gray-800">Shahar: {weatherData.name}</h2>
          <p className="text-gray-700">Harorat: {weatherData.temp} °C</p>
          <p className="text-gray-700">Namlik: {weatherData.humidity}%</p>
          <p className="text-gray-700">Shamol tezligi: {weatherData.windSpeed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
