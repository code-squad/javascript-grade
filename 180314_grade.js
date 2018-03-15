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

function convertGrade(grade){
  switch(grade){
    case "A+": return 4.5;
    case "A": return 4.3;
    case "A-": return 4.0;
    case "B+": return 3.5;
    case "B": return 3.3;
    case "B-": return 3.0;
    case "C+": return 2.5;
    case "C": return 2.3;
    case "C-": return 2.0;
    case "D+": return 1.5;
    case "D": return 1.3;
    case "D-": return 1.0;
    case "F": return 0;
  }
}

function sumCredits(arr){
  let result = 0;
  arr.forEach(function(element){
    result += element.credit;
  });
  return result;
}

function getGPA(arr){
  let result = 0;
  let gradeCredit = 0;
  arr.forEach(function(element){
    gradeCredit += convertGrade(element.grade) * element.credit;
  });
  result = gradeCredit / sumCredits(arr);
  return result.toFixed(2);
}

function selectMajor(arr){
  let result = arr.filter(function(element){
    return element.major === true;
  });
  return result;
}

function showGrade(arr) {
  let gpa = getGPA(arr);  
  let credits = sumCredits(arr);
  let majorGpa = getGPA(selectMajor(arr));
  let majorCredits = sumCredits(selectMajor(arr));
  return `총평점: ${gpa}, 전공평점: ${majorGpa},  이수학점: ${credits}, 전공이수학점: ${majorCredits}`
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

console.log(showGrade(data));
