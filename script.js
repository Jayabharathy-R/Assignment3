
var request=new XMLHttpRequest();
request.open('GET','http://api.countrylayer.com/v2/currency/AFN?access_key=4be15f794d113304eef257337292711d');
request.send();
request.onload=function() {
    var data=JSON.parse(this.response);
  
   console.log(data);
    }
