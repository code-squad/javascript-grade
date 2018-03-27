// refatoring 
// 1. 이중 for문을 대체할 기능 구현
// 2. 성적탐색, 이수학점 탐색 기능 중 중복 된 기능 합치기 => 탐색기능(?)

var data = [ ['데이터베이스', 'A', 3], ['교양영어', 'B+', 1], ['철학', 'A', 2]]; // 실험데이터

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

var totalCredit = 0; // 총이수학점
var totalCalculate = 0; // 총계산값(이수학점*과목점수..)
var totalAvg = 0; // 총평균점수

// 성적 탐색 합계 함수
function searchGrade(inputData) {
  let data = inputData;
  let result = [];
  for (var key in data) {
    for (var value in grade) {
      if (value === data[key][1]) {
        result.push(grade[value]);
      }
    }
  }
  return result;
}

// 이수학점 탐색 합계 함수
function searchData(data) {
  let eduCredit = [];
  for (var credit in data) {
    if (typeof data[credit][2] === "number") {
      eduCredit.push(data[credit][2]);
    }
  }
  return eduCredit;
}

// 총 평점 & 총이수학점 계산
function showGrade(data) {
  let eduCredit = searchData(data);
  let resultGrade = searchGrade(data);
  let totalCredit = eduCredit.reduce(function(preKey, lastKey) { return preKey + lastKey; });  
  for(var i = 0; i < resultGrade.length; i++){
    totalCalculate += resultGrade[i] * eduCredit[i];
  }
  let totalAvg = (totalCalculate / totalCredit).toFixed(2); 
  
  return "총평점: " + totalAvg + ", " + "이수학점: " + totalCredit;
}

console.log(showGrade(data)); // "총평점 3.92 , 이수학점 6"


