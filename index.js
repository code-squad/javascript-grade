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

// [과목, 성적, 학점]이 요소가 되는 배열을 입력받아 총평점과 이수학점을 리턴하는 함수
function showData(data) {
    let totalSum = 0; // 모든 성적의 합을
    let totalSumConvert = 0;
    let majorTotalSum = 0; // 전공 성적의 합
    let totalCredit = 0; // 총 이수학점
    let majorTotalCredit = 0; // 전공 총 이수학점

    // 성적의 합, 이수학점을 선언한 변수에 담아주는 로직
    data.forEach(function (v) {
        if (v.major === true) {
            majorTotalSum += grade[v.grade] * v.credit;
            majorTotalCredit += v.credit;
        }
        totalSumConvert += convertGpa(v.grade) * v.credit;
        totalSum += grade[v.grade] * v.credit;
        totalCredit += v.credit;
    })
    let gpa = (totalSum / totalCredit).toFixed(2); // 총 평점 계산
    let convertedGpa = (totalSumConvert / totalCredit).toFixed(2); // 4.0으로 변환하여 계산
    let majorGpa = (majorTotalSum / majorTotalCredit).toFixed(2); // 전공 총 평점 계산

    let result = `총폄점 : ${gpa}, 전공평점 : ${majorGpa} 이수학점 : ${totalCredit} ` +
        `전공이수학점 : ${majorTotalCredit}
        4.0학점으로 변환하는 경우 총평점은 ${convertedGpa}`;
    return result;
}

// 학점을 4.0으로 계산할 때 입력값에 따라 변환해주는 함수
function convertGpa(input) {
    switch (input) {
        case 'A+':
            return 4;
            break;
        case 'B+':
            return 3.3;
            break;
        case 'C+':
            return 2.3;
            break;
        case 'D+':
            return 1.3;
            break;
        default:
            return grade[input];
    }
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