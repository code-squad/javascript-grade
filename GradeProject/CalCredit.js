function showGrade(data) {
    // 일단 과목의 갯수를 체크하기 위해서 변수를 선언
    // 이수학점 데이터를 관리하기 위해 변수 선언
    // 총 평점 데이터를 관리하기 위해 변수 선언
    var subjectNumber = data.length;
    var completionGradeNum = 0;
    var totalGradeNum = 0;

    const gradeIndex = 1;
    const gradeNumIndex = 2;
    
    // 과목의 갯수만큼 반복문을 수행
    for (var i=0; i<subjectNumber; i++) {
        // 해당 데이터에서 인덱스를 접근해 데이터 계산
        var grade = data[i][gradeIndex];
        console.log(grade);
        var gradeNum = data[i][gradeNumIndex];
        console.log(gradeNum);
        
        completionGradeNum += translateGradeToNum(grade);
        totalGradeNum += gradeNum;
    }

    // 소숫점 3번째 자리에서 반올림 처리
    completionGradeNum = (completionGradeNum/subjectNumber).toFixed(2);

    // 출력
    console.log("총 평점 " + completionGradeNum + " , 이수학점 " + totalGradeNum);
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

var data = [ ['데이터베이스', 'A', 3], ['교양영어', 'B+', 1], ['철학', 'A', 2]];
showGrade(data);