var data = [['데이터베이스', 'A', 3], ['교양영어', 'B+', 1], ['철학', 'A', 2]]; // 실험데이터

var grade = { // 해당성적점수
  "A+": 4.5,
  "A": 4.0,
  "B+": 3.5,
  "B": 3.0,
  "C+": 2.5,
  "C": 2.0,
  "D+": 1.5,
  "D": 1.0,
  "F": 0
};

var subject = ""; // 과목
var eduCredit = 0; // 이수학점
var totalEduCredit = 0; // 총이수학점
var totalAvgCredit = 0; // 총평균점수
var totalCalculate = 0; // 총계산값

function showGrade(data) {
  // 이수학점 총합 계산
  let result = [];

  for (var credit in data) {
    if (typeof data[credit][2] === "number") { // 막힘 발생: 배열의 각각의 value를 다 합해야 할 방법이 생각이 안남 => 탐색만 하는 함수를 따로 제작하기로 함
      result.push(data[credit][2]);
      console.log(result); 
    }
  }

  // 이수학점과 해당 성적을 가져와 총 평균 성적을 계산
}

showGrade(data); // "총평점 3.92 , 이수학점 6"
