var req=new XMLHttpRequest();
var url='https://api.covid19api.com/summary';
req.open('GET',url,true)
req.send();
req.onload=function(){
var data=JSON.parse(this.response);
console.log(data.Global);
}
