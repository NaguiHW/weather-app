import { findWeather, findImage } from './apiCall';
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
let weatherImage = document.querySelector('#image');
let weatherStatus = '';

let searchCity = () => {
  search.addEventListener('click', () => {
    findWeather(cityInput.value).then( city => {
      cityName.innerHTML = city.name;
      description.innerHTML = city.weather[0].description;
      temp.innerHTML = `${city.main.temp} ℃`;
      minTemp.innerHTML = `Min: ${city.main.temp_min} ℃`;
      maxTemp.innerHTML = `Max: ${city.main.temp_max} ℃`;
      humidity.innerHTML = `Humidity: ${city.main.humidity}`;
      windSpeed.innerHTML = `Wind Speed: ${city.wind.speed} m/s`;
      weatherStatus = city.weather[0].main;
    }).then( () => {
      findImage(weatherStatus).then( image => {
        weatherImage.setAttribute('src', image.data[0].images.downsized.url)
      });
    }).catch(onError);
  });
};

export { searchCity };