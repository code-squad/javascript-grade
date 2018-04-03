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

// 전공 과목 성적 계산
var getCalculatedMajorGrade = function(data){
  let sumMajorGrade = 0; // 전공 성적 * 이수학점 합
  let sumMajorCredit = 0; // 총 전공 이수학점
  let calculatedMajorValue = {
    "sumMajorGrade": [], 
    "sumMajorCredit": [], 
  };

  for (let i = 0; i < data.length; i++) {
    if (data[i].major) {
      sumMajorCredit += data[i].credit;
      sumMajorGrade += grade[data[i].grade] * data[i].credit;
    }
  }

  calculatedMajorValue.sumMajorGrade.push(sumMajorGrade), 
  calculatedMajorValue.sumMajorCredit.push(sumMajorCredit);

  return calculatedMajorValue;
};

// 과목 성적 계산
function getCalculatedGrade(data){
  let sumGrade = 0; // 해당성적 * 이수학점의 합 계산(전공/전공+나머지)
  let sumCredit = 0; // 이수학점 계산                         
  let calculatedValue = {
    "sumGrade": [],
    "sumCredit": []
  };
  
  for (let i = 0; i < data.length; i++) {
    sumCredit += data[i].credit;
    sumGrade += grade[data[i].grade] * data[i].credit; 
  }
  calculatedValue.sumGrade.push(sumGrade);
  calculatedValue.sumCredit.push(sumCredit);
  
  return calculatedValue;
}

// 전 과목 성적 출력
function getAllGrade(data){
  let calculatedValue = getCalculatedGrade(data); // 전과목 계산 함수
  let calculatedMajorValue = getCalculatedMajorGrade(data); // 전공과목 계산 함수 
  
  let majorGrade = calculatedMajorValue.sumMajorGrade;
  let majorCredit = calculatedMajorValue.sumMajorCredit;
  
  let allGrade = calculatedValue.sumGrade; 
  let allCredit = calculatedValue.sumCredit;
  
  let totalAvg = (allGrade / allCredit).toFixed(2);
  let totalAvgMajor = (majorGrade / majorCredit).toFixed(2);
  let transAvg = (totalAvg * 8 / 9).toFixed(2);
  
  let printAllGrade = "총평점: " + totalAvg + ", " + "이수학점: " + allCredit + ", ";
  let printAllMajor = "전공평점: " + totalAvgMajor + ", " + "전공이수학점: " + majorCredit +"\n";
  let printTransAVG = "4.0 학점으로 변환되는 경우 총평점은 " + transAvg + "입니다."; 
  let printFinAVG = printAllGrade + printAllMajor + printTransAVG; 
  
  return printFinAVG;
}

// 과목 추가 함수
function addLecture(addData) {
  if(typeof addData === "object"){
    return data.push(addData);
  }
}


addLecture({'name': '알고리즘', 'grade': 'B', 'credit': 3, 'major': true});

var allGrade = getAllGrade(data);
console.log(allGrade);

// 해당시간 뒤 출력
// setTimeout(function () {
//   console.log(getAllGrade(data));
// }, 2000);
