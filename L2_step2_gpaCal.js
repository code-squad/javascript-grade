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
    data.push(newLecture);
    const result = getResult(data, 4.5);
    console.log(result);
}

const removeLecture = (dataArr, lecture, time) => {
    setTimeout(() => {
        dataArr.filter(value => value.name !== lecture);
        const result = getResult(dataArr, 4.5);
        console.log(result);
    }, time);
}

const calculateCredits = (dataArr) => {
    let grossCredits = 0;
    let grossMajorCredits = 0;
    // 객체를 순회할때 hasownproperty라는 메서드로 체크하는게 필요한데요. (복잡한 이유지만) 한번 그 이유를 살펴보세요.
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
    for (const value of dataArr) {
        grossPoints += (value.credit * fourPointFiveTable[value.grade]);
        if (value.major) {
            grossMajorPoints += value.credit * fourPointFiveTable[value.grade];
        }
    }
    return [grossPoints, grossMajorPoints];
}

const calculateGpa = (dataArr, scale) => {
    const points = calculatePoints(dataArr);
    const credits = calculateCredits(dataArr);
    const gpa = ((points[0] / credits[0]) * (scale / 4.5)).toFixed(2);
    const mgpa = ((points[1] / credits[1]) * (scale / 4.5)).toFixed(2);
    return [gpa, mgpa];
}

const getResult = (dataArr, scale) => {
    const [grossCredits, majorCredits] = calculateCredits(dataArr);
    const [grossPoints, majorPoints] = calculatePoints(dataArr);
    const [gpa, mgpa] = calculateGpa(dataArr, 4.5);

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
    //output이라는 새로운 데이터결과를 만드는 것이자나요? 이럴때 reduce 사용이 적절합니다~
    output += `-----------------------------------------\n`
    data.forEach((lecture) => {
        output += `${lecture['name']}, ${lecture['grade']}, ${lecture['credit']}학점\n`
    });
    output += `-----------------------------------------`;
    return output;
}
