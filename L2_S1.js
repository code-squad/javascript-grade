// lecture2 - STEP1. 학점계산기


// 학점을 계산하는 함수
let showGrade = function (data) {

  let sum = 0;
  let creditSum = 0;
  let majorSum = 0;
  let majorCreditSum = 0;

  for (let keys of data) {

    let grade = keys.grade;
    let major = keys.major;
    gradePoint = changeEnglish[grade];
    let credit = keys.credit;

    creditSum += credit;
    sum += gradePoint * credit;

    if (major) {

      majorCreditSum += credit;
      majorSum += gradePoint * credit;
    }
  }

  console.log('(4.5기준)  총평점 : ' + calculate(sum, creditSum, 4.5) + '  전공 평점 = ' + calculate(majorSum, majorCreditSum, 4.5));
  console.log('(4.0기준)  총평점 : ' + calculate(sum, creditSum, 4.0) + '  전공 평점 = ' + calculate(majorSum, majorCreditSum, 4.0));
  console.log('         이수학점 : ' + creditSum + '  전공이수학점 = ' + majorCreditSum);
}



// 최대평점 기준을 4.5에서 4.0으로 변환하는 함수
let calculate = function (sum, creditSum, scale) {

  if (scale === 4.5) return (sum / creditSum).toFixed(2);
  return (sum * (4 / 4.5) / creditSum).toFixed(2);
}



// greade를 숫자값으로 대응한 배열
const changeEnglish = {
  'A+': 4.5,
  'A': 4,
  'B+': 3.5,
  'B': 3,
  'C+': 2,
  'C': 2,
  'D+': 1.5,
  'D': 1,
  'F': 0
}



// 데이터
const data = [
  {
    'name': '데이터베이스',
    'grade': 'A',
    'credit': 3,
    'major': false
  },
  {
    'name': '교양영어',
    'grade': 'B+',
    'credit': 2,
    'major': true
  },
  {
    'name': '철학',
    'grade': 'B+',
    'credit': 1,
    'major': false
  }
];


showGrade(data);