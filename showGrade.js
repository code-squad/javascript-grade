var data = [
  ['데이터베이스', 'A', 3],
  ['교양영어', 'B+', 1],
  ['철학', 'A', 2]
];

var gradeData = {
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

//data의 평점을 gradeData 객체의 점수와 매핑하는 함수.
function getScoreArr(data){
  let scoreArr = []
  for(let i = 0; i < data.length; i++){
    scoreArr.push(gradeData[data[i][1]]);
  }
  return scoreArr;
}

//data의 이수학점을 CreditArr에 담는 함수
function getCreditArr(data) {
  let CreditArr = [];
  for(let n = 0; n < data.length; n++) {
    CreditArr.push(data[n][2]);
  }
  return CreditArr;
}

//data를 인자로 받아서, 총평점과 이수학점을 반환하는 함수.
function showGrade(data){
  let ScoreResult = getScoreArr(data);
  let CreditResult = getCreditArr(data);
  let gradeResult = 0;
  let sumCredit = 0; //총 이수학점

  for(let i = 0; i < data.length; i++){
    sumCredit += CreditResult[i];
    gradeResult += ScoreResult[i] * CreditResult[i];
  }
  gradeResult = (gradeResult/sumCredit).toFixed(2);
  return "총 평점: " + gradeResult + " 이수학점: " + sumCredit;
}

console.log(showGrade(data));

//  "총평점 3.92 , 이수학점 6"