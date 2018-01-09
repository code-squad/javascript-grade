var DATA = [{
    'name': '데이터베이스',
    'grade': 'A',
    'credit': 3
  },
  {
    'name': '교양영어',
    'grade': 'B+',
    'credit': 2
  },
  {
    'name': '철학',
    'grade': 'B+',
    'credit': 1
  }
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
    creditSum += value.credit;
  });
  return creditSum
}



// 평점을 구하는 함수
function averageCredit(obj) {
  var gradePoints = 0;
  for (var point in obj) {
    var lectures = obj[point];
    gradePoints += GP[lectures.grade] * lectures.credit;
  }
  return (gradePoints / sumCredit(DATA)).toFixed(2)
}


console.log("이수학점:", sumCredit(DATA));
console.log("평균:", averageCredit(DATA));