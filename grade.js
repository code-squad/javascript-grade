var data = [
  {
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
];

var grade = { // 해당성적점수
  "A+": 4.5,
  "A": 4.0,
  "B+": 3.5,
  "B": 3.0,
  "C+": 2.5,
  "C": 2.0,
  "D+": 1.5,
  "D": 1.0,
  "F": 0
};

function showGrade(data) {
  let totalAvg = 0; // 총 평점
  let sumGrade = 0; // 해당성적*이수학점의 합
  let sumCredit = 0; // 총 이수학점
  
  for (let i = 0; i < data.length; i++) {
    sumCredit += data[i].credit;
    sumGrade += grade[data[i].grade] * data[i].credit;
  }
  totalAvg = (sumGrade / sumCredit).toFixed(2); 
  return "총평점: " + totalAvg + ", " + "이수학점: " + sumCredit;
}

console.log(showGrade(data));
