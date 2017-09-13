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
        this.data = JSON.parse(jsonString);
        callback(this.data);
      }
    }.bind(this);
    request.send();
  }
 
}

module.exports = AjaxRequest;
