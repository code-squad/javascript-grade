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
새로운 과목을 추가하는 메소드. 객체 형태 과목정보를 인자로 받는다. addLecture 를 호출하면 자동으로 다시 평점 결과 출력
> addLecture({'name' : '알고리즘', 'grade' : 'B', 'credit' : 3, 'bMajor' : true});  // 다시 결과 출력
*/
function addLecture(lectureObject) {
    lectureList.push(lectureObject);
    showGrade(lectureList);
}

/*
기존 과목을 삭제하는 메소드. 과목명만 인자로 받는다. removeLecture를 호출하면 다시 평점 결과 출력
removeLecutre 는 지정된 시간에 따라(함수의 인자로 받은 시간값)서 지연출력된다.
> removeLecture('알고리즘', 2000);  // 2초뒤에 다시 결과 출력
*/
function removeLecture(lectureToRemove = "name", timeout = 2000) {
    for (let i in lectureList) {
        const lecture = lectureList[i];
        if(lecture.name === lectureToRemove) {
            lectureList.splice(i,1);
        }
    }

    setTimeout(showGrade, timeout, lectureList);
}

//수업들의 이수학점/평점을 서식에 맞게 출력하는 메소드. 수업목록 행렬을 인자로 받는다.
function sortGrade(lectureList) {
    const lecturesWithSameGrade = groupLecturesByGrade(lectureList);
    const resultStr = stringifyLectures(lecturesWithSameGrade);

    console.log(`-------------\n${resultStr}\n-------------`);
}

function groupLecturesByGrade(lectureList) {
    const lecturesWithSameGrade = {'A+': [], 'A': [], 'B+': [], 'B': [], 'C+': [], 'C': [], 'D': []};
    // 수업들을 평점별로 묶어 저장
    for (let lecture of lectureList) {
        const grade = lecture.grade;
        lecturesWithSameGrade[grade].push(lecture);
    }
    // 각 평점별 수업 배열을 학점순으로 정렬
    for (let targetGrade in lecturesWithSameGrade){
        lecturesWithSameGrade[targetGrade].sort((a,b) => a.credit < b.credit);
    }

    return lecturesWithSameGrade
}

function stringifyLectures(lecturesWithSameGrade) {
    let resultStr = ``;
    let orderedLecturesArray = [];

    //평점별 수업목록 객체를 1단짜리 배열로 통합
    for (let targetGrade in lecturesWithSameGrade) {
        orderedLecturesArray.push(...lecturesWithSameGrade[targetGrade]);
    }
    //각 수업 정보에 출력용 문자열을 추가
    for (let lecture of orderedLecturesArray) {
        lecture.str = `\'${lecture.name}\', \'${lecture.grade}\', ${lecture.credit}학점`;
    }
    //각 수업별 문자열을 출력용 변수에 저장
    resultStr += orderedLecturesArray[0].str;
    orderedLecturesArray.reduce(function (lecture1, lecture2) {
        if(lecture1.grade !== lecture2.grade) resultStr += `\n`;
        resultStr += `\n` + lecture2.str;
        return lecture2
    });
    
    return resultStr
}


//Test Cases

const lectureList =  [ 
    {
        'name' : '데이터베이스', 
        'grade' : 'A', 
        'credit' : 3,
        'major' : false
    },
    {
        'name' : 'VIM으로 최강속도 코딩하기', 
        'grade' : 'D', 
        'credit' : 1,
        'major' : false
    },
    {
        'name' : '교양영어', 
        'grade' : 'B+', 
        'credit' : 2,
        'major' : true
    },
    {
        'name' : '웹프로그래밍', 
        'grade' : 'A', 
        'credit' : 3,
        'major' : true
    },
    {
        'name' : 'Java완전정복', 
        'grade' : 'D', 
        'credit' : 3,
        'major' : false
    },
    {
        'name' : '프로그래밍 설계', 
        'grade' : 'B', 
        'credit' : 2,
        'major' : true
    },
    {
        'name' : '네트워크실습', 
        'grade' : 'A', 
        'credit' : 1,
        'major' : false
    },
    {
        'name' : '이산수학', 
        'grade' : 'B', 
        'credit' : 3,
        'major' : false
    },
    {
        'name' : '철학', 
        'grade' : 'B+', 
        'credit' : 1,
        'major' : false
    }
];

//showGrade(lectureList);
//> 4.5 기준 총평점 : 1.83 (4.0기준은 1.63), 전공평점: 1.75 (4.0기준은 1.56), 이수학점: 6, 전공이수학점: 2

const lectureToAdd = {'name' : '자료구조와 알고리즘', 'grade' : 'B', 'credit' : 3, 'major' : true};
addLecture(lectureToAdd);
//> 4.5 기준 총평점 : 1.61 (4.0기준은 1.43), 전공평점: 1.40 (4.0기준은 1.24), 이수학점: 9, 전공이수학점: 5

removeLecture('자료구조와 알고리즘', 1000);
//> 4.5 기준 총평점 : 1.83 (4.0기준은 1.63), 전공평점: 1.75 (4.0기준은 1.56), 이수학점: 6, 전공이수학점: 2

sortGrade(lectureList);
/*
    -------------
    '데이터베이스', 'A' , 3학점
    '웹프로그래밍', 'A' , 3학점
    '네트워크실습', 'A' , 1학점

    '자료구조와 알고리즘', 'B' , 3학점
    '프로그래밍 설계', 'B' , 2학점
    '이산수학', 'B' , 3학점

    'Java완전정복', 'D' , 3학점
    'VIM으로최강속도코딩하기', 'D , 1학점
    -------------


*/