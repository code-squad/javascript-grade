// Encapsuled method for gpa update & calculation
const gpa = (function() {
    const gpaTable = {'A+': 4.5, A: 4, 'B+': 3.5, B: 3, 'C+': 2.5, C: 2, D: 1, F:0};
    let accumulatedScore = {total: 0, major: 0};
    let accumulatedCredit = {total: 0, major: 0};

    return {
        updateScoreAndCredit(isMajor, grade, credit) {
            accumulatedScore.total += gpaTable[grade] * credit;
            accumulatedCredit.total += credit;
            if(isMajor) {
                accumulatedScore.major += gpaTable[grade] * credit;
                accumulatedCredit.major += credit;
            }
        },
        average(lectureType, gradeSystem = 4.5) {
            const calculatedGPA45 = (accumulatedScore[lectureType] / accumulatedCredit[lectureType]).toFixed(2);
            if (gradeSystem === 4.5) return calculatedGPA45
            
            return (calculatedGPA45 * gradeSystem / 4.5).toFixed(2);
        },
        credit(lectureType) {return accumulatedCredit[lectureType]},
        init() {
            accumulatedScore = {total: 0, major: 0};
            accumulatedCredit = {total: 0, major: 0};
        }
    }
})();

// Iterate through course grade/credit & log calculated GPA
function showGrade(lectureList) {
    gpa.init();
    for (let {major, grade, credit} of lectureList) {
        gpa.updateScoreAndCredit(major, grade, credit);       
    }

    console.log(`4.5 기준 총평점 : ${gpa.average('total')} (4.0기준은 ${gpa.average('total',4.0)}), 전공평점: ${gpa.average('major')} (4.0기준은 ${gpa.average('major', 4.0)}), 이수학점: ${gpa.credit('total')}, 전공이수학점: ${gpa.credit('major')}`);    
}

/*
새로운 과목을 추가하는 메소드. 객체 형태 과목정보를 인자로 받는다. addLecture 를 호출하면 자동으로 다시 평점 결과 출력
> addLecture({'name' : '알고리즘', 'grade' : 'B', 'credit' : 3, 'bMajor' : true});  // 다시 결과 출력
*/
function addLecture(lectureList, lectureObject) {
    lectureList.push(lectureObject);
    showGrade(lectureList);
}

/*
기존 과목을 삭제하는 메소드. 과목명만 인자로 받는다. removeLecture를 호출하면 다시 평점 결과 출력
removeLecutre 는 지정된 시간에 따라(함수의 인자로 받은 시간값)서 지연출력된다.
> removeLecture('알고리즘', 2000);  // 2초뒤에 다시 결과 출력
*/
function removeLecture(lectureList, lectureToRemove, timeout) {
    lectureList = lectureList.filter(({name}) => name !== lectureToRemove);
    
    setTimeout(showGrade, timeout, lectureList);
}

//수업들의 이수학점/평점을 서식에 맞게 출력하는 메소드. 수업목록 행렬을 인자로 받는다.
function sortGrade(lectureList) {
    const lecturesWithSameGrade = groupLecturesByGrade(lectureList);
    const resultStr = stringifyLectures(lecturesWithSameGrade);

    console.log(`-------------\n${resultStr}\n-------------`);
}

function groupLecturesByGrade(lectureList) {
    const lecturesByGrade = {};
    // 수업들을 평점별로 묶어 저장
    for (let lecture of lectureList) {
        if (!lecturesByGrade[lecture.grade]) lecturesByGrade[lecture.grade] = [];
        lecturesByGrade[lecture.grade].push(lecture);
    }
    // 각 평점별 수업 배열을 학점순으로 정렬
    for (let grade in lecturesByGrade){
        lecturesByGrade[grade].sort((a,b) => a.credit < b.credit);
    }

    return lecturesByGrade
}

function stringifyLectures(lecturesWithSameGrade) {
    let resultStr = ``;
    let orderedLecturesArray = [];

    //평점별 수업목록 객체를 1단짜리 배열로 통합
    for (let targetGrade in lecturesWithSameGrade) {
        orderedLecturesArray.push(...lecturesWithSameGrade[targetGrade]);
    }
    //위 배열 속 수업 정보들에 출력용 문자열을 추가
    for (let lecture of orderedLecturesArray) {
        lecture.str = `\'${lecture.name}\', \'${lecture.grade}\', ${lecture.credit}학점`;
    }
    //각 수업별 문자열을 출력용 변수에 저장
    orderedLecturesArray.reduce(addLectureStrToResult, resultStr);
    function addLectureStrToResult(lecture1, lecture2) {
        //맨 첫줄이 아니며 앞선 수업과 평점이 다르면 줄바꿈 추가
        if(resultStr !== `` && lecture1.grade !== lecture2.grade) resultStr += `\n`;
        resultStr += `\n` + lecture2.str;

        return lecture2
    }

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


/*
const lectureToAdd = {'name' : '자료구조와 알고리즘', 'grade' : 'B', 'credit' : 3, 'major' : true};
addLecture(lectureList, lectureToAdd);
//> 4.5 기준 총평점 : 1.36 (4.0기준은 1.21), 전공평점: 1.35 (4.0기준은 1.20), 이수학점: 22, 전공이수학점: 10

removeLecture(lectureList, '자료구조와 알고리즘', 1000);
//4.5 기준 총평점 : 1.42 (4.0기준은 1.26), 전공평점: 1.50 (4.0기준은 1.33), 이수학점: 19, 전공이수학점: 7


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
