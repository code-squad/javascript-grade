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
// var eduCredit = 0; // 이수학점
var totalEduCredit = 0; // 총이수학점
var totalCalculate = 0; // 총계산값(이수학점*과목점수..)
var totalAvgCredit = 0; // 총평균점수

// // 배열 탐색 함수
function searchData(data) {
  let eduCredit = [];
  for (var credit in data) {
    if (typeof data[credit][2] === "number") {
      eduCredit.push(data[credit][2]);
    }
  }
  return eduCredit;


}

// 이수학점 총합 계산
function eduCreditCalculator(eduCredit) {
  
}

function showGrade(data) {
  // 이수학점 총합 계산
  totalCalculate += eduCredit;
  
  // 이수학점과 해당 성적을 가져와 총 평균 성적을 계산
  totalEduCredit += grade * eduCredit; // grade의 해당 성적을 어떻게 가져와 계산할것인가(쭉 늘어놓지 않고..)

}

// showGrade(data); // "총평점 3.92 , 이수학점 6"
console.log(searchData(data));

