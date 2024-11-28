const http = require("http");
const fs = require("fs");
// 패키지 2개에 의존
//노드 안에 들어있는 패키지 중에 골라서 사용 (내장)
// -> 노드 안에 어떤 패키지가 있는지 알아야함

// const DATA_SANGJA = {};

// const minji = http.createServer(function (request, response) {
// // .createServer 메서드 -> http : 객체
// });

// minji.listen(3000, function () {
//   console.log(" 잘듣고 있는중 ");
// });
//-----------------------------------
// const http = require("http");
// const fs = require("fs");
// // 패키지 2개에 의존
// //노드 안에 들어있는 패키지 중에 골라서 사용 (내장)
// // -> 노드 안에 어떤 패키지가 있는지 알아야함

// //현재는 버퍼 방식으로 구성되어있다.

// //참조오류가 생김 -> http/2, 3가 나옴
// //많은 인프라가 http로 작성되어서 2,3는 둔탁

// //연결된 하이퍼텍스트 -> 논문에서 참조한 내용을 한번에 알아보기 위함

// const DATA_SANGJA = {};

// const minji = http.createServer(function (request, response) {

//   let joomoon = request.url;

//   if (request.url === joomoon) {
    
//     let myDesk = fs.readFileSync("./public/index.html", "utf8");
//     DATA_SANGJA.joomoon = myDesk;
//     //파일 읽은 다음에 보내줘
//     //지금은 index.html 하나만 => 메인 페이지
//     //네이버 -> 접속하면 접속 최초화면을 봄
//     //그 후에 내가 원하는 곳으로 이동하게 됨
//     //그래서 네이버는 최초화면에 광고를 부착
//     //노션 : 바로 개인페이지로 이동 (메인페이지 운영x)
//     //이 두개는 서버에서 구별
//     //노션은 페이지에 광고가 없다.

//     response.writeHead(200, { "Content-Type": "text/html" });
//     //200 : 약속, 잘 되었다는 코드
//     //문서 전송 규약 - 외우면 좋다
//     response.write(DATA_SANGJA.joomoon);
//     response.end();

//   }
// });

// minji.listen(3000, function () {
//   console.log(" 잘듣고 있는중 ");
// });