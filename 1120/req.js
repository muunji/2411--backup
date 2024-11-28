const http = require('http');

const server = http.createServer(function(request,response){

  response.writeHead(200,{'content-Type':'text/plain'});
  response.end('Hello,world!');
})

server.listen(3000,function(){
  console.log("request_url");
})
// const minji = http.createServer(function(request, response){
//   // 콜백 함수
//   if (request.url === '/') {

//     fs.readFile("./public/index.html","utf-8",function(error,data){
//       response.writeHead(200,{"content-type" : "text/html"});
//       response.write(data);
//       response.end();
//     })
//   }

// });