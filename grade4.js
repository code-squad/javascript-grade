 /*
> 과목을 JSON형태로 입력하세요<종료는 end입력> : {"name" : "영어교양", "grade" : "A", "credit" : 3, "bMajor" : false}
> 과목을 JSON형태로 입력하세요<종료는 end입력> : {"name" : "c programming", "grade" : "A", "credit" : 2, "bMajor" : true}
> 과목을 JSON형태로 입력하세요<종료는 end입력> : "end"
>  총평점 : 4.0, 전공평점:3.3, 이수학점:5, 전공이수학점:2.
> 4.0학점으로 변환하는 경우 총평점은 x.xx은 입니다.
*/

//nodjs에서 제공하는 모듈(라이브러리)를 불러온다. 
const readline = require('readline');

//불러온 readline을 사용할 수 있게 초기화를 한다. 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var data = []; //과목들의 정보가 들어갈 변수

//등급을 점수로 변환하는 함수 (A -> 4.5)
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

//입력된 과목들의 정보를 토대로 총평점, 전공 평점, 이수학점, 전공이수학점을 출력하는 함수
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
    + ", 전공평점 : "+ (major_sum/major_done).toFixed(2) 
    + ", 이수학점 : " + grade_done
    + ", 전공이수학점 : " + major_done);

    //요구사항2 4.5가 아니고 4.0 만점의 경우 총평점
    console.log("4.0학점으로 변환하는 경우 총평점은 " + ((grade_sum/grade_done)*4/4.5).toFixed(2) + "입니다.")
    
}

//사용자로부터 과목정보를 입력받는 함수. end입력이 나올때까지 재귀적으로 수행
function addLecture(){
    rl.question("과목을 JSON형태로 입력하세요<종료는 end입력> : ", function(answer) {
        if(answer == "end") {
            printScore(data);
            return rl.close();
        }
        data.push(JSON.parse(answer));
        addLecture();
     });
}
addLecture();
