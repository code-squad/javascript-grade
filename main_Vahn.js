let sampleData =  [ 
    {
        'name' : '데이터베이스', 
        'grade' : 'A', 
        'credit' : 3,
        'major' : false
    },
    {
        'name' : '교양영어', 
        'grade' : 'B+', 
        'credit' : 2,
      'major' : true
    },
    {
        'name' : '철학', 
        'grade' : 'B+', 
        'credit' : 1,
        'major' : false
    }
];

function showGrade(dataArr) {
    let gpaTable = {
        4.5: {'A+': 4.5, A: 4, 'B+': 3.5, B: 3, 'C+': 2.5, C: 2, F:0},
        4.0: {'A+': 4.0, A: 4, 'B+': 3.3, B: 3, 'C+': 2.3, C: 2, F:0}
        };
    let accumulatedScore = {
        total: {4.5: 0, 4.0: 0},
         major: {4.5: 0, 4.0: 0}
        };
    let accumulatedCredit = {total: 0, major: 0};
    let gpa = {
        total: {4.5: 0, 4.0: 0},
         major: {4.5: 0, 4.0: 0}
        };
    debugger;
    //iterate through array items
    for (let classes of dataArr) {
        // get info: grade & credit & major
        const grade = classes.grade;
        const credit = classes.credit;
        const isMajor = classes.major;
            //save it as accumulated score & credit
            accumulatedScore.total[4.5] += gpaTable[4.5][grade];
            accumulatedScore.total[4.0] += gpaTable[4.0][grade];
            accumulatedCredit.total += credit;
                
            // add additinoal info if the class is major one
            if (isMajor) {
                accumulatedScore.major[4.5] += gpaTable[4.5][grade];
                accumulatedScore.major[4.0] += gpaTable[4.0][grade];
                accumulatedCredit.major += credit;
            }
    }
    // calculate final gpa
    gpa = {
        total: {
            4.5: (accumulatedScore.total[4.5] / accumulatedCredit.total).toFixed(2),
            4.0: (accumulatedScore.total[4.0] / accumulatedCredit.total).toFixed(2)
        },
         major: {
            4.5: (accumulatedScore.major[4.5] / accumulatedCredit.major).toFixed(2),
            4.0: (accumulatedScore.major[4.0] / accumulatedCredit.major).toFixed(2)}
        };

    // log gpa info on console
    console.log(`4.5 기준 총평점 : ${gpa.total[4.5]} (4.0기준은 ${gpa.total[4.0]}, 전공평점: ${gpa.major[4.5]} (4.0기준은 ${gpa.major[4.0]}), 이수학점: ${accumulatedCredit.total}, 전공이수학점: ${accumulatedCredit.major}`);    
}


showGrade(sampleData);
//> 4.5기준 총평점 : 3.92(4.0기준은 3.40),  전공평점:3.5(4.0기준은 3.10),  이수학점:12, 전공이수학점:6