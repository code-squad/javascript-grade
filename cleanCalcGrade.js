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
        'major': false
    },
    {
        'name': '철학',
        'grade': 'C+',
        'credit': 1,
        'major': false
    },
    {
        'name': '사회복지개론',
        'grade': 'A+',
        'credit': 3,
        'major': false
    }
];

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
    const majorGradeObjs = classData.filter(classObject => classObject.major)
    return getGradeArrays(majorGradeObjs)
}

//전공학점을 모아 새로운 배열을 만드는 함수
function getMajorCreditArrays(classData) {
    const majorCreditObjs = classData.filter(classObject => classObject.major)
    return getCreditArrays(majorCreditObjs)
}

showGrade(data)
sortGrade(data)

//학점평균을 내는 함수
function getGradeAverage(gradeArrays, creditArrays) {
    const scoreObject = {'A+': 4.5, 'A': 4, 'B+': 3.5, 'B': 3, 'C+': 2.5, 'C': 2, 'D+': 1.5, 'D': 1, 'F': 0}
    if(gradeArrays.length === 0 && creditArrays.length === 0) return 0;
    const scoreArrays = gradeArrays.map(gradeValue => scoreObject[gradeValue])
    const multedScoreArrays = creditArrays.map((creditValue, index) => {
        return scoreArrays[index] * creditArrays[index]
    })
    const summedScore = multedScoreArrays.reduce((accumulatedVal, currentVal) => {
        return accumulatedVal + currentVal
    }, 0)
    const summedCredit = creditArrays.reduce((accumulatedVal, currentVal) => {
        return accumulatedVal + currentVal
    }, 0)
    return (summedScore / summedCredit).toFixed(2)
}

//4.5만점기준 점수를 4.0기준 만점점수 기준으로 바꾸어주는 함수
function convertGradeScore(score) {
    return (score / 4.5 * 4.0).toFixed(2)
}

//결과를 출력해주는 함수
function printResult(gradeAverage, majorGradeAverage, creditLoad, majorCreditLoad) {
    console.log(`총평점 : ${gradeAverage}(4.0 기준 : ${convertGradeScore(gradeAverage)})`);
    console.log(`전공평점 : ${majorGradeAverage}(4.0기준 : ${convertGradeScore(majorGradeAverage)})`);
    console.log(`이수학점 : ${creditLoad}`);
    console.log(`전공이수학점 : ${majorCreditLoad}`);
}

//총평점과 전공평점, 이수학점, 전공이수학점을 계산해주는 함수
function showGrade(gradeData) {
    const gradeAverage = getGradeAverage(getGradeArrays(gradeData), getCreditArrays(gradeData)),
        majorGradeAverage = getGradeAverage(getMajorGradeArrays(gradeData), getMajorCreditArrays(gradeData))
    
    const creditLoad = getCreditArrays(gradeData).reduce((beforeValue, currentValue) => {
        return beforeValue + currentValue;
    }, 0)
    const majorCreditLoad = getMajorCreditArrays(gradeData).reduce((beforeValue, currentValue) => {
        return beforeValue + currentValue;
    }, 0)
    printResult(gradeAverage, majorGradeAverage, creditLoad, majorCreditLoad)
}

showGrade(data)
//강의를 추가하는 함수 
function addLecture(classObject) {
    data.push(classObject)
    showGrade(data)
}

//강의를 제거하는 함수
function removeLecture(className, printTime) {
    let deletedData = data.filter(object => object.name !== className)
    data = deletedData
    setTimeout(() => showGrade(data), printTime)
}

//정렬해주는 함수
function sortGrade(classData) {
    const gradeArrays = ['A+','A','B+','B','C+','C','D+','D','F']
    console.log(`--------------------`)
    console.log(``)
    gradeArrays.forEach(value => {
        sortGradeOrder(classData, value)
    })
    console.log(`--------------------`)
}

//성적순으로 정렬해주는 함수
function sortGradeOrder(classData, gradeValue) {
    let oneGradeData = classData.filter(object => gradeValue === object.grade)
    if(oneGradeData.length === 0) return;
    let sortedArray = sortCreditOrder(oneGradeData)
    sortedArray.forEach(sortedObject => {
        let {name, grade, credit} = sortedObject
        printSortedData(name, grade, credit)
    })
    console.log(``)
}

//학점순으로 정렬해주는 함수
function sortCreditOrder(gradeData) {
    const sortedCreditData = gradeData.sort((beforeVal, val) => {
        if (beforeVal.credit > val.credit) return -1
        if (beforeVal.credit < val.credit) return 1
    })
    return sortedCreditData
}

//정렬된 배열을 출력해주는 함수
function printSortedData(name, grade, credit) {
    console.log(`${name}, ${grade}, ${credit}학점`)
}