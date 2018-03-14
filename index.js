// [과목, 성적, 학점]이 요소가 되는 배열을 입력받아 총평점과 이수학점을 리턴하는 함수
function showData(data) {
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
    let totalSum = 0; // 모든 성적의 합을
    let majorTotalSum = 0; // 전공 성적의 합
    let totalCredit = 0; // 총 이수학점
    let majorTotalCredit = 0; // 전공 총 이수학점

    // 성적의 합, 이수학점을 선언한 변수에 담아주는 로직
    data.forEach(function (v) {
        if (v.major === true) {
            majorTotalSum += grade[v.grade] * v.credit;
            majorTotalCredit += v.credit;
        }
        totalSum += grade[v.grade] * v.credit;
        totalCredit += v.credit;
    })
    let gpa = (totalSum / totalCredit).toFixed(2); // 총 평점 계산
    let majorGpa = (majorTotalSum / majorTotalCredit).toFixed(2); // 전공 총 평점 계산
    return `총폄점 : ${gpa}, 전공평점 : ${majorGpa} 이수학점 : ${totalCredit} 전공이수학점 : ${majorTotalCredit}`;
}


// 내가 입력한 성적
var data = [{
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
    },
    {
        'name': '알고리즘',
        'grade': 'C+',
        'credit': 3,
        'major': true
    },
    {
        'name': '공업수학',
        'grade': 'D',
        'credit': 3,
        'major': true
    },
    {
        'name': '테니스',
        'grade': 'A+',
        'credit': 3,
        'major': false
    }
];

console.log(showData(data));