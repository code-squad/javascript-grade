const courseGradeData = [
  ['데이터베이스', 'A', 3],
  ['교양영어', 'B+', 1],
  ['철학', 'A', 2]
];

const gradeData = {
  "A+" : 4.5,
  "A" : 4,
  "B+" : 3.5,
  "B" : 3,
  "C+" : 2.5,
  "C" : 2,
  "D+" : 1.5,
  "D" : 1,
  "F" : 0
}

//courseGradeData 평점을 gradeData 객체의 점수와 매핑하는 함수.
function getScoreArr(currentVal) {
  return gradeData[currentVal[1]];
}

//courseGradeData 이수학점을 CreditArr에 담는 함수
function getCreditArr(currentVal) {
  return currentVal[2];
}

// courseGradeData를 인자로 받아서, 총평점과 이수학점을 반환하는 함수.
function showGrade(courseGradeData) {
  const scoreResult = courseGradeData.map(getScoreArr);
  const creditResult = courseGradeData.map(getCreditArr);
  let gradeResult = 0;
  let sumCredit = 0; //총 이수학점

  for(let i = 0; i < courseGradeData.length; i++) {
    sumCredit += creditResult[i];
    gradeResult += scoreResult[i] * creditResult[i];
  }
  gradeResult = (gradeResult/sumCredit).toFixed(2);
  return "총 평점: " + gradeResult + " 이수학점: " + sumCredit;
}

console.log(showGrade(courseGradeData));

// function showGrade(currentVal) {
//   const scoreResult = courseGradeData.map(getScoreArr);
//   const creditResult = courseGradeData.map(getCreditArr);
//   let gradeResult = 0;
//   let sumCredit = 0; //총 이수학점

//   for(let i = 0; i < courseGradeData.length; i++) {
//     sumCredit += creditResult[i];
//     gradeResult += scoreResult[i] * creditResult[i];
//   }
//   gradeResult = (gradeResult/sumCredit).toFixed(2);
//   return "총 평점: " + gradeResult + " 이수학점: " + sumCredit;
// }

// console.log(courseGradeData.forEach(showGrade));

//  "총평점 3.92 , 이수학점 6"