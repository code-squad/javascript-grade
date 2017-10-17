/*

학점 {
  과목명: {
    점수,
    이수학점
  }
}

getReport 함수 내에서 가지고 있을 변수
- 총점, 학점, 길이

*/

var grades = {
  데이터베이스: {
    grade: "A",
    creditHour: 3
  },
  교양영어: {
    grade: "B+",
    creditHour: 1
  },
  철학: {
    grade: "A",
    creditHour: 2
  }
};

var gradeMap = {
  "A+": 4.3,
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  "D+": 1.3,
  D: 1.0,
  "D-": 0.7,
  F: 0
};

function getReport() {
  var totalLecture = Object.keys(grades).length;
  var totalCredit = 0;
  var gradePoint = 0;
  var gradePointAvg = 0;

  for (var k in grades) {
    var target = grades[k];

    totalCredit += target.creditHour;
    gradePoint += gradeMap[target.grade];
  }

  gradePointAvg = (gradePoint / totalLecture).toFixed(2);

  console.log("총평점 " + gradePointAvg + " , 이수학점 " + totalCredit);
}
