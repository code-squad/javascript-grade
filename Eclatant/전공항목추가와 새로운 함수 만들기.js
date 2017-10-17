var gradeMap45 = {
  "A+": 4.5,
  A: 4.0,
  "B+": 3.5,
  B: 3.0,
  "C+": 2,
  C: 2.0,
  "D+": 1.5,
  D: 1.0,
  F: 0
};

var gradeMap43 = {
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

var gradeMap40 = {
  "A+": 4.0,
  A: 3.5,
  "B+": 3.0,
  B: 2.5,
  "C+": 2,
  C: 1.5,
  "D+": 1.0,
  D: 0.5,
  F: 0
};

var grades = [
  {
    name: "데이터베이스",
    grade: "B+",
    credit: 3,
    major: true
  },
  {
    name: "교양영어",
    grade: "A+",
    credit: 3,
    major: false
  },
  {
    name: "네트워크",
    grade: "B+",
    credit: 3,
    major: true
  },
  {
    name: "글쓰기",
    grade: "A+",
    credit: 3,
    major: false
  }
];

function getGradeAvg(data, gradeMap) {
  var sumGrade = data.reduce(function(prev, curr) {
    return prev + gradeMap[curr.grade];
  }, 0);

  var gradeAvg = (sumGrade / data.length).toFixed(2);

  return gradeAvg;
}
