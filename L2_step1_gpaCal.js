const data = [{
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
    },
];

function calculateCredits(data) {
    let grossCredits = 0;
    let grossMajorCredits = 0;
    for (const key in data) {
        grossCredits += data[key].credit;
        if (data[key].major) {
            grossMajorCredits += data[key].credit;
        }
    }
    return [grossCredits, grossMajorCredits];
}

function calculatePoints(data) {
    let grossPoints = 0;
    let grossMajorPoints = 0;
    fourPointFiveTable = {
        'A+': 4.5,
        'A': 4.0,
        'B+': 3.5,
        'B': 3.0,
        'C+': 2.5,
        'C': 2.0,
        'D+': 1.5,
        'D': 1.0,
        'F': 0,
    }

    for (const i in data) {
        grossPoints += (data[i].credit * fourPointFiveTable[data[i]['grade']]);
        if (data[i].major) {
            grossMajorPoints += data[i].credit * fourPointFiveTable[data[i]['grade']];
        }
    }

    return [grossPoints, grossMajorPoints];
}


function getValues(data) {
    const values = {};
    values.grossCredits = calculateCredits(data)[0];
    values.grossMajorCredits = calculateCredits(data)[1];
    values.grossPoints = calculatePoints(data)[0];
    values.grossMajorPoints = calculatePoints(data)[1];
    values.gpa = (values.grossPoints / values.grossCredits).toFixed(2);
    values.mgpa = (values.grossMajorPoints / values.grossMajorCredits).toFixed(2);
  
  /*  result = '4.5 기준: 총 평점 = ' + gpaFourPointFive + ' 전공 평점 = ' + mgpaFourPointFive + '\n' +
        '4.3 기준: 총 평점 = ' + gpaFourPointThree + ' 전공 평점 = ' + mgpaFourPointThree + '\n' +
        '이수 학점: ' + grossCredits + '\n' +
        '전공 이수 학점: ' + grossMajorCredits;
*/
    return values;
}

// const result = gpaCalculator(data);
// console.log(result);

console.log(getValues(data));