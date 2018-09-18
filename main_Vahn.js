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
function addLecture(object) {
    const lectureObject = arguments[0];
    lectureList.push(lectureObject);
    showGrade(lectureList);
}

/*
기존 과목을 삭제하는 메소드. 과목명만 인자로 받는다. removeLecture를 호출하면 다시 평점 결과 출력
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

/* 
다음과 같이 정렬한 형태로 출력되도록 sortGrade 함수를 만든다. grade를 우선정렬하고, 그 안에서는 학점으로 정렬된다.

const data = [{...}, {....}., {...}];

> sortMyGrade(data);

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
function sortGrade(lectureList) {
    debugger;
    let result = ``;
    const lecturesWithSameGrade = {'A+': [], 'A': [], 'B+': [], 'B': [], 'C+': [], 'C': [], 'D': []};
    
    // 학점객체 순서대로 루프 (A+ > A > B+ ...)
    for (let targetGrade in lecturesWithSameGrade){
        for (let lecture of lectureList) {
            if (lecture.grade === targetGrade) lecturesWithSameGrade[targetGrade].push(lecture);
        }
        // 동일학점 수업 목록을 학점순으로 정렬
        lecturesWithSameGrade[targetGrade].sort((a,b) => a.credit < b.credit);
    }

    //동일학점 수업목록을 출력 문자열에 저장
    for (let targetGrade in lecturesWithSameGrade) {
        const lecturesInCertainGrade = lecturesWithSameGrade[targetGrade];
        //해당 학점 수업 없으면 패스
        if(lecturesInCertainGrade.length === 0) continue;
        //수업 있으면 서식 맞춰서 문자열에 추가
        for (let i = 0; i < lecturesInCertainGrade.length; i++) {
            let lecture = lecturesInCertainGrade[i];
            result += `\'${lecture.name}\', \'${lecture.grade}\', ${lecture.credit}학점`;
            if(i !== lecturesInCertainGrade.length) result += '\n';
        }
        // 앞에 존재하는 값 있으면 문자열 맨 앞에 줄바꿈 추가

    }

    //결과 출력
    console.log(
        `
        -------------
        ${result}
        -------------
        `
    );
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
//> 4.5 기준 총평점 : 1.83 (4.0기준은 1.63), 전공평점: 1.75 (4.0기준은 1.56), 이수학점: 6, 전공이수학점: 2



sortGrade(lectureList);