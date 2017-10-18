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

var data =  [ 
                {
                    'name' : '데이터베이스', 
                    'grade' : 'A', 
                    'credit' : 3
                },
                {
                    'name' : '교양영어', 
                    'grade' : 'B+', 
                    'credit' : 2
                },
                {
                    'name' : '철학', 
                    'grade' : 'B+', 
                    'credit' : 1
                }
]
var grade_sum = 0;
var grade_done = 0;

data.forEach(
    function(task){
        grade_done +=  task.credit;
        grade_sum += getScore(task.grade)*task.credit;
    }
);
console.log("총 평점 " + (grade_sum/grade_done).toFixed(2) +" , 이수학점 " + grade_done);