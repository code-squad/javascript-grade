// [ ['데이터베이스', 'A', 3], ['교양영어', 'B+', 1], ['철학', 'A', 2]] 으로 데이터가 설정된 경우 (데이터설정은 코드에 하드코딩 해도 된다)
//> 총평점 3.92 , 이수학점 6 
/*
총평점 = 학점*등급/과목수

1.미리 입력된 과목들의 등급(A+, A, .., F)을 숫자로 변환하는 함수 getScore()을 생성

2.변환된 점수(A -> 4)를 학점과 곱한 후 총학점 변수(grade_sum)에 저장, 이수학점을 변수(grade_done)에 저장 
-> 입력된 과목의 수(grade.length)만큼 반복실행

3.총평점의 결과를 소수점이하 2자리까지, 이수학점을 출력
*/
function getScore(grade){
    var sum = "FDCBA".indexOf(grade[0]);
    if(grade[1] == '+') sum += 0.5;
    return sum;
}
var grade = [ ['데이터베이스', 'A', 3], ['교양영어', 'B+', 1], ['철학', 'A', 2] ];
var grade_sum = 0;
var grade_done = 0;

for(var i=0;i<grade.length;i++){
    grade_done += grade[i][2];
    grade_sum += getScore(grade[i][1])*grade[i][2];
}
console.log("총 평점 " + (grade_sum/grade_done).toFixed(2) +" , 이수학점 " + grade_done);