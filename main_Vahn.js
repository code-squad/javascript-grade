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
    
            const calculatedGPA45 = (accumulatedScore[scope] / accumulatedCredit[scope]).toFixed(2);
            const calculatedGPA40 = (calculatedGPA45 * 4.0 / 4.5).toFixed(2);
            return (gradeSystem === 4.0) ? calculatedGPA40 : calculatedGPA45
        },
        credit(scope = 'total') {return accumulatedCredit[scope]},
        init() {
            accumulatedScore = {total: 0, major: 0};
            accumulatedCredit = {total: 0, major: 0};
        }
    }
})();

// Iterate through course grade/credit & log calculated GPA
function showGrade(dataArr) {
    gpa.init();
    for (let course of dataArr) {
        gpa.updateScoreAndCredit(course.major, course.grade, course.credit);       
    }

    console.log(`4.5 기준 총평점 : ${gpa.average('total')} (4.0기준은 ${gpa.average('total',4.0)}), 전공평점: ${gpa.average('major')} (4.0기준은 ${gpa.average('major', 4.0)}), 이수학점: ${gpa.credit('total')}, 전공이수학점: ${gpa.credit('major')}`);    
}

/*
새로운 과목을 추가하는 메소드, addLecture 를 호출하면 자동으로 다시 평점 결과 출력
> addLecture({'name' : '알고리즘', 'grade' : 'B', 'credit' : 3, 'bMajor' : true});  // 다시 결과 출력
*/
function addLecture(object) {
    const lectureObject = arguments[0];
    lectureList.push(lectureObject);
    showGrade(lectureList);
}

/*
기존 과목을 삭제하는 메소드 과목명만 인자로 받는다. removeLecture를 호출하면 다시 평점 결과 출력
removeLecutre 는 지정된 시간에 따라(함수의 인자로 받은 시간값)서 지연출력된다.
> removeLecture('알고리즘', 2000);  // 2초뒤에 다시 결과 출력
*/
function removeLecture(lectureToRemove = "name", timeout = 2000) {
    for (let i = 0; i < lectureList.length; i++) {
        const lecture = lectureList[i];
        if(lecture.name === lectureToRemove) {
            lectureList.splice(i,1);
            break;
        }
    }
    setTimeout(showGrade, timeout, lectureList);
}

const lectureList =  [ 
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

showGrade(lectureList);
//> 4.5 기준 총평점 : 1.83 (4.0기준은 1.63), 전공평점: 1.75 (4.0기준은 1.56), 이수학점: 6, 전공이수학점: 2

const testLecture = {'name' : '알고리즘', 'grade' : 'B', 'credit' : 3, 'major' : true};
addLecture(testLecture);
//> 4.5 기준 총평점 : 1.61 (4.0기준은 1.43), 전공평점: 1.40 (4.0기준은 1.24), 이수학점: 9, 전공이수학점: 5

removeLecture('알고리즘', 1000);