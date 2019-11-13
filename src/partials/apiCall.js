const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
let cityName = 'cityName';
const APP_ID = '&APPID=63483644a53e7a45025b926c656d5f59';
const UNIT = '&units=metric';
const GIPHY_URL = 'http://api.giphy.com/v1/gifs/search?q=image&api_key=g5w7GFA06oaBmRTrSgVCkFRsErNwJ9bw&limit=1';

let findWeather = city => {
  return new Promise((resolve, reject) => {
    let url = `${API_URL}${cityName.replace('cityName', city)}${APP_ID}${UNIT}`;
    $.get(url, { crossDomain: true }, data => {
      resolve(data)
    }).fail ( () => {
      reject(city);
    });
  });
};

let findImage = image => {
  return new Promise((resolve, reject) => {
    let url = `${GIPHY_URL.replace('image', image)}`;
    $.get(url, data => {
      resolve(data)
    })
    .fail ( () => {
      reject(image);
    });
  });
}

export { findWeather, findImage };
