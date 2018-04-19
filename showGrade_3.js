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
    
//courseGradeData의 과목별 평점을 gradeData 객체의 점수와 매핑하는 함수.
function getScoreArr(currentVal) {
  return gradeData[currentVal["grade"]];
}
  
//courseGradeData의 전공과목별 전공평점을 gradeData 객체의 점수와 매핑하는 함수.
function getMajorScoreArr(currentVal) {
  if(currentVal["major"]) {
    return gradeData[currentVal["grade"]];
  } else {
      return [];
  }
}
    
//courseGradeData의 과목별 이수학점을 getCreditArr에 담는 함수
function getCreditArr(currentVal) {
  if(currentVal["grade"] === "F") {
    return 0;
  }
  
  return currentVal["credit"];
}

//courseGradeData의 전공과목별 전공이수학점을 getMajorCreditArr에 담는 함수
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

//creditResult 배열의 reduce함수
function getCredit(sumCredit, creditVal) {
  sumCredit += creditVal;
  return sumCredit;
}
  
//총 이수학점을 반환하는 함수
function showCredit(creditResult) {
  return creditResult.reduce(getCredit);
}
  
//showCredit 함수의 반환값과 과목별 평점 값(scoreResult)을 인자로 받아서, 총 평점을 반환하는 함수.
function showGrade(totalCredit, scoreResult) {
  let gradeResult = 0;
  for (let i = 0; i < scoreResult.length; i++) {
    gradeResult += scoreResult[i] * creditResult[i];
  }
  
  gradeResult = (gradeResult / totalCredit).toFixed(2);
  return gradeResult;
}

function convertGrade(gradeResult) {
  let convertGrade = (gradeResult / 1.125).toFixed(2);
  return convertGrade;
}

const dataResult = {
  "creditResult": creditResult = courseGradeData.map(getCreditArr), //과목별 이수학점 값
  "majorCreditResult": majorCreditResult = courseGradeData.map(getMajorCreditArr), //전공별 이수학점 값
  "scoreResult": scoreResult = courseGradeData.map(getScoreArr), //과목별 평점 값
  "majorScoreResult": majorScoreResult = courseGradeData.map(getMajorScoreArr), //전공별 이수학점 값
  "totalCredit": totalCredit = showCredit(creditResult), // 총 이수학점을 totalCredit 변수 안에 담기.
  "majorTotalCredit": majorTotalCredit = showCredit(majorCreditResult) // 전공의 총 이수학점을 majorTotalCredit 변수 안에 담기
};

console.log(
  "총 평점: " + showGrade(dataResult.totalCredit, dataResult.scoreResult) + ",",
  "전공 평점: " + showGrade(dataResult.majorTotalCredit, dataResult.majorScoreResult) + "," ,
  "총 이수학점: " + dataResult.totalCredit + ",",
  "전공 이수학점: " + dataResult.majorTotalCredit
);

console.log("4.0학점으로 변환하는 경우 총평점은: " + convertGrade(showGrade(dataResult.totalCredit, dataResult.scoreResult)) + " 입니다.")
    
  // > "총평점 3.92 , 이수학점 6"