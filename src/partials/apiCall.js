const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const cityName = 'cityName';
const APP_ID = '&APPID=63483644a53e7a45025b926c656d5f59';
const CELCIUS = '&units=metric';
const FAHRENHEIT = '&units=imperial';
const GIPHY_URL = 'http://api.giphy.com/v1/gifs/search?q=image&api_key=g5w7GFA06oaBmRTrSgVCkFRsErNwJ9bw&limit=1';

const findWeatherCelcius = (city) => new Promise((resolve, reject) => {
  const url = `${API_URL}${cityName.replace('cityName', city)}${APP_ID}${CELCIUS}`;
  $.get(url, { crossDomain: true }, (data) => {
    resolve(data);
  }).fail(() => {
    reject(city);
  });
});

const findWeatherFahrenheit = (city) => new Promise((resolve, reject) => {
  const url = `${API_URL}${cityName.replace('cityName', city)}${APP_ID}${FAHRENHEIT}`;
  $.get(url, { crossDomain: true }, (data) => {
    resolve(data);
  }).fail(() => {
    reject(city);
  });
});

const findImage = (image) => new Promise((resolve, reject) => {
  const url = `${GIPHY_URL.replace('image', image)}`;
  $.get(url, (data) => {
    resolve(data);
  })
    .fail(() => {
      reject(image);
    });
});

export { findWeatherCelcius, findWeatherFahrenheit, findImage };
