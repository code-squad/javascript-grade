const courseGradeData = [
  {
    'name': '데이터베이스',
    'grade': 'A',
    'credit': 3,
    'major' : true
  },
  {
    'name': '교양영어',
    'grade': 'B+',
    'credit': 1,
    'major' : false
  },
  {
    'name': '철학',
    'grade': 'A',
    'credit': 2,
    'major' : false
  }
];
    
const gradeData = {
  "A+": 4.5,
  "A": 4,
  "B+": 3.5,
  "B": 3,
  "C+": 2.5,
  "C": 2,
  "D+": 1.5,
  "D": 1,
  "F": 0
}
    
//courseGradeData 평점을 gradeData 객체의 점수와 매핑하는 함수.
function getScoreArr(currentVal) {
  return gradeData[currentVal["grade"]];
}
  
//courseGradeData의 전공평점을 gradeData 객체의 점수와 매핑하는 함수.
function getMajorScoreArr(currentVal) {
  if(currentVal["major"]) {
    return gradeData[currentVal["grade"]];
  } else {
      return [];
  }
}
    
//courseGradeData 이수학점을 CreditArr에 담는 함수
function getCreditArr(currentVal) {
  if(currentVal["grade"] === "F") {
    return 0;
  }
  return currentVal["credit"];
}
  
function getMajorCreditArr(currentVal) {
  if(currentVal["grade"] === "F") {
    return 0;
  }
  if(currentVal["major"]) {
  return currentVal["credit"];
  } else {
      return [];
  }
}
  
function getCredit(sumCredit, creditVal) {
  sumCredit += creditVal;
  return sumCredit;
}
  
//총 이수학점을 반환하는 함수
function showCredit(creditResult) {
  return creditResult.reduce(getCredit);
}
  
//showCredit 함수의 반환값을 인자로 받아서, 총 평점을 반환하는 함수.
function showGrade(totalCredit, scoreResult) {
  let gradeResult = 0;
  for (let i = 0; i < scoreResult.length; i++) {
    gradeResult += scoreResult[i] * creditResult[i];
  }
  
  gradeResult = (gradeResult / totalCredit).toFixed(2);
  return gradeResult;
}
  
const creditResult = courseGradeData.map(getCreditArr);
const majorCreditResult = courseGradeData.map(getMajorCreditArr);
const scoreResult = courseGradeData.map(getScoreArr);
const majorScoreResult = courseGradeData.map(getMajorScoreArr);
let totalCredit = showCredit(creditResult);
let majorTotalCredit = showCredit(majorCreditResult);

console.log(
  "총 평점: " + showGrade(totalCredit, scoreResult) + ",",
  "전공 평점: " + showGrade(majorTotalCredit, majorScoreResult) + "," ,
  "총 이수학점: " + totalCredit + ",",
  "전공 이수학점: " + majorTotalCredit
);
    
  // > "총평점 3.92 , 이수학점 6"