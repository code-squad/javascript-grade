var DATA = [
  ['데이터베이스', 'A', 3],
  ['교양영어', 'B+', 1],
  ['철학', 'A', 2]
]


var GP = {
  'A+': 4.5,
  'A': 4.0,
  'B+': 3.5,
  'B': 3.0,
  'C+': 2.5,
  'C': 2.0,
  'D+': 1.5,
  'D': 1.0,
  'F': 0
}


// 총 이수학점을 구하는 함수
function sumCredit(obj) {
  var creditSum = 0;
  obj.map(value => {
    creditSum += value[2];
  });
  return creditSum;
}


// 평점을 구하는 함수
function averageCredit(obj) {
  var gradePoints = 0;
  for (var point in obj) {
    var lectures = obj[point];
    gradePoints += GP[lectures[1]] * lectures[2]
  }
  return (gradePoints / sumCredit(DATA)).toFixed(2)
}


console.log("이수학점:", sumCredit(DATA));
console.log("평균:", averageCredit(DATA));