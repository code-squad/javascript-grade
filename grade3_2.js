// 총평점 : 3.92, 전공평점:3.5, 이수학점:12, 전공이수학점:6.
function getScore(grade){
    var sum = "FDCBA".indexOf(grade[0]);
    if(grade[1] == '+') sum += 0.5;
    return sum;
}
let data =  [ 
    {
        'name' : '데이터베이스', 
        'grade' : 'A', 
        'credit' : 3,
        'bMajor' : true
    },
    {
        'name' : '교양영어', 
        'grade' : 'B+', 
        'credit' : 1,
        'bMajor' : false
    },
    {
        'name' : '철학', 
        'grade' : 'A', 
        'credit' : 2,
        'bMajor' : false
    }
]
function addLecture (score){
    data.push(score); //data의 뒤에 새로운 과목의 정보를 추가
    printScore(data);
}
function printScore(score){
    var grade_sum = 0, grade_done = 0, major_sum = 0, major_done = 0;
    var total, major_avg, changeScore;
    score.forEach(
        function(task){
            grade_done +=  task.credit;
            grade_sum += getScore(task.grade)*task.credit;
            if(task.bMajor) {
                major_sum += getScore(task.grade)*task.credit;
                major_done += task.credit;
            }
        }
    );
    total = (grade_sum/grade_done).toFixed(2);
    major_avg = (major_sum/major_done).toFixed(2);
    changeScore = ((grade_sum/grade_done)*4/4.5).toFixed(2);

    console.log("총평점 : " + total
    + ", 전공 평점 : "+ major_avg 
    + ", 이수학점 : " + grade_done
    + ", 전공이수학점 : " + major_done);
    console.log("4.0학점으로 변환하는 경우 총평점은 " + changeScore + "입니다.")
}
printScore(data); // 예상결과 3.92 4 6 3
addLecture({'name' : '알고리즘', 'grade' : 'B', 'credit' : 3, 'bMajor' : true}); //예상결과 3.61 3.5 9 6 3.21