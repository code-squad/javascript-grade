// Encapsuled method for gpa update & calculation
const gpa = (function() {
    const gpaTable = {'A+': 4.5, A: 4, 'B+': 3.5, B: 3, 'C+': 2.5, C: 2, F:0};
    let accumulatedScore = {total: 0, major: 0};
    let accumulatedCredit = {total: 0, major: 0};

    return {
        updateScoreAndCredit(isMajor = true, grade = 'B+', credit = 3) {
            accumulatedScore.total += gpaTable[grade];
            accumulatedCredit.total += credit;
            if(isMajor) {
                accumulatedScore.major += gpaTable[grade];
                accumulatedCredit.major += credit;
            }
        },
        average(scope = 'total', gradeSystem = 4.5) {
            const calculatedGPA = accumulatedScore[scope] / accumulatedCredit[scope];
            return (gradeSystem === 4.0) ? (calculatedGPA * 4.0 / 4.5).toFixed(2) : calculatedGPA.toFixed(2)
        },
        credit(scope = 'total') {return accumulatedCredit[scope]}
    }
})();

// Iterate through course grade/credit & log calculated GPA
function showGrade(dataArr) {
    for (let course of dataArr) {
        gpa.updateScoreAndCredit(course.major, course.grade, course.credit);       
    }

    console.log(`4.5 기준 총평점 : ${gpa.average('total')} (4.0기준은 ${gpa.average('total',4.0)}), 전공평점: ${gpa.average('major')} (4.0기준은 ${gpa.average('major', 4.0)}), 이수학점: ${gpa.credit('total')}, 전공이수학점: ${gpa.credit('major')}`);    
}

/*
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

showGrade(sampleData);
//> 4.5 기준 총평점 : 1.83 (4.0기준은 1.63), 전공평점: 1.75 (4.0기준은 1.56), 이수학점: 6, 전공이수학점: 2

/*