let data = [{
        'name': '데이터베이스',
        'grade': 'A',
        'credit': 3,
        'major': false
    },
    {
        'name': '교양영어',
        'grade': 'B',
        'credit': 3,
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
        'credit': 1,
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

const addLecture = (newLecture) => {
    const newData = data;
    newData.push(newLecture);
    const result = gpaCalculator(newData, 4.5);
    console.log(result);
}

const removeLecture = (dataArr, lecture, time) => {
    setTimeout(function () {
        const newData = dataArr.filter(function (value) {
            return value.name !== lecture;
        })

        data = newData;
        const result = gpaCalculator(newData, 4.5);
        console.log(result);
    }, time);
}

const calculateCredits = (dataArr) => {
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

const calculatePoints = (dataArr) => {
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

const getResult = (dataArr, scale) => {
    const [grossCredits, majorCredits] = calculateCredits(dataArr);
    const [grossPoints, majorPoints] = calculatePoints(dataArr);
    const gpa = ((grossPoints / grossCredits) * (scale / 4.5)).toFixed(2);
    const mgpa = ((majorPoints / majorCredits) * (scale / 4.5)).toFixed(2);

    const template =
        `
    ${scale} 기준: 총 평점 = ${gpa}, 전공 평점 = ${mgpa}
    이수 학점: ${grossCredits}
    전공 이수 학점: ${majorCredits}`

    return template;
}

const sortGrade = (dataArr) => {
    dataArr.sort(function (a, b) {
        return fourPointFiveTable[b.grade] - fourPointFiveTable[a.grade];
    });

    dataArr.sort(function (a, b) {
        if (a.grade === b.grade) {
            return b.credit - a.credit;
        }
    });

    return dataArr;
}

const printResult = (dataArr) => {
    let data = sortGrade(dataArr);
    let output = "";
    output += `-----------------------------------------\n`
    for (i = 0; i < data.length; i++) {
        output += `${data[i]['name']}, ${data[i]['grade']}, ${data[i]['credit']}학점\n`
    }
    output += `-----------------------------------------`;
    return output;
}