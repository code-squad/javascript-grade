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
        'major': true
    }
];
//영어학점을 숫자로 변환
const gradeScoreObject = {
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

function getClassGrade(classData) {
    const classGrade = classData.map(classObject => {
        return classObject.grade
    })
    return classGrade
}

function getClassCredit(classData) {
    const classCredit = classData.map(classObject => {
        return classObject.credit
    })
    return classCredit
}

function getMajorClassGrade(classData) {
    const majorClassGrade = []
    classData.forEach(classObject => {
        if(classObject.major) {
            majorClassGrade.push(classObject.grade)
        }
    })
    return majorClassGrade 
}

function getMajorClassCredit(classData) {
    const majorClassCredit = []
    classData.forEach(classObject => {
        if(classObject.major) {
            majorClassCredit.push(classObject.grade)
        }
    })
    return majorClassCredit
}
var a = getMajorClassCredit(data)
console.log(a)

function showGrade(gradeData) {
    let totalGrade = 0
    let totalMajorGrade = 0
    let totalCredit = 0
    let totalMajorCredit = 0
    
    gradeData.forEach(classObject => {
        for(classValue in classObject) {
            const classCredit = classObject['credit']
            const classGrade = gradeScoreObject[classObject['grade']] * classObject['credit']
            if(classValue === 'grade') {
                totalGrade = totalGrade + classGrade
            } else if (classValue === 'credit') {
                totalCredit = totalCredit + classCredit
            } else if (classValue === 'major' && classObject['major']) {
                totalMajorCredit = totalMajorCredit + classCredit
                totalMajorGrade = totalMajorGrade + classGrade
            }
        }
    });

    const gradeAverage = calcGradeAverage(totalGrade, totalCredit, 4.5)
    const majorGradeAverage = calcGradeAverage(totalMajorGrade, totalMajorCredit, 4.5)
    const convertedGradeAverage = calcGradeAverage(totalGrade, totalCredit, 4.0)
    const convertedMajorGradeAverage = calcGradeAverage(totalMajorGrade, totalMajorCredit, 4.0)
    console.log('4.5기준 총평점 : ' + gradeAverage + '(4.0기준은 ' + convertedGradeAverage + ')');
    console.log('4.5기준 전공평점 : ' + majorGradeAverage + '(4.0기준은 ' + convertedMajorGradeAverage + ')');
    console.log('이수학점 : ' + totalCredit);
    console.log('전공이수학점 : ' + totalMajorCredit);
}
