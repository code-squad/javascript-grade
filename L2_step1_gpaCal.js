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
    let credits = 0;
    let majorCredits = 0;
    for (let key in data) {
        credits += data[key].credit;
        if (data[key].major) {
            majorCredits += data[key].credit;
        }
    }
    return [credits, majorCredits];
}