const http = require('http');
const fs = require('fs');

const index = http.createServer(function(request,response){


   fs.readFile("./public/index.html",function(err,data){
     
     let contentType = {
       "content-Type" : "text/html; charset=utf-8"
       
      };
      
      response.writeHead(200,{contentType});
      response.write(data);
      response.end();
    });
});

index.listen(8000);

const Index = http.createServer(function(request,response){


  fs.readFile("./public/index.html",function(err,data){
    
    let contentType = {
      "content-Type" : "text/html; charset=utf-8"
      
     };
     
     response.writeHead(200,{contentType});
     response.write(data);
     response.end();
   });
});

Index.listen(8080);