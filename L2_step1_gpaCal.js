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

const fourPointFiveTable = {
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
    const elements = [calculateCredits(data)[0], calculateCredits(data)[1], calculatePoints(data)[0], calculatePoints(data)[1], parseFloat((calculatePoints(data)[0] / calculateCredits(data)[0]).toFixed(2)), parseFloat((calculatePoints(data)[1] / calculateCredits(data)[1]).toFixed(2))];
    [values.grossCredits, values.grossMajorCredits, values.grossPoints, values.grossMajorPoints, values.gpa, values.mgpa] = elements;
    return values;
}

function gpaCalculator(scale) {
    let result = "";
    const values = getValues(data);
    result = '4.5 기준: 총 평점 = ' + values.gpa + ' 전공 평점 = ' + values.mgpa + '\n' +
        scale.toFixed(1) + ' 기준: 총 평점 = ' + ((values.gpa) * (scale / 4.5)).toFixed(2) + ' 전공 평점 = ' + ((values.mgpa) * (scale / 4.5)).toFixed(2) + '\n' +
        '이수 학점: ' + values.grossCredits + '\n' +
        '전공 이수 학점: ' + values.grossMajorCredits;
    return result;
}