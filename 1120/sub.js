const http = require('http');
const fs = require('fs');

const pageTwo = http.createServer(function(request, response){
  fs.readFile("./indexTwo.html","utf-8",function(err,data){
    response.writeHead(200,{"content-type":"text/html"});
    response.write(data);
    response.end();
  })
})

const pTag =document.getElementsByTagName('p')
pTag[0].addEventListener("click",function(){
  pageTwo.listen(8080);
})