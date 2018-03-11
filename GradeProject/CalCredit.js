/* 
    요구사항 4
    최종 출력 결과가 2초 뒤에 화면에 나타나도록 해보자.
*/

// 객체(딕셔너리) 버전
// 전공항목 추가
var data =  [
    {
        'name' : '데이터베이스',
        'grade' : 'A',
        'credit' : 3,
        'major' : true
    },
    {
        'name' : '교양영어',
        'grade' : 'B+',
        'credit' : 2,
        'major' : false
    },
    {
        'name' : '철학',
        'grade' : 'B+',
        'credit' : 1,
        'major' : false
    }
];

// 전역변수로 변환
var subjectNumber = 0; // 과목 갯수 체크
var majorSubjectNumber = 0; // 전공 과목 갯수 체크

var totalGradeNum = 0; // 총 평점
var totalGradeFor4 = 0; // 4.0 을 위한 총 평점
var majorGradeNum = 0; // 전공 평점

var completionCredit = 0; // 이수 학점
var majorCompletionCredit = 0; // 전공 이수 학점

function showGrade() {

    calGradeAndCredit(data);

    setTimeout(function () {
        // 출력
        console.log("총 평점 " + totalGradeNum +
            " , 전공평점 : " + majorGradeNum +
            " , 이수학점 " + completionCredit +
            " , 전공이수학점 : " + majorCompletionCredit);

        console.log("4.0 학점으로 변환하는 경우 총 평점은 " + totalGradeFor4 + " 입니다.");
    }, 2000);
}

function calGradeAndCredit(_data) {

    initVariable();

    // 과목의 갯수만큼 반복문을 수행
    for (var index in _data) {
        // 해당 데이터에서 인덱스를 접근해 데이터 계산
        var grade = _data[index].grade;
        var credit = _data[index].credit;
        var major = _data[index].major;

        totalGradeNum += translateGradeToNum(grade);
        completionCredit += credit;

        // 전공이라면
        // 전공평점과 전공이수학점에 계산
        if (major) {
            majorGradeNum += translateGradeToNum(grade);
            majorCompletionCredit += credit;
            majorSubjectNumber++;
        }
    }

    // 소숫점 3번째 자리에서 반올림 처리
    totalGradeNum = (totalGradeNum/subjectNumber).toFixed(2);

    // 전공평점 계산
    majorGradeNum = (majorGradeNum/majorSubjectNumber).toFixed(2);

    // 4.0 학점을 기준으로 한 평점 계산
    totalGradeFor4 = ((totalGradeNum * 4) / 4.5).toFixed(2);
}

function initVariable() {
    subjectNumber = data.length; // 과목 갯수 체크
    majorSubjectNumber = 0; // 전공 과목 갯수 체크

    totalGradeNum = 0; // 총 평점
    totalGradeFor4 = 0; // 4.0 을 위한 총 평점
    majorGradeNum = 0; // 전공 평점

    completionCredit = 0; // 이수 학점
    majorCompletionCredit = 0; // 전공 이수 학점
}

function addLecture(obj) {
    data.push(obj);
}

// 학점(A+, A ...) 을 숫자로 변환하기 위한 함수
function translateGradeToNum(_grade) {
    switch (_grade) {
        case "A+":
            return 4.5;
        case "A":
            return 4;
        case "B+":
            return 3.5;
        case "B":
            return 3;
        case "C+":
            return 2.5;
        case "C":
            return 2;
        case "D+":
            return 1.5;
        case "D":
            return 1;
        default:
            return 0;
    }
}

addLecture({'name' : '알고리즘', 'grade' : 'B', 'credit' : 3, 'major' : true});
showGrade();