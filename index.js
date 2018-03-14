// [과목, 성적, 학점]이 요소가 되는 배열을 입력받아 총평점과 이수학점을 리턴하는 함수
function showData(args) {
    // 성적별 점수를 담아놓은 객체
    let grade = {
        'A+': 4.5,
        'A': 4.0,
        'B+': 3.5,
        'B': 3.0,
        'C+': 2.5,
        'C': 2.0,
        'D+': 1.5,
        'D': 1.0,
        'F': 0
    }
    let totalSum = 0; // 모든 성적의 합을 담을 변수
    let totalCredit = 0; // 총 이수학점을 담을 변수
    args.forEach(function (v) {
        totalSum += grade[v[1]] * v[2];
        totalCredit += v[2];
    })
    let gpa = (totalSum / totalCredit).toFixed(2); // 총 평점 계산하는 식
    return `총폄점 ${gpa}, 이수학점 ${totalCredit}`;
}

let data = [
    ['Database', 'A+', 3],
    ['Algorithm', 'A', 2],
    ['AWS', 'D', 2]
];

console.log(showData(data));