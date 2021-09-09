//import the necessary files
import React, { useState } from 'react';
import {PanelGroup,Panel} from 'react-bootstrap';
import WeatherWidget from './WeatherWidget';
import Form from "./Form";
import '../css/index.css';

//const API_KEY = "cbcfd6df2087c23fed06646cc4007350";
const API_KEY = process.env.REACT_APP_KEY

//create the main class for displaying the recipes
const Home = () => {
  const [cityIndex, setCityIndex] = useState('');
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState('');

  const getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    // const country = e.target.elements.country.value;
    const units = e.target.elements.units.value;
    //const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    /*Weather Forecast */
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${units}`);
    const response = await api_call.json();
    console.log(response);
    if (city) {
      if(response.cod==200){         
        console.log('++++++',response);
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
        
        <PanelGroup id="authenticheader">
            <Panel>
            <Panel.Heading style={{ backgroundColor: "#2c3e50"}}>          
              <Form getWeather={getWeather} />
            </Panel.Heading>
        </Panel>
        </PanelGroup>
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


export default Home;