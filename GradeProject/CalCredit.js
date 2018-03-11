function showGrade(data) {
    // 일단 과목의 갯수를 체크하기 위해서 변수를 선언
    // 이수학점 데이터를 관리하기 위해 변수 선언
    // 총 평점 데이터를 관리하기 위해 변수 선언
    // 전공평점 데이터를 관리하기 위해 변수 선언
    var subjectNumber = data.length;

    var totalGradeNum = 0; // 총 평점
    var majorGradeNum = 0; // 전공 평점

    var completionCredit = 0; // 이수 학점
    var majorCompletionCredit = 0; // 전공 이수 학점

    // 과목의 갯수만큼 반복문을 수행
    for (obj in data) {
        // 해당 데이터에서 인덱스를 접근해 데이터 계산
        var grade = data[obj].grade;
        var credit = data[obj].credit;
        var major = data[obj].major;

        totalGradeNum += translateGradeToNum(grade);
        completionCredit += credit;

        // 전공이라면
        // 전공평점과 전공이수학점에 계산
        if (major) {
            majorGradeNum += translateGradeToNum(grade);
            majorCompletionCredit += credit;
        }
    }

    // 소숫점 3번째 자리에서 반올림 처리
    totalGradeNum = (totalGradeNum/subjectNumber).toFixed(2);

    // 출력
    console.log("총 평점 " + totalGradeNum +
                " , 전공평점 : " + majorGradeNum +
                " , 이수학점 " + completionCredit +
                " , 전공이수학점 : " + majorCompletionCredit);
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
showGrade(data);