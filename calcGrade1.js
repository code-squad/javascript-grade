var data = [
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
//영어학점을 숫자로 변환해주는게 필요 어떻게변환?
const gradeScore = {
    'A+':4.5,
    'A':4,
    'B+':3.5,
    'B':3,
    'C+':2.5,
    'C':2,
    'D+':1.5,
    'D':1,
    'F':0
}

//필요한값은 총학점평균(총학점, 총학점점수), 전공학점평균(전공학점, 전공학점점수), 
//총이수학점(학점), 전공이수학점(전공학점)
//필요한 인자는 두가지 학점과 학점점수
//전공일때 아닐때 함수에 넣는값을 다르게해서 함수값을 배열에 push
//학점평균을 구하는 법 => 함수이용
function calcCreditAverage(totolGrade, totalCredit) {
    //전체학점평균을 구하는 공식
}
//전공학점 평균을 구하는 법 => for in에서 if문을 이용해서 major가 true일때 위의함수에 넣음
//총이수학점을 구하는 법  => 함수이용
function allCredit(credit) {
    //쓸데없는 함수가 될 가능성이 높지만 우선 뼈대는 만들어놓자
}
//전공이수학점을 구하는 함수 => for in에서 if문을 이용해서 major가 true일때 위의함수에 넣음

//변수를 네가지 선언하고
function showGrade(gradeData) {
    let totalGrade = 0
    let totalMajorGrade = 0
    let totalCredit = 0
    let totalMajorCredit = 0
    
    gradeData.forEach(value1 => {
        for(value2 in value1) {
            if(value2 === 'grade') {
                totalGrade = totalGrade + (gradeScore[value1['grade']] * value1['credit'])
            } else if (value2 === 'major' && value1['major']) {
                totalMajorCredit = totalMajorCredit + value1['credit']
                totalMajorGrade = totalMajorGrade + (gradeScore[value1['grade']] * value1['credit'])
            } else if (value2 === 'credit') {
                totalCredit = totalCredit + value1['credit']
            }
        }
    })
    console.log(totalMajorGrade)
    console.log(totalGrade)
    console.log(totalCredit)
    console.log(totalMajorCredit)
}
//소수점 두자리수까지 변환해야하니까 toFixed()메서드 사용
showGrade(data);