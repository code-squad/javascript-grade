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
    }
];
//영어학점을 숫자로 변환
const scoreObject = {
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
    const newLecture = {
        'name': className,
        'grade': classGrade,
        'credit': classCredit,
        'major': classMajor
    }
    data.push(newLecture)
    showGrade(data)
}

//강의를 제거하는 함수
function removeLecture(className, printTime) {
    let deletedData = data.filter(object => object.name !== className)
    data = deletedData
    setTimeout(() => showGrade(data), printTime)
}

//학점순으로 정렬해주는 함수
function sortCreditOrder(gradeData) {
    const sortedCreditData = gradeData.sort((beforeVal, val) => {
        if (beforeVal.credit > val.credit) return -1
        if (beforeVal.credit < val.credit) return 1
    })
    return sortedCreditData
}

//성적순으로 정렬해주는 함수
function sortGradeOrder(classData, gradeValue) {
    const oneGradeData = classData.filter(object => gradeValue === object.grade)
    if(oneGradeData.length === 0) {
        return;
    }
    let sortedArray = sortCreditOrder(oneGradeData)
    sortedArray.forEach(sortedObject => {
        console.log(sortedObject.name, sortedObject.grade, sortedObject.credit)
    })
    console.log('')
}

//정렬된걸 출력해주는 함수
function sortGrade(classData) {
    console.log('--------------------')
    console.log('')
    gradeArrays.forEach(value => {
        sortGradeOrder(classData, value)
    })
    console.log('--------------------')
}

sortGrade(data)
//점수를모아 새로운 배열을 만드는 함수
function getGradeArrays(classData) {
    const classGrade = classData.map(classObject => classObject.grade)
    return classGrade
}

//학점을 모아 새로운 배열을 만드는 함수
function getCreditArrays(classData) {
    const classCredit = classData.map(classObject => classObject.credit)
    return classCredit
}

//전공점수를 모아 새로운 배열을 만드는 함수
function getMajorGradeArrays(classData) {
    const majorGradeArrays = []
    classData.forEach(classObject => {
        if (classObject.major) {
            majorGradeArrays.push(classObject.grade)
        }
    })
    return majorGradeArrays
}

//전공학점을 모아 새로운 배열을 만드는 함수
function getMajorCreditArrays(classData) {
    const majorCreditArrays = []
    classData.forEach(classObject => {
        if (classObject.major) {
            majorCreditArrays.push(classObject.credit)
        }
    })
    return majorCreditArrays
}

//학점평균을 내는 함수
function getGradeAverage(gradeArrays, creditArrays) {
    if(gradeArrays[0] === 0) {
        return 0;
    }
    const scoreArrays = gradeArrays.map(gradeValue => scoreObject[gradeValue])
    const multedScoreArrays = creditArrays.map((creditValue, index) => {
        return scoreArrays[index] * creditArrays[index]
    })
    const summedScore = multedScoreArrays.reduce((accumulatedVal, currentVal) => {
        return accumulatedVal + currentVal
    })
    const summedCredit = creditArrays.reduce((accumulatedVal, currentVal) => {
        return accumulatedVal + currentVal
    })
    return summedScore / summedCredit
}
//4.5만점기준 점수를 4.0기준 만점점수 기준으로 바꾸어주는 함수
function convertGradeScore(score) {
    return (score / 4.5 * 4.0).toFixed(2)
}

//결과를 출력해주는 함수
function printResult(gradeAverage, majorGradeAverage, creditLoad, majorCreditLoad) {
    console.log('총평점 : ' + gradeAverage + '(4.0 기준 : ' + convertGradeScore(gradeAverage) + ')');
    console.log('전공평점 : ' + majorGradeAverage + '(4.0기준 : ' + convertGradeScore(majorGradeAverage) + ')');
    console.log('이수학점 : ' + creditLoad)
    console.log('전공이수학점 : ' + majorCreditLoad)
}

//총평점과 전공평점, 이수학점, 전공이수학점을 계산해주는 함수
function showGrade(gradeData) {
    const gradeArrays = getGradeArrays(gradeData)
    const creditArrays = getCreditArrays(gradeData)
    const majorgradeArrays = getMajorGradeArrays(gradeData)
    const majorCreditArrays = getMajorCreditArrays(gradeData)
    if (majorgradeArrays[0] === undefined) {
        majorgradeArrays[0] = 0
        majorCreditArrays[0] = 0
    }
    const gradeAverage = getGradeAverage(gradeArrays, creditArrays).toFixed(2)
    const majorGradeAverage = getGradeAverage(majorgradeArrays, majorCreditArrays).toFixed(2)
    const sumOfCredit = creditArrays.reduce((beforeValue, currentValue) => {
        return beforeValue + currentValue;
    })
    const sumOfMajorCredit = majorCreditArrays.reduce((beforeValue, currentValue) => {
        return beforeValue + currentValue;
    })
    printResult(gradeAverage, majorGradeAverage, sumOfCredit, sumOfMajorCredit)
}
