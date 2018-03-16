//설계
// 1. 학점을 모두 더해 '이수학점'을 만든다
// 2. 과목별 점수*학점을 '총점수'에 저장한다
// 3. 과목별 '총점수'를 더하여 '모두더한총점수'에 저장한다
// 4. '총평점'에 '모두더한총점수' / '이수학점'을 저장한다
// 5. '총평점'과 '이수학점'을 출력한다

//skeleton code
// function showGrade(배열){
//     let 이수학점
//     let 모두더한총점수
//     let 총평점
//     for(배열의 원소를 돈다){
//         이수학점 += 배열.학점
//     }
//     for(배열의 원소를 돈다){
//         배열.총점수 = 배열.점수 * 배열.학점
//     }
//     for(배열의 원소를 돈다){
//         모두더한총점수 += 배열.총점수
//     }
//     총평점 = 모두더한총점수/이수학점
//     return 총평점, 이수학점
// }

let Grade = {
  "A+": 4.5,
  "A": 4.3,
  "A-": 4.0,
  "B+": 3.5,
  "B": 3.3,
  "B-": 3.0,
  "C+": 2.5,
  "C": 2.3,
  "C-": 2.0,
  "D+": 1.5,
  "D": 1.3,
  "D-": 1.0,
  "F": 0
}

function sumCredits(arr){
  let result = 0;
  arr.forEach(function(element){
    result += element.credit;
  });
  return result;
}

function getGPA(arr, scale = 4.5){
  let result = 0;
  let gradeCredit = 0;
  let ratio = scale / 4.5;
  arr.forEach(function(element){
    gradeCredit += Grade[element.grade] * element.credit;
  });
  result = gradeCredit / sumCredits(arr);
  return (result * ratio).toFixed(2);
}

function selectMajor(arr){
  let result = arr.filter(function(element){
    return element.major === true;
  });
  return result;
}

let makeReport = (function(){
  let gradeReport = [];
  return function(mode, obj){
    if(mode === 'add') gradeReport = gradeReport.concat(obj);
    if(mode == 'print'){
      let gpa = getGPA(gradeReport);
      let majorGPA = getGPA(selectMajor(gradeReport));
      let credits = sumCredits(gradeReport);
      let majorCredits = sumCredits(selectMajor(gradeReport));
      let changedGPA = getGPA(gradeReport, 4.0);
      printGrade(gpa, majorGPA, credits, majorCredits, changedGPA);
    }
  }
})('add', []);

function printGrade(gpa, majorGPA, credits, majorCredits, changedGPA){
  setTimeout(function(){
    console.log(`총평점: ${gpa}, 전공평점: ${majorGPA},  이수학점: ${credits}, 전공이수학점: ${majorCredits}
4.0으로 반환하는 경우 총 평점은 ${changedGPA}입니다`);
  }, 2000);
}

function addLecture(obj){
  makeReport('add', obj);
}

function showGrade(){
  makeReport('print');
}

var data = [
  {
    name: "데이터베이스",
    grade: "A",
    credit: 3,
    major : true
  },
  {
    name: "교양영어",
    grade: "B+",
    credit: 2,
    major : false
  },
  {
    name: "철학",
    grade: "B+",
    credit: 1,
    major : false
  }
];

addLecture(data);
addLecture({'name' : '알고리즘', 'grade' : 'B', 'credit' : 3, 'major' : true});
showGrade();