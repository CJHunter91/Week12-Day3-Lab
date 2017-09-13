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