import { findWeather } from './apiCall';
import { onError } from './onError'

let cityInput = document.querySelector('#city');
let search = document.querySelector('.search');
let cityName = document.querySelector('#city-name');
let description = document.querySelector('#description');
let temp = document.querySelector('#temp');
let minTemp = document.querySelector('#min-temp');
let maxTemp = document.querySelector('#max-temp');
let humidity = document.querySelector('#humidity');
let windSpeed = document.querySelector('#wind-speed');

let searchCity = () => {
  search.addEventListener('click', () => {
    findWeather(cityInput.value).then( city => {
      cityName.innerHTML = city.name;
      return findWeather(cityInput.value);
    }).then( city => {
      description.innerHTML = city.weather[0].description;
      return findWeather(cityInput.value);
    }).then( city => {
      temp.innerHTML = `${city.main.temp} ℃`;
      return findWeather(cityInput.value);
    }).then( city => {
      minTemp.innerHTML = `Min: ${city.main.temp_min} ℃`;
      return findWeather(cityInput.value);
    }).then( city => {
      maxTemp.innerHTML = `Max: ${city.main.temp_max} ℃`;
      return findWeather(cityInput.value);
    }).then( city => {
      humidity.innerHTML = `Humidity: ${city.main.humidity}`;
      return findWeather(cityInput.value);
    }).then( city => {
      windSpeed.innerHTML = `Wind Speed: ${city.wind.speed} m/s`;
    }).catch(onError);
  });
}

export { searchCity };