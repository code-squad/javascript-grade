const courseGradeData = [
  ['데이터베이스', 'A', 3],
  ['교양영어', 'B+', 1],
  ['철학', 'A', 2]
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
  return gradeData[currentVal[1]];
}

//courseGradeData 이수학점을 CreditArr에 담는 함수
function getCreditArr(currentVal) {
  return currentVal[2];
}

function showCredit() {
  creditResult = courseGradeData.map(getCreditArr);
  let sumCredit = 0; //총 이수학점
  for (let i = 0; i < courseGradeData.length; i++) {
    sumCredit += creditResult[i];
  }

  return sumCredit;
}

//showCredit 함수의 반환값을 인자로 받아서, gradeResult를 반환하는 함수.
function showGrade(sumCredit) {
  const scoreResult = courseGradeData.map(getScoreArr);
  let gradeResult = 0;
  for (let i = 0; i < courseGradeData.length; i++) {
    gradeResult += scoreResult[i] * creditResult[i];
  }

  gradeResult = (gradeResult/sumCredit).toFixed(2);
  return gradeResult;
}

let creditResult = [];
let sumCredit = showCredit();
console.log("총 평점: " + showGrade(sumCredit), "이수 학점: " + sumCredit);


//  "총평점 3.92 , 이수학점 6"