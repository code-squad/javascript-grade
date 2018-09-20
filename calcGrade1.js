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

const gradeArrays = ['A+','A','B+','B','C+','C','D+','D','F']
//1. 강의를 추가하는 함수

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

//2. 강의를 제거하는 함수
function removeLecture(className, PrintTime) {
    let newData = data.filter(object => object.name !== className)
    data = newData
    setTimeout(() => {
        showGrade(data)
    }, PrintTime)
}

//3. 강의를 정렬해주는 함수
//3-1. data 를 입력받아 학점을 정렬해주는 함수
// sort이용해서 정렬
function sortCreditDataOrder(gradeData) {
    var creditSortedData = gradeData.sort((beforeValue, value) => {
        if (beforeValue.credit > value.credit) return -1
        if (beforeValue.credit < value.credit) return 1
    })
    return creditSortedData
}

//문제가생김. => 성적으로 이루어진 배열을 credit으로 다시 정렬해야함
//우선 배열을 만들고. sort는 credit에서만 실행하고
//각각성적에따라 push. ->너무하드코딩 좋은방법이없을까
function sortGrade(gradeData) {
    console.log('--------------------')
    gradeArrays.forEach(value => {
        let oneGradeData = []
        gradeData.forEach(object => {
            if(value === object.grade) {
                oneGradeData.push(object)
            }
        })
        if(oneGradeData[0] === undefined) {
            return;
        }
        let sortedscoreArray = sortCreditDataOrder(oneGradeData)
        sortedscoreArray.forEach(sortedObject => {
            console.log(sortedObject.name, sortedObject.grade, sortedObject.credit)
        })
        console.log('')
    })
    console.log('--------------------')
}

sortGrade(data)

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
            majorClassCredit.push(classObject.credit)
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
    const summedGradeScore = multedGradeScore.reduce((beforeValue, currentValue) => {
        return beforeValue + currentValue
    })
    const summedClassCredit = classCredit.reduce((beforeValue, currentValue) => {
        return beforeValue + currentValue
    })
    return summedGradeScore / summedClassCredit
}

function convertGradeScore(score) {
    return (score / 4.5 * 4.0).toFixed(2)
}

function printResult(gradeAverage, majorGradeAverage, sumOfCredit, sumOfMajorCredit) {
    console.log('총평점 : ' + gradeAverage + '(4.0 기준 : ' + convertGradeScore(gradeAverage) + ')');
    console.log('전공평점 : ' + majorGradeAverage + '(4.0기준 : ' + convertGradeScore(gradeAverage) + ')');
    console.log('이수학점 : ' + sumOfCredit)
    console.log('전공이수학점 : ' + sumOfMajorCredit)
}

function showGrade(gradeData) {
    const classGrade = getClassGrade(gradeData)
    const classCredit = getClassCredit(gradeData)
    const majorClassGrade = getMajorClassGrade(gradeData)
    const majorClassCredit = getMajorClassCredit(gradeData)
    if (majorClassGrade[0] === undefined) {
        console.log('전공수업을 듣지않았으니 다시 듣고오세요')
        return;
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


