//설계
// 1. 학점을 모두 더해 '이수학점'을 만든다
// 2. 과목별 점수*학점을 '총점수'에 저장한다
// 3. 과목별 '총점수'를 더하여 '모두더한총점수'에 저장한다
// 4. '총평점'에 '모두더한총점수' / '이수학점'을 저장한다
// 5. '총평점'과 '이수학점'을 출력한다

//skeleton code
// function showGrade(배열){
//     let 이수학점
//     let 모두더한총점수
//     let 총평점
//     for(배열의 원소를 돈다){
//         이수학점 += 배열.학점
//     }
//     for(배열의 원소를 돈다){
//         배열.총점수 = 배열.점수 * 배열.학점
//     }
//     for(배열의 원소를 돈다){
//         모두더한총점수 += 배열.총점수
//     }
//     총평점 = 모두더한총점수/이수학점
//     return 총평점, 이수학점
// }

let Grade = {
    'A+': 4.5,
    'A': 4.3,
    'A-': 4.0,
    'B+': 3.5,
    'B': 3.3,
    'B-': 3.0,
    'C+': 2.5,
    'C': 2.3,
    'C-': 2.0,
    'D+': 1.5,
    'D': 1.3,
    'D-': 1.0,
    'F': 0
}

function showGrade(arr) {
    let allCredits = 0;
    let allGrades = 0;
    let gpa;

    for (let i = 0; i < arr.length; i++) {
        allCredits += arr[i][2];
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i].push(Grade[arr[i][1]] * arr[i][2]);
    }

    for (let i = 0; i < arr.length; i++) {
        allGrades += arr[i][3];
    }

    gpa = allGrades / allCredits;

    return "총평점 " + String(gpa.toFixed(2)) + ", 이수학점 " + String(allCredits);
}

var data = [['데이터베이스', 'A', 3], ['교양영어', 'B+', 1], ['철학', 'A', 2]];

console.log(showGrade(data));