const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
let cityName = 'cityName';
const APP_ID = '&APPID=63483644a53e7a45025b926c656d5f59';
const UNIT = '&units=metric';

let findWeather = city => {
  let url = `${API_URL}${cityName.replace('cityName', city)}${APP_ID}${UNIT}`;
  $.get(url, { crossDomain: true }, data => {
    console.log(data);
  });
};

export { findWeather };
