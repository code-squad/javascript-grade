let data = [
    {
        'name': '데이터베이스',
        'grade': 'B',
        'credit': 3,
        'major': false
    },
    {
        'name': '교양영어',
        'grade': 'A+',
        'credit': 2,
        'major': true
    },
    {
        'name': '철학',
        'grade': 'C+',
        'credit': 1,
        'major': false
    },
    {
        'name': '프론트엔드마스터',
        'grade': 'A+',
        'credit': 3,
        'major': true
    },
    {
        'name': '백엔드마스터',
        'grade': 'A+',
        'credit': 2,
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

//성적순서를 충족시키기위한 배열
const gradeArrays = ['A+','A','B+','B','C+','C','D+','D','F']

//강의를 추가하는 함수
function addLecture(className, classGrade, classCredit, classMajor) {
    var newLecture = {
        'name': className,
        'grade': classGrade,
        'credit': classCredit,
        'major': classMajor
    }
    data.push(newLecture)
    showGrade(data)
}

//강의를 제거하는 함수
function removeLecture(className, PrintTime) {
    let newData = data.filter(object => object.name !== className)
    data = newData
    setTimeout(() => {
        showGrade(data)
    }, PrintTime)
}

//학점순으로 정렬해주는 함수
function sortCreditDataOrder(gradeData) {
    var creditSortedData = gradeData.sort((beforeValue, value) => {
        if (beforeValue.credit > value.credit) return -1
        if (beforeValue.credit < value.credit) return 1
    })
    return creditSortedData
}

//성적순으로 정렬해주는 함수
function sortGradeDataOrder(gradeData, oneGradeData, gradeValue) {
    gradeData.forEach(object => {
        if(gradeValue === object.grade) {
            oneGradeData.push(object)
        }
    })
    if(oneGradeData[0] === undefined) {
        return;
    }
    let sortedScoreArray = sortCreditDataOrder(oneGradeData)
    sortedScoreArray.forEach(sortedObject => {
        console.log(sortedObject.name, sortedObject.grade, sortedObject.credit)
    })
    console.log('')
}

//정렬된걸 출력해주는 함수
function sortGrade(gradeData) {
    console.log('--------------------')
    console.log('')
    gradeArrays.forEach(value => {
        let oneGradeData = []
        sortGradeDataOrder(gradeData, oneGradeData, value)
    })
    console.log('--------------------')
}

sortGrade(data)
//점수를모아 새로운 배열을 만드는 함수
function getClassGrade(classData) {
    const classGrade = classData.map(classObject => {
        return classObject.grade
    })
    return classGrade
}

//학점을 모아 새로운 배열을 만드는 함수
function getClassCredit(classData) {
    const classCredit = classData.map(classObject => {
        return classObject.credit
    })
    return classCredit
}

//전공점수를 모아 새로운 배열을 만드는 함수
function getMajorClassGrade(classData) {
    const majorClassGrade = []
    classData.forEach(classObject => {
        if (classObject.major) {
            majorClassGrade.push(classObject.grade)
        }
    })
    return majorClassGrade
}

//전공학점을 모아 새로운 배열을 만드는 함수
function getMajorClassCredit(classData) {
    const majorClassCredit = []
    classData.forEach(classObject => {
        if (classObject.major) {
            majorClassCredit.push(classObject.credit)
        }
    })
    return majorClassCredit
}

//학점평균을 내는 함수
function getGradeAverage(classGrade, classCredit) {
    if(classGrade[0] === 0) {
        return 0;
    }
    const gradeScore = classGrade.map(gradeValue => {
        return gradeScoreObject[gradeValue]
    })
    const multedGradeScore = classCredit.map((creditValue, index) => {
        return gradeScore[index] * classCredit[index]
    })
    const summedGradeScore = multedGradeScore.reduce((beforeValue, currentValue) => {
        return beforeValue + currentValue
    })
    const summedClassCredit = classCredit.reduce((beforeValue, currentValue) => {
        return beforeValue + currentValue
    })
    return summedGradeScore / summedClassCredit
}
//4.5만점기준 점수를 4.0기준 만점점수 기준으로 바꾸어주는 함수
function convertGradeScore(score) {
    return (score / 4.5 * 4.0).toFixed(2)
}

//결과를 출력해주는 함수
function printResult(gradeAverage, majorGradeAverage, sumOfCredit, sumOfMajorCredit) {
    console.log('총평점 : ' + gradeAverage + '(4.0 기준 : ' + convertGradeScore(gradeAverage) + ')');
    console.log('전공평점 : ' + majorGradeAverage + '(4.0기준 : ' + convertGradeScore(majorGradeAverage) + ')');
    console.log('이수학점 : ' + sumOfCredit)
    console.log('전공이수학점 : ' + sumOfMajorCredit)
}

//총평점과 전공평점, 이수학점, 전공이수학점을 계산해주는 함수
function showGrade(gradeData) {
    const classGrade = getClassGrade(gradeData)
    const classCredit = getClassCredit(gradeData)
    const majorClassGrade = getMajorClassGrade(gradeData)
    const majorClassCredit = getMajorClassCredit(gradeData)
    if (majorClassGrade[0] === undefined) {
        majorClassGrade[0] = 0
        majorClassCredit[0] = 0
    }
    const gradeAverage = getGradeAverage(classGrade, classCredit).toFixed(2)
    const majorGradeAverage = getGradeAverage(majorClassGrade, majorClassCredit).toFixed(2)
    const sumOfCredit = classCredit.reduce((beforeValue, currentValue) => {
        return beforeValue + currentValue;
    })
    const sumOfMajorCredit = majorClassCredit.reduce((beforeValue, currentValue) => {
        return beforeValue + currentValue;
    })
    printResult(gradeAverage, majorGradeAverage, sumOfCredit, sumOfMajorCredit)
}



