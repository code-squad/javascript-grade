// 총평점 : 3.92, 전공평점:3.5, 이수학점:12, 전공이수학점:6.
function getScore(grade){
    switch(grade){
        case 'A+': return 4.5;
        break;
        case 'A' : return 4.0;
        break;
        case 'B+' : return 3.5;
        break;
        case 'B' : return 3.0;
        break;
        case 'C+' : return 2.5;
        break;
        case 'C' : return 2.0;
        break;
        case 'D+' : return 1.5;
        break;
        case 'D' : return 1.0;
        break;
        default : return 0;
    }
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
    let grade_sum = 0, grade_done = 0, major_sum = 0, major_done = 0;
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
    
    console.log("총평점 : " + (grade_sum/grade_done).toFixed(2) 
    + ", 전공 평점 : "+ (major_sum/major_done).toFixed(2) 
    + ", 이수학점 : " + grade_done
    + ", 전공이수학점 : " + major_done);

    //요구사항2 4.5가 아니고 4.0 만점의 경우 총평점
    console.log("4.0학점으로 변환하는 경우 총평점은 " + ((grade_sum/grade_done)*4/4.5).toFixed(2) + "입니다.")
    
}
printScore(data); // 예상결과 3.92 4 6 3
addLecture({'name' : '알고리즘', 'grade' : 'B', 'credit' : 3, 'bMajor' : true}); //예상결과 3.61 3.5 9 6 3.21