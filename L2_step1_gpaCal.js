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

// calculate credits
function calculateCredits(data) {
    let grossCredits = 0;
    let grossMajorCredits = 0;
    for (let key in data) {
        grossCredits += data[key].credit;
        if (data[key].major) {
            grossMajorCredits += data[key].credit;
        }
    }
    return [grossCredits, grossMajorCredits];
}

// calculate points with 4.0 scale
function calculatePoints(data) {
    let grossPoints = 0;
    let grossMajorPoints = 0;
    tableFourPointZero = {
        'A+': 4.3,
        'A': 4.0,
        'A-': 3.7,
        'B+': 3.5,
        'B': 3.0,
        'B-': 2.7,
        'C+': 2.5,
        'C': 2.0,
        'C-': 1.7,
        'D+': 1.5,
        'D': 1.0,
        'D-': 0.7,
        'F': 0,
    }

    for (let i in data) {
        for (let key in data[i]) {
            if (key === 'grade') {
                grossPoints += (data[i].credit * tableFourPointZero[data[i][key]]);
                if (data[i].major) {
                grossMajorPoints += data[i].credit * tableFourPointZero[data[i][key]];
                }
            }

        }
    }
    return [grossPoints, grossMajorPoints];
}