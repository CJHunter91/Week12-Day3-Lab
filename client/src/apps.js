var AjaxRequest = require('./services/ajax_request.js');
var countryUrl = 'https://restcountries.eu/rest/v2';

window.addEventListener('load', function(){
  var ajaxRequest = new AjaxRequest(countryUrl);
  ajaxRequest.getData();
})