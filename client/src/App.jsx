import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const APIKEY = '22b45cf9c871e9b68d5965836077c6b6'; // Replace with your API key
  const [myname, setMyname] = useState('');
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('');
  const [temp, setTemp] = useState('');
  const [temp_min, setTemp_min] = useState('');
  const [temp_max, setTemp_max] = useState('');
  const [humidity, setHumidity] = useState('');
  const [wind, setWind] = useState('');

  const getWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`
      );
      if (!response.ok) {
        throw new Error('Weather data not available');
      }
      const data = await response.json();
      setCity(data.name);
      setWeather(data.weather[0].main);
      setTemp(Math.round(data.main.temp - 273.15) * 9/5 + 32);
      setTemp_min(Math.round(data.main.temp_min -273.15) * 9/5 + 32);
      setTemp_max(Math.round(data.main.temp_max - 273.15) * 9/5 + 32);
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
    } catch (error) {
      console.error(error);
      // Handle error here (display a message, etc.)
    }
  };

  const fetchName = async () => {
    try {
      const response = await fetch('/api/myname');
      const data = await response.json();
      setMyname(data.name);
    } catch (error) {
      console.error(error);
      // Handle error here (display a message, etc.)
    }
  };

  useEffect(() => {
    fetchName();
  }, []);

  return (
    <div>
      <h1 className="title">My Weather App</h1>
      <h2>{myname}</h2>
      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>
      <container>
      <h2>City: {city}</h2>
      <h2>{weather}</h2>
      <h2>Current Temperature: {temp} F</h2>
      <h2>Low: {temp_min} C</h2>
      <h2>High: {temp_max} C</h2>
      <h2>Humidity: {humidity}%</h2>
      <h2>Wind: {wind}</h2>
</container>
    </div>
  );
}

export default App;

