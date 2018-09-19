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
const gradeScoreObject = {
    'A+': 4.5,
    'A': 4,
    'B+': 3.5,
    'B': 3,
    'C+': 2.5,
    'C': 2,
    'D+': 1.5,
    'D': 1,
    'F': 0
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
        if (classObject.major) {
            majorClassGrade.push(classObject.grade)
        }
    })
    return majorClassGrade
}

function getMajorClassCredit(classData) {
    const majorClassCredit = []
    classData.forEach(classObject => {
        if (classObject.major) {
            majorClassCredit.push(classObject.grade)
        }
    })
    return majorClassCredit
}

function getGradeAverage(classGrade, classCredit) {
    const gradeScore = classGrade.map(gradeValue => {
        return gradeScoreObject[gradeValue]
    })
    const multedGradeScore = classCredit.map((creditValue, index) => {
        return gradeScore[index] * classCredit[index]
    })
    const sumOfGradeScore = multedGradeScore.reduce((beforeValue, currentValue) => {
        return beforeValue + currentValue
    })
    const sumOfClassCredit = classCredit.reduce((beforeValue, currentValue) => {
        return beforeValue + currentValue
    })
    return sumOfGradeScore / sumOfClassCredit
}

function showGrade(gradeData) {
    const classGrade = getClassGrade(gradeData)
    const classCredit = getClassCredit(gradeData)
    const majorClassGrade = getMajorClassGrade(gradeData)
    const majorClassCredit = getMajorClassCredit(gradaeData)
    const gradeAverage = getGradeAverage(classGrade, classCredit)
    const majorGradeAverage = getGradeAverage(majorClassGrade, majorClassCredit)
    const sumOfCredit = classCredit.reduce((beforeValue, currentValue) => {
        return beforeValue + currentValue;
    })
    const sumOfMajorCredit = majorClassCredit.reduce((beforeValue, currentValue) => {
        return beforeValue + currentValue;
    })
}
