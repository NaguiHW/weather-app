/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/main.scss */ \"./src/style/main.scss\");\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _partials_addEventToButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partials/addEventToButton */ \"./src/partials/addEventToButton.js\");\n\n\n\nObject(_partials_addEventToButton__WEBPACK_IMPORTED_MODULE_1__[\"searchCity\"])();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGUvbWFpbi5zY3NzJztcbmltcG9ydCB7IHNlYXJjaENpdHkgfSBmcm9tICcuL3BhcnRpYWxzL2FkZEV2ZW50VG9CdXR0b24nO1xuXG5zZWFyY2hDaXR5KCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/partials/addEventToButton.js":
/*!******************************************!*\
  !*** ./src/partials/addEventToButton.js ***!
  \******************************************/
/*! exports provided: searchCity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchCity\", function() { return searchCity; });\n/* harmony import */ var _apiCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiCall */ \"./src/partials/apiCall.js\");\n/* harmony import */ var _onError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onError */ \"./src/partials/onError.js\");\n/* eslint-disable import/prefer-default-export */\n\n\n\nconst cityInput = document.querySelector('#city');\nconst search = document.querySelector('.search');\nconst cityName = document.querySelector('#city-name');\nconst description = document.querySelector('#description');\nconst temp = document.querySelector('#temp');\nconst minTemp = document.querySelector('#min-temp');\nconst maxTemp = document.querySelector('#max-temp');\nconst humidity = document.querySelector('#humidity');\nconst windSpeed = document.querySelector('#wind-speed');\nconst weatherImage = document.querySelector('#image');\nlet weatherStatus = '';\n\nconst searchCity = () => {\n  search.addEventListener('click', () => {\n    Object(_apiCall__WEBPACK_IMPORTED_MODULE_0__[\"findWeather\"])(cityInput.value).then((city) => {\n      cityName.innerHTML = city.name;\n      description.innerHTML = city.weather[0].description;\n      temp.innerHTML = `${city.main.temp} ℃`;\n      minTemp.innerHTML = `Min: ${city.main.temp_min} ℃`;\n      maxTemp.innerHTML = `Max: ${city.main.temp_max} ℃`;\n      humidity.innerHTML = `Humidity: ${city.main.humidity}`;\n      windSpeed.innerHTML = `Wind Speed: ${city.wind.speed} m/s`;\n      weatherStatus = city.weather[0].main;\n    }).then(() => {\n      Object(_apiCall__WEBPACK_IMPORTED_MODULE_0__[\"findImage\"])(weatherStatus).then((image) => {\n        weatherImage.setAttribute('src', image.data[0].images.downsized.url);\n      });\n    }).catch(_onError__WEBPACK_IMPORTED_MODULE_1__[\"onError\"]);\n  });\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvYWRkRXZlbnRUb0J1dHRvbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYXJ0aWFscy9hZGRFdmVudFRvQnV0dG9uLmpzP2IwY2QiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IHsgZmluZFdlYXRoZXIsIGZpbmRJbWFnZSB9IGZyb20gJy4vYXBpQ2FsbCc7XG5pbXBvcnQgeyBvbkVycm9yIH0gZnJvbSAnLi9vbkVycm9yJztcblxuY29uc3QgY2l0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHknKTtcbmNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gnKTtcbmNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHktbmFtZScpO1xuY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcbmNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcCcpO1xuY29uc3QgbWluVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtaW4tdGVtcCcpO1xuY29uc3QgbWF4VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXgtdGVtcCcpO1xuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtaWRpdHknKTtcbmNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kLXNwZWVkJyk7XG5jb25zdCB3ZWF0aGVySW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1hZ2UnKTtcbmxldCB3ZWF0aGVyU3RhdHVzID0gJyc7XG5cbmNvbnN0IHNlYXJjaENpdHkgPSAoKSA9PiB7XG4gIHNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBmaW5kV2VhdGhlcihjaXR5SW5wdXQudmFsdWUpLnRoZW4oKGNpdHkpID0+IHtcbiAgICAgIGNpdHlOYW1lLmlubmVySFRNTCA9IGNpdHkubmFtZTtcbiAgICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IGNpdHkud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICAgIHRlbXAuaW5uZXJIVE1MID0gYCR7Y2l0eS5tYWluLnRlbXB9IOKEg2A7XG4gICAgICBtaW5UZW1wLmlubmVySFRNTCA9IGBNaW46ICR7Y2l0eS5tYWluLnRlbXBfbWlufSDihINgO1xuICAgICAgbWF4VGVtcC5pbm5lckhUTUwgPSBgTWF4OiAke2NpdHkubWFpbi50ZW1wX21heH0g4oSDYDtcbiAgICAgIGh1bWlkaXR5LmlubmVySFRNTCA9IGBIdW1pZGl0eTogJHtjaXR5Lm1haW4uaHVtaWRpdHl9YDtcbiAgICAgIHdpbmRTcGVlZC5pbm5lckhUTUwgPSBgV2luZCBTcGVlZDogJHtjaXR5LndpbmQuc3BlZWR9IG0vc2A7XG4gICAgICB3ZWF0aGVyU3RhdHVzID0gY2l0eS53ZWF0aGVyWzBdLm1haW47XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICBmaW5kSW1hZ2Uod2VhdGhlclN0YXR1cykudGhlbigoaW1hZ2UpID0+IHtcbiAgICAgICAgd2VhdGhlckltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1hZ2UuZGF0YVswXS5pbWFnZXMuZG93bnNpemVkLnVybCk7XG4gICAgICB9KTtcbiAgICB9KS5jYXRjaChvbkVycm9yKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBzZWFyY2hDaXR5IH07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/partials/addEventToButton.js\n");

/***/ }),

/***/ "./src/partials/apiCall.js":
/*!*********************************!*\
  !*** ./src/partials/apiCall.js ***!
  \*********************************/
/*! exports provided: findWeather, findImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findWeather\", function() { return findWeather; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findImage\", function() { return findImage; });\nconst API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';\nconst cityName = 'cityName';\nconst APP_ID = '&APPID=63483644a53e7a45025b926c656d5f59';\nconst UNIT = '&units=metric';\nconst GIPHY_URL = 'http://api.giphy.com/v1/gifs/search?q=image&api_key=g5w7GFA06oaBmRTrSgVCkFRsErNwJ9bw&limit=1';\n\nconst findWeather = (city) => new Promise((resolve, reject) => {\n  const url = `${API_URL}${cityName.replace('cityName', city)}${APP_ID}${UNIT}`;\n  $.get(url, { crossDomain: true }, (data) => {\n    resolve(data);\n  }).fail(() => {\n    reject(city);\n  });\n});\n\nconst findImage = (image) => new Promise((resolve, reject) => {\n  const url = `${GIPHY_URL.replace('image', image)}`;\n  $.get(url, (data) => {\n    resolve(data);\n  })\n    .fail(() => {\n      reject(image);\n    });\n});\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvYXBpQ2FsbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYXJ0aWFscy9hcGlDYWxsLmpzPzg2YjgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQVBJX1VSTCA9ICdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSc7XG5jb25zdCBjaXR5TmFtZSA9ICdjaXR5TmFtZSc7XG5jb25zdCBBUFBfSUQgPSAnJkFQUElEPTYzNDgzNjQ0YTUzZTdhNDUwMjViOTI2YzY1NmQ1ZjU5JztcbmNvbnN0IFVOSVQgPSAnJnVuaXRzPW1ldHJpYyc7XG5jb25zdCBHSVBIWV9VUkwgPSAnaHR0cDovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy9zZWFyY2g/cT1pbWFnZSZhcGlfa2V5PWc1dzdHRkEwNm9hQm1SVHJTZ1ZDa0ZSc0VyTndKOWJ3JmxpbWl0PTEnO1xuXG5jb25zdCBmaW5kV2VhdGhlciA9IChjaXR5KSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGNvbnN0IHVybCA9IGAke0FQSV9VUkx9JHtjaXR5TmFtZS5yZXBsYWNlKCdjaXR5TmFtZScsIGNpdHkpfSR7QVBQX0lEfSR7VU5JVH1gO1xuICAkLmdldCh1cmwsIHsgY3Jvc3NEb21haW46IHRydWUgfSwgKGRhdGEpID0+IHtcbiAgICByZXNvbHZlKGRhdGEpO1xuICB9KS5mYWlsKCgpID0+IHtcbiAgICByZWplY3QoY2l0eSk7XG4gIH0pO1xufSk7XG5cbmNvbnN0IGZpbmRJbWFnZSA9IChpbWFnZSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBjb25zdCB1cmwgPSBgJHtHSVBIWV9VUkwucmVwbGFjZSgnaW1hZ2UnLCBpbWFnZSl9YDtcbiAgJC5nZXQodXJsLCAoZGF0YSkgPT4ge1xuICAgIHJlc29sdmUoZGF0YSk7XG4gIH0pXG4gICAgLmZhaWwoKCkgPT4ge1xuICAgICAgcmVqZWN0KGltYWdlKTtcbiAgICB9KTtcbn0pO1xuXG5leHBvcnQgeyBmaW5kV2VhdGhlciwgZmluZEltYWdlIH07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/partials/apiCall.js\n");

/***/ }),

/***/ "./src/partials/onError.js":
/*!*********************************!*\
  !*** ./src/partials/onError.js ***!
  \*********************************/
/*! exports provided: onError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onError\", function() { return onError; });\n/* eslint-disable import/prefer-default-export */\nconst error = document.createElement('div');\nconst container = document.querySelector('.container');\n\nconst onError = (city) => {\n  error.innerHTML = `${city} doesn't exist. Try another one.`;\n  error.classList.add('error');\n  container.appendChild(error);\n  setTimeout(() => error.remove(), 3000);\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFydGlhbHMvb25FcnJvci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYXJ0aWFscy9vbkVycm9yLmpzP2ZlZDEiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuY29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcblxuY29uc3Qgb25FcnJvciA9IChjaXR5KSA9PiB7XG4gIGVycm9yLmlubmVySFRNTCA9IGAke2NpdHl9IGRvZXNuJ3QgZXhpc3QuIFRyeSBhbm90aGVyIG9uZS5gO1xuICBlcnJvci5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZXJyb3IpO1xuICBzZXRUaW1lb3V0KCgpID0+IGVycm9yLnJlbW92ZSgpLCAzMDAwKTtcbn07XG5cbmV4cG9ydCB7IG9uRXJyb3IgfTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/partials/onError.js\n");

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGUvbWFpbi5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL21haW4uc2Nzcz83NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/style/main.scss\n");

/***/ })

/******/ });