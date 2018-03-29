var data = [
  {
    'name': '데이터베이스',
    'grade': 'A',
    'credit': 3,
    'major': true
  },
  {
    'name': '교양영어',
    'grade': 'B+',
    'credit': 2,
    'major': false
  },
  {
    'name': '철학',
    'grade': 'B+',
    'credit': 1,
    'major': false
  },
  {
    'name': '컴퓨터공학기초',
    'grade': 'A+',
    'credit': 3,
    'major': true
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

// 전공 성적 계산
var calculateMajor = function(data){
  let sumMajorGrade = 0; // 전공성적 * 전공이수학점의 합
  let sumMajor = 0; // 총 전공 이수학점
  let arrMajor = []; // 총 전공 평점

  for (let i = 0; i < data.length; i++) {
    if (data[i].major) {
      sumMajor += data[i].credit;
      sumMajorGrade += grade[data[i].grade] * data[i].credit;
    }
  }
  arrMajor.push(sumMajorGrade, sumMajor);
  return arrMajor;
};

// 전공 성적 출력
var showMajorGrade = function (data){
  let arrMajor = calculateMajor(data);
  let sumMajorGrade = arrMajor[0]; // 전공성적 * 전공이수학점의 합
  let sumMajor = arrMajor[1]; // 총 전공 이수학점
  let totalAvgMajor = 0;

  totalAvgMajor = (sumMajorGrade / sumMajor).toFixed(2);
  return "전공평점: " + totalAvgMajor + ", " + "전공이수학점: " + sumMajor;
};


// 전 과목 성적 계산 
var calculateAllGrade = function (data) {
  let arrGrade = []; // 총 평점
  let sumGrade = 0; // 해당성적*이수학점의 합
  let sumCredit = 0; // 총 이수학점

  for (let i = 0; i < data.length; i++) {
    sumCredit += data[i].credit;
    sumGrade += grade[data[i].grade] * data[i].credit;
  }
  arrGrade.push(sumGrade, sumCredit);
  return arrGrade;
};

// 전 과목 성적 출력
function showAllGrade(data){
  let totalAvg = 0;
  let arrGrade = calculateAllGrade(data); // 전과목 계산 함수
  let showMajor = showMajorGrade(data); // 전공과목 출력함수
  let sumGrade = arrGrade[0]; 
  let sumCredit = arrGrade[1];
  let transAvg = 0;
  
  totalAvg = (sumGrade / sumCredit).toFixed(2);
  transAvg = (totalAvg * 8 / 9).toFixed(2);

  return "총평점: " + totalAvg + ", " +  "이수학점: " + sumCredit + ", " + showMajor +"\n" +
  "4.0 학점으로 변환되는 경우 총평점은 " + transAvg + "입니다.";
}

// 과목 추가 함수
function addLecture(addData) {
  if(typeof addData === "object"){
    return data.push(addData);
  }
}

addLecture({'name': '알고리즘', 'grade': 'B', 'credit': 3, 'major': true});

setTimeout(function () {
  console.log(showAllGrade(data));
}, 2000);
