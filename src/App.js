import React, { useState } from 'react';
import Header from './components/header';
import Form from "./components/Form";
import WeatherWidget from "./components/WeatherWidget";
import './css/index.css';
import './App.css';

const API_KEY = process.env.REACT_APP_KEY

//create the main class for displaying the WeatherForecast
const App = () => {
  const [cityIndex, setCityIndex] = useState('');
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState('');

  const getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const units = e.target.elements.units.value;
    /*Weather Forecast */
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${units}`);
    const response = await api_call.json();
    if (city) {
      if(response.cod==='200'){         
          const transformData = await response.list.map((data) => ({
            dt: data.dt,
            temp: data.main.temp,
            temp_min: data.main.temp_min,
            temp_max: data.main.temp_max,
            humidity: data.main.humidity,
            icon: data.weather[0].icon,
            desc: data.weather[0].description,
            clouds: data.clouds.all,
            wind: data.wind.speed,
            error: ""
          }));

          setCityIndex(city);
          setForecast(transformData);

        }else{
          setError(response.message);
        }
    } else {
      setError("Please enter the City.");     
    }
  }

 

    return(
               
      <div className="jumbotron">  
        <Header />      
        <div className="panel-heading">
           <Form getWeather={getWeather} />
        </div>
        {error.length === 0 ? (
        <WeatherWidget
           config={{
            location: cityIndex,
            unit: 'metric',
            }}
          forecast={forecast}
        />
        ) : (
          <div>
            <h2>Unable to fetch weather data!</h2>
            <pre>{error}</pre>
          </div>
        )}
 
      </div>

    );
  };


export default App;
