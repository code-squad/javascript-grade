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
//영어학점을 숫자로 변환
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

//학점평균을 소수 두번째 자리까지 구하는 함수
function calcGradeAverage(totalGrade, totalCredit) {
    return (totalGrade / totalCredit).toFixed(2)
}

//학점평균을 만점이4.0일때의 학점평균(소수 두번째 자리까지)을 구하는함수
function calcIfPerfectScore4(GradeAverage) {
    return (GradeAverage * 8 / 9).toFixed(2)
}
//출력해주는 함수
function printGrade(gradeAverage, majorGradeAverage, credit, majorCredit) {
    console.log('4.5기준 총평점 : ' + gradeAverage + '(4.0기준은 ' + calcIfPerfectScore4(gradeAverage) + ')');
    console.log('4.5기준 전공평점 : ' + majorGradeAverage + '(4.0기준은 ' + calcIfPerfectScore4(majorGradeAverage) + ')');
    console.log('이수학점 : ' + credit);
    console.log('전공이수학점 : ' + majorCredit);
}
//Data를 반영해 학점평균을 구하기위한 값들과 학점을 구하는 함수
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
    const gradeAverage = calcGradeAverage(totalGrade, totalCredit)
    const majorGradeAverage = calcGradeAverage(totalMajorGrade, totalMajorCredit)
    printGrade(gradeAverage, majorGradeAverage, totalCredit, totalMajorCredit);
}

showGrade(data);