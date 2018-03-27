/* 
    피드백
    전역변수를 줄여보자
*/

// 객체(딕셔너리) 버전
// 전공항목 추가
var data = [
    {
        'name': '데이터베이스',
        'grade': 'A',
        'credit': 3,
        'major': true
    },
    {
        'name': '교양영어',
        'grade': 'B+',
        'credit': 2,
        'major': false
    },
    {
        'name': '철학',
        'grade': 'B+',
        'credit': 1,
        'major': false
    }
];

var translateGradeToNum = {
    "A+": 4.5, "A": 4, "B+": 3.5, "B": 3, "C+": 2.5, "C": 2,
    "D+": 1.5, "D": 1, "F": 0
}

// 즉시실행함수
var subject = (function () {

    var num = 0; // 과목 갯수 체크
    var majorNum = 0; // 전공 과목 갯수 체크
    var totalRating = 0; // 총 평점
    var standardFourTotalRating = 0; // 학점기준 4.0 일 때 총평점
    var majorRating = 0; // 전공평점
    var completionCredit = 0; // 이수학점
    var majorCompletionCredit = 0; // 전공이수학점

    var initVariable = function () {
        this.num = 0; // 과목 갯수 체크
        this.totalRating = 0; // 총 평점
        this.majorNum = 0; // 전공 과목 갯수 체크
        this.standardFourTotalRating = 0; // 학점기준 4.0 일 때 총평점
        this.majorRating = 0; // 전공평점
        this.completionCredit = 0; // 이수학점
        this.majorCompletionCredit = 0; // 전공이수학점
    };

    // public 속성, 메소드
    return {
        num: num,
        majorNum: majorNum,
        totalRating: totalRating,
        standardFourTotalRating: standardFourTotalRating,
        majorRating: majorRating,
        completionCredit: completionCredit,
        majorCompletionCredit: majorCompletionCredit,
        initVariable: initVariable
    };
}());

function showGrade(data, subject) {

    calGradeAndCredit(data, subject);

    setTimeout(function () {
        // 출력
        log("총 평점 " + subject.totalRating +
            " , 전공평점 : " + subject.majorRating +
            " , 이수학점 " + subject.completionCredit +
            " , 전공이수학점 : " + subject.majorCompletionCredit);

        log("4.0 학점으로 변환하는 경우 총 평점은 " +
            subject.standardFourTotalRating + " 입니다.");
    }, 2000);
}

function calGradeAndCredit(data, subject) {

    subject.initVariable();

    // 과목의 갯수만큼 반복문을 수행
    for (var index in data) {
        // 해당 데이터에서 인덱스를 접근해 데이터 계산
        var grade = data[index].grade;
        var credit = data[index].credit;
        var major = data[index].major;

        subject.num++;
        subject.totalRating += translateGradeToNum[grade];
        subject.completionCredit += credit;

        // 전공이라면
        // 전공평점과 전공이수학점에 계산
        if (major) {
            subject.majorRating += translateGradeToNum[grade];
            subject.majorCompletionCredit += credit;
            subject.majorNum++;
        }
    }

    // 소숫점 3번째 자리에서 반올림 처리
    subject.totalRating = (subject.totalRating / subject.num).toFixed(2);

    // 전공평점 계산
    subject.majorRating = (subject.majorRating / subject.majorNum).toFixed(2);

    // 4.0 학점을 기준으로 한 평점 계산
    subject.standardFourTotalRating = ((subject.totalRating * 4) / 4.5).toFixed(2);
}

function addLecture(obj) {
    data.push(obj);
}

function log(data) {
    console.log(data);
}

var lecture = {
    'name': '알고리즘', 'grade': 'B', 'credit': 3, 'major': true
};

addLecture(lecture);
showGrade(data, subject);