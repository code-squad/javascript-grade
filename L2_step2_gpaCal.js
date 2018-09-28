let data = [{
        'name': '데이터베이스',
        'grade': 'A',
        'credit': 3,
        'major': false
    },
    {
        'name': '교양영어',
        'grade': 'B',
        'credit': 2,
        'major': true
    },
    {
        'name': '철학',
        'grade': 'B',
        'credit': 2,
        'major': false
    },
    {
        'name': '경영',
        'grade': 'A+',
        'credit': 3,
        'major': true
    },
    {
        'name': '통계',
        'grade': 'A+',
        'credit': 2,
        'major': true
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

function addLecture(newLecture) {
    const newData = data;
    newData.push(newLecture);
    const result = gpaCalculator(newData, 4.5);
    console.log(result);
}

function removeLecture(dataArr, lecture, time) {
    setTimeout(function () {
        const newData = dataArr.filter(function (value) {
            return value.name !== lecture;
        })

        data = newData;
        const result = gpaCalculator(newData, 4.5);
        console.log(result);
    }, time);
}

function calculateCredits(dataArr) {
    let grossCredits = 0;
    let grossMajorCredits = 0;
    for (const key in dataArr) {
        grossCredits += dataArr[key].credit;
        if (dataArr[key].major) {
            grossMajorCredits += dataArr[key].credit;
        }
    }
    return [grossCredits, grossMajorCredits];
}

function calculatePoints(dataArr) {
    let grossPoints = 0;
    let grossMajorPoints = 0;

    for (const i in dataArr) {
        grossPoints += (dataArr[i].credit * fourPointFiveTable[dataArr[i]['grade']]);
        if (dataArr[i].major) {
            grossMajorPoints += dataArr[i].credit * fourPointFiveTable[dataArr[i]['grade']];
        }
    }

    return [grossPoints, grossMajorPoints];
}

function gpaCalculator(dataArr, scale) {
    const [grossCredits, majorCredits] = calculateCredits(dataArr);
    const [grossPoints, majorPoints] = calculatePoints(dataArr);
    const gpa = parseFloat((grossPoints / grossCredits).toFixed(2));
    const mgpa = parseFloat((majorPoints / majorCredits).toFixed(2));

    const template =
        `
    ${scale.toFixed(1)} 기준: 총 평점 = ${((gpa) * (scale / 4.5)).toFixed(2)} 전공 평점 = ${((mgpa) * (scale / 4.5)).toFixed(2)}
    이수 학점: ${grossCredits}
    전공 이수 학점: ${majorCredits}`

    return template;
}

function sortGrade(dataArr) {
    dataArr.sort(function (a, b) {
        return fourPointFiveTable[b.grade] - fourPointFiveTable[a.grade];
    });

    dataArr.forEach((v1, i1) => {
        dataArr.forEach((v2, i2) => {
            if (dataArr[i1]['grade'] === dataArr[i2]['grade'] && dataArr[i1]['credit'] > dataArr[i2]['credit']) {
                let temp = dataArr[i1];
                dataArr[i1] = dataArr[i2];
                dataArr[i2] = temp;
            }
        })
    })

    return dataArr;
}

function print(dataArr) {
    let data = sortGrade(dataArr);
    let output = "";
    output += `-----------------------------------------\n`
    for (i = 0; i < data.length; i++) {
        output += `${data[i]['name']}, ${data[i]['grade']}, ${data[i]['credit']}학점\n`
    }
    output += `-----------------------------------------`;
    return output;
}