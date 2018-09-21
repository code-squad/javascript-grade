// lecture2 - STEP1. 학점계산기


// grade를 숫자값으로 변환
// credit과 grade끼리 곱한값을 sum에 더해서 저장
// credit을 creditSum에 더해서 저장
// sum에 creditSum을 나눈 값을 학점에 저장
// 학점을 출력


// 학점을 계산하는 함수
let showGrade = function(data) {
  var sum = 0;
  var creditSum = 0;
  var mSum = 0;
  var mCreditSum = 0;

  
  
  for(let keys in data) {
    let value = data[keys].grade;
    // console.log('grade = ', value);

    let major = data[keys].major;
    let grade = engChange(value);
    let credit = data[keys].credit;
    // console.log('credit = ', credit);

    creditSum += credit;
    sum += grade * credit;


    if(major){
      mCreditSum += credit;
      mSum += grade * credit;
    }
    
  }


  // console.log('sum = ', sum);
  // console.log('creditSum = ', creditSum);
  console.log('(4.5기준)  총평점 : ' + (sum / creditSum).toFixed(2) + '  전공 평점 = ' + (mSum / mCreditSum).toFixed(2));
  console.log('(4.0기준)  총평점 : ' + (sum * (4/4.5) / creditSum).toFixed(2) + '  전공 평점 = ' + (mSum * (4/4.5) / mCreditSum).toFixed(2));
  console.log('         이수학점 : ' + creditSum + '  전공이수학점 = ' + mCreditSum); 
}


// greade를 숫자값으로 변환하기
let engChange = function(eng) {
  switch(eng) {
    case 'A+':
      eng = 4.5;
      break;
    case 'A':
      eng = 4;
      break;
    case 'B+':
      eng = 3.5;
      break;
    case 'B':
      eng = 3;
      break;
    case 'C+':
      eng = 2.5;
      break;
    case 'C':
      eng = 2;
      break;
    case 'D+':
      eng = 1.5;
      break;
    case 'D':
      eng = 1;
      break;
    case 'F':
      eng = 0;
      break;
  }
  return eng;
}



// 데이터
let data =  [
  {
      'name' : '데이터베이스', 
      'grade' : 'A', 
      'credit' : 3,
      'major' : false
  },
  {
      'name' : '교양영어', 
      'grade' : 'B+', 
      'credit' : 2,
      'major' : true
  },
  {
      'name' : '철학', 
      'grade' : 'B+', 
      'credit' : 1,
      'major' : false
  }
];

showGrade(data);