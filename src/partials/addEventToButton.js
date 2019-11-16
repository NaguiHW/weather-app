/* eslint-disable import/prefer-default-export */
import { findWeatherCelcius, findImage, findWeatherFahrenheit } from './apiCall';
import { onError } from './onError';

const cityInput = document.querySelector('#city');
const search = document.querySelector('.search');
const cityName = document.querySelector('#city-name');
const description = document.querySelector('#description');
const temp = document.querySelector('#temp');
const minTemp = document.querySelector('#min-temp');
const maxTemp = document.querySelector('#max-temp');
const humidity = document.querySelector('#humidity');
const windSpeed = document.querySelector('#wind-speed');
const weatherImage = document.querySelector('#image');
let toggle = document.querySelector('#toggle');
let weatherStatus = '';

const searchCity = () => {
  search.addEventListener('click', () => {
    if (toggle.checked) {
      findWeatherCelcius(cityInput.value).then((city) => {
        cityName.innerHTML = city.name;
        description.innerHTML = city.weather[0].description;
        temp.innerHTML = `${city.main.temp} ℃`;
        minTemp.innerHTML = `Min: ${city.main.temp_min} ℃`;
        maxTemp.innerHTML = `Max: ${city.main.temp_max} ℃`;
        humidity.innerHTML = `Humidity: ${city.main.humidity}`;
        windSpeed.innerHTML = `Wind Speed: ${city.wind.speed} m/s`;
        weatherStatus = city.weather[0].main;
      }).then(() => {
        findImage(weatherStatus).then((image) => {
          weatherImage.setAttribute('src', image.data[0].images.downsized.url);
        });
      }).catch(onError);
    } else {
      findWeatherFahrenheit(cityInput.value).then((city) => {
        cityName.innerHTML = city.name;
        description.innerHTML = city.weather[0].description;
        temp.innerHTML = `${city.main.temp} ℉`;
        minTemp.innerHTML = `Min: ${city.main.temp_min} ℉`;
        maxTemp.innerHTML = `Max: ${city.main.temp_max} ℉`;
        humidity.innerHTML = `Humidity: ${city.main.humidity}`;
        windSpeed.innerHTML = `Wind Speed: ${city.wind.speed} mi/h`;
        weatherStatus = city.weather[0].main;
      }).then(() => {
        findImage(weatherStatus).then((image) => {
          weatherImage.setAttribute('src', image.data[0].images.downsized.url);
        });
      }).catch(onError);
    }
  });
};

export { searchCity };
