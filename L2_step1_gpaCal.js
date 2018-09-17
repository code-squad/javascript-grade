// data
var data = [{
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

// get # of major subjects 
function isMajor(obj) {
    let major = 0;
    for (let key in obj) {
        if (obj[key].major) {
            major += 1;
        }
    }
    return major;
}

// calculate all credits
function calCredits(obj) {
    let credits = 0;
    for (let key in obj) {
        credits += obj[key].credit;
    }
    return credits;
}

// calculate only major credits
function calMajorCredits(obj) {
    let majorCredits = 0;
    for (let key in obj) {
        if (obj[key].major) {
            majorCredits += obj[key].credit;
        }
    }
    return majorCredits;
}

// calculate points (4.5)
function calPoints(obj) {
    let points = 0;
    for (let key in obj) {
        points += convertGrade(obj[key].grade);
    }
    return points;
}

// calculate only major points (4.5)
function calMajorPoints(obj) {
    let majorPoints = 0;
    for (let key in obj) {
        if (obj[key].major) {
            majorPoints += convertGrade(obj[key].grade);
        }
    }
    return majorPoints;
}

// calculate gross points (4.3)
function calPoints2(obj) {
    let points = 0;
    for (let key in obj) {
        points += convertGrade2(obj[key].grade);
    }
    return points;
}

// calculate only major points (4.3)
function calMajorPoints2(obj) {
    let majorPoints = 0;
    for (let key in obj) {
        if (obj[key].major) {
            majorPoints += convertGrade2(obj[key].grade);
        }
    }
    return majorPoints;
}

// convert letter grades to points (4.5)
function convertGrade(grade) {
    let result = 4.5;
    if (grade === 'A') {
        result -= 0.5;
    } else if (grade === 'B+') {
        result -= 1;
    } else if (grade === 'B') {
        result -= 1.5;
    } else if (grade === 'C+') {
        result -= 2;
    } else if (grade === 'C') {
        result -= 2.5;
    } else if (grade === 'D+') {
        result -= 3;
    } else if (grade === 'D') {
        result -= 3.5;
    } else if (grade === 'F') {
        result -= 4.5;
    }
    return result;
}

// convert letter grades to points (4.3)
function convertGrade2(grade) {
    let result = 4.3;
    if (grade === 'A') {
        result -= 0.3;
    } else if (grade === 'A-') {
        result -= 0.6;
    } else if (grade === 'B+') {
        result -= 1;
    } else if (grade === 'B') {
        result -= 1.3;
    } else if (grade === 'C+') {
        result -= 2;
    } else if (grade === 'C') {
        result -= 2.3;
    } else if (grade === 'C-') {
        result -= 2.6;
    } else if (grade === 'D+') {
        result -= 3;
    } else if (grade === 'D') {
        result -= 3.3;
    } else if (grade === 'D-') {
        result -= 3.6;
    } else if (grade === 'F') {
        result -= 4.3;
    }
    return result;
}

// main
function showGrade(data) {
    let result = 0;
    let sub = data.length;
    let majSub = isMajor(data);

    // 4.5
    let gp1 = calPoints(data);
    let mgp1 = calMajorPoints(data);
    let gpa1 = (gp1 / sub).toFixed(1);
    let mgpa1 = (mgp1 / majSub).toFixed(1);

    // 4.3
    let gp2 = calPoints2(data);
    let mgp2 = calMajorPoints2(data);
    let gpa2 = (gp2 / sub).toFixed(1);
    let mgpa2 = (mgp2 / majSub).toFixed(1);

    result = '4.5 기준: 총 평점 = ' + gpa1 + ' 전공 평점 = ' + mgpa1 + '\n' +
        '4.3 기준: 총 평점 = ' + gpa2 + ' 전공 평점 = ' + mgpa2 + '\n' +
        '이수 학점: ' + calCredits(data) + '\n' +
        '전공 이수 학점: ' + calMajorCredits(data);
    return result;
}

// result
let result = showGrade(data);
console.log(result);