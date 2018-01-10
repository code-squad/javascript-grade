var DATA = [{
    'name': '데이터베이스',
    'grade': 'A',
    'credit': 3,
    'bMajor': true
  },
  {
    'name': '교양영어',
    'grade': 'B+',
    'credit': 2,
    'bMajor': false
  },
  {
    'name': '철학',
    'grade': 'B+',
    'credit': 1,
    'bMajor': false
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
  var sumCredit = 0;
  obj.map(value => {
    sumCredit += value.credit;
  });
  return sumCredit
}



// 평점을 구하는 함수
function averageCredit(obj) {
  var gradePoints = 0;
  for (var point in obj) {
    var lectures = obj[point];
    gradePoints += GP[lectures.grade] * lectures.credit;
  }
  return (gradePoints / sumCredit(DATA)).toFixed(2);
}


// 4.0 만점일 경우 평점을 구하는 함수
function averageChangeCredit(obj) {
  var gradePoints = 0;
  for (var point in obj) {
    var lectures = obj[point];
    gradePoints += GP[lectures.grade] * lectures.credit;
  }
  return ((gradePoints * 4.0 / 4.5) / sumCredit(DATA)).toFixed(2);
}



// 전공 평점을 구하는 함수
function averageCreditsByMajor(obj) {
  var gradeMajorPoints = 0;
  for (var key in obj) {
    var lectures = obj[key]
    if (lectures.bMajor) {
      gradeMajorPoints += GP[lectures.grade] * lectures.credit;
    };
  }
  return (gradeMajorPoints / sumCreditByMajor(DATA)).toFixed(2);
}



// 전공 이수학점을 구하는 함수
function sumCreditByMajor(obj) {
  var sumCredit = 0;
  obj.forEach(elem => {
    if (elem.bMajor) {
      sumCredit += elem.credit
    }
  });
  return sumCredit
}



// 학점계산에 필요한 함수들을 모아 console.log로 출력하는 함수
function calculateGPA(obj) {
  console.log("총평점: ", averageCredit(obj));
  console.log("전공평점: ", averageCreditsByMajor(obj));
  console.log("이수학점: ", sumCredit(obj));
  console.log("전공이수학점: ", sumCreditByMajor(obj));
  console.log("4.0학점으로 변환하는 경우 총 평점은 " + averageChangeCredit(obj) + "입니다.");
}



// 새로운 과목을 추가하는 함수 
function addLecture(subject) {
  DATA.push(subject);
  return calculateGPA(DATA)
}



addLecture({
  'name': '알고리즘',
  'grade': 'B+',
  'credit': 3,
  'bMajor': true
});