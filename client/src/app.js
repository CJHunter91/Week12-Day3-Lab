var AjaxRequest = require('./services/ajax_request.js');
var CountryView = require('./views/country_view.js');
var countryUrl = 'https://restcountries.eu/rest/v2';

window.addEventListener('load', function(){
  var ajaxRequest = new AjaxRequest(countryUrl);
  var countryView = new CountryView();
  ajaxRequest.getData(countryView.render);
})