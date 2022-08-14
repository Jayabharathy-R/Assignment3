//script for fetching all the countries which uses euro currency

var request=new XMLHttpRequest();
request.open('GET','http://api.countrylayer.com/v2/currency/EUR?access_key=4be15f794d113304eef257337292711d');
request.send();
request.onload=function() {
    var data=JSON.parse(this.response);
  
   console.log(data);
    }

//script for fetching all the countries which have the language starts with ita
var request=new XMLHttpRequest();
request.open('GET','http://api.countrylayer.com/v2/lang/ita?access_key=4be15f794d113304eef257337292711d');
request.send();
request.onload=function() {
    var data=JSON.parse(this.response);
  
   console.log(data);
    }
