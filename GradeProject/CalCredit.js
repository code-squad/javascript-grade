/* 
    요구사항 2
    단위의 범위가 변경되었을 경우 이를 처리할 수 있는 함수를 만들어보자.
    함수가 범용적으로 쓸수 있도록 하자,
    4.5가 아니고 만점이 4.0인 경우에도 동작할 수 있도록 한다.
*/

function showGrade(data) {
    var subjectNumber = data.length; // 과목 갯수 체크

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

    // 4.0 학점으로 변환한 후 총 평점
    totalGradeNum = ((totalGradeNum * 4) / 4.5).toFixed(2);

    console.log("4.0 학점으로 변환하는 경우 총 평점은 " + totalGradeNum + " 입니다.");
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