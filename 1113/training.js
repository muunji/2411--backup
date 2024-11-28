//기초 데이터 정의
const KDTStudent = ["공","서","김"];

/**
 * 함수 선언문 방식
 * 기본적인 학생 목록 출력을 담당함
 */
function first() {
  console.log("1번 함수 (함수 선언문) : 학생 목록을 출력합니다.");
  KDTStudent.forEach((student,index)=>{
    console.log(`${index+1}번째 학생: ${student}`);
  });
}

/**
 * 함수 표현식 방식
 * 학생 이름에 번호를 붙여 배열로 반환함
 */
const second = function() {
  console.log("2번 함수 (함수 표현식) : 번호를 붙여 반환합니다.");
  return KDTStudent.map((student, index)=> `${index +1}번 ${student}`);
};

/**
 * 함수 표현식 + 화살표 함수 방식
 * 특정 학생을 찾아 상태 메시지를 반환함
 */
const third = (searchedStudent) => {
  console.log("3번 함수 (화살표 함수) : 학생을 찾아 메시지를 만듭니다.");
  const fooundResult = KDTStudent.find(function(student){
    return student === searchedStudent;
  });
  if (fooundResult === true) {
    // (student === searchedStudent)가 맞다면
    return `${fooundResult} 학생을 찾았습니다!`;
  } else {
    return "해당 학생을 찾을 수 없습니다.";
  }
};

/**
 * 고차 함수 표현식
 * 학생 데이터를 처리하는 함수를 반환함
 */
const fourth = function(processFunction) {
  console.log("4번 함수 (고차 함수) : 데이터 처리 방식을 매개변수로 받습니다.");
  return function(studentName) {
    return processFunction(studentName);
  };
};

//각각의 함수 사용 예시
console.log("\n======첫번째함수실행======");
first();

console.log("\n======두번째함수실행======");
const numberedStudents = second();
console.log("처리 결과:", numberedStudents);

console.log("\n===세번째함수실행======");
console.log("검색 결과:", third("공"));
console.log("검색 결과:", third("이"));

console.log("\n======네번째함수실행======");
//학생 이름을 대문자로 변환하는 처리 함수
const createEnglishName = fourth(function(name){
  return `${name} -> ${name}Kim`;
});
KDTStudent.forEach(student => {
  console.log(createEnglishName(student));
});