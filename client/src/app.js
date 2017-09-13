var AjaxRequest = require('./services/ajax_request.js');
var CountryView = require('./views/country_view.js');

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