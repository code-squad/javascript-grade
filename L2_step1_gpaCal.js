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
        for (const key in data[i]) {
            if (key === 'grade') {
                grossPoints += (data[i].credit * fourPointFiveTable[data[i][key]]);
                if (data[i].major) {
                grossMajorPoints += data[i].credit * fourPointFiveTable[data[i][key]];
                }
            }

        }
    }
    return [grossPoints, grossMajorPoints];
}

function gpaCalculator(data){
let result = '';
const credits = calculateCredits(data);
const grossCredits = credits[0];
const grossMajorCredits = credits[1];

const points = calculatePoints(data);
const grossPoints = points[0];
const grossMajorPoints = points[1];

const gpaFourPointThree = (grossPoints / grossCredits).toFixed(2);
const mgpaFourPointThree = (grossMajorPoints / grossMajorCredits).toFixed(2);
const gpaFourPointFive = ((grossPoints / grossCredits)*(4.5/4.3)).toFixed(2);
const mgpaFourPointFive = ((grossMajorPoints / grossMajorCredits)*(4.5/4.3)).toFixed(2);

result = '4.5 기준: 총 평점 = ' + gpaFourPointFive + ' 전공 평점 = ' + mgpaFourPointFive + '\n' +
'4.3 기준: 총 평점 = ' + gpaFourPointThree + ' 전공 평점 = ' + mgpaFourPointThree + '\n' +
'이수 학점: ' + grossCredits+ '\n' +
'전공 이수 학점: ' + grossMajorCredits;

return result;
}

const result = gpaCalculator(data);
console.log(result);