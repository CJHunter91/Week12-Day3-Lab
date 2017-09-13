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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var AjaxRequest = __webpack_require__(1);
var CountryView = __webpack_require__(2);

var countryUrl = 'https://restcountries.eu/rest/v2';
var databaseUrl = 'http://localhost:3000/api/bucket_list';

window.addEventListener('load', function(){
  var ajaxRequest = new AjaxRequest(countryUrl);
  var countryView = new CountryView();
  ajaxRequest.getData(countryView.render);

  var form = document.querySelector('#countrylist');

  form.addEventListener('submit', function(event){
    event.preventDefault();

    var arr = []
    for (var country of this.country){
      if (country.checked){
        arr.push(country.value);
      }
    };

    //console.log(packageData(arr,'countries'));

    var ajaxRequestPost = new AjaxRequest(databaseUrl);
    ajaxRequestPost.post(packageData(arr, 'countries'));

  });
})

var packageData = function(indexArr, key){
  var countryData = JSON.parse(localStorage.getItem(key));
  var arr = [];
  for (var index of indexArr){
    var obj = {
      name: countryData[index].name,
      latlng: countryData[index].latlng
    }
    arr.push(obj);
  }
  return(arr);
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var AjaxRequest = function(url){
  this.url = url;
  this.data = [];
}

AjaxRequest.prototype = {

  getData: function(callback){
    var request = new XMLHttpRequest();
    request.open("GET", this.url);
    request.onload = function(){
      if(request.status === 200){
        var jsonString = request.responseText;
        localStorage.setItem('countries', jsonString);
        this.data = JSON.parse(jsonString);
        callback(this.data);
      }
    }.bind(this);
    request.send();
  },

  post: function(data){
    var request = new XMLHttpRequest();
    request.open("POST", this.url);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function(){
      if(request.status === 200){
        var jsonString = request.responseText;
        this.data = JSON.parse(jsonString);
      }
    }.bind(this);
    request.send(JSON.stringify(data));
  }
 
}

module.exports = AjaxRequest;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var CountryView = function(){

}

CountryView.prototype = {

  render: function(data){
    var container = document.querySelector('#countrylist');

    data.forEach(function(item, index){

      var p = document.createElement('p');
      var input = document.createElement('input');
      input.type = 'checkbox';
      input.name = 'country';
      input.value = index;
      p.innerHTML = item.name;
      p.appendChild(input);
      container.appendChild(p);

    });
  }
}

module.exports = CountryView;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map