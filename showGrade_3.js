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
  
//courseGradeData 이수학점을 CreditArr에 담는 함수
function getCreditArr(currentVal) {
  if(currentVal["grade"] === "F"){
    return 0;
  }
  return currentVal["credit"];
}

function getCredit(sumCredit, creditVal) {
  sumCredit += creditVal;
  return sumCredit;
}

//총 이수학점을 반환하는 함수
function showCredit() {
  const creditResult = courseGradeData.map(getCreditArr);
  return creditResult.reduce(getCredit);
}

//showCredit 함수의 반환값을 인자로 받아서, 총 평점을 반환하는 함수.
function showGrade(totalCredit) {
  const creditResult = courseGradeData.map(getCreditArr);
  const scoreResult = courseGradeData.map(getScoreArr);
  let gradeResult = 0;
  for (let i = 0; i < scoreResult.length; i++) {
    gradeResult += scoreResult[i] * creditResult[i];
  }

  gradeResult = (gradeResult / totalCredit).toFixed(2);
  return gradeResult;
}

let totalCredit = showCredit();
console.log("총 평점: " + showGrade(totalCredit) + ",", "총 이수학점: " + totalCredit);
  
// > "총평점 3.92 , 이수학점 6"