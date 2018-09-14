function showGrade(data){

    var data = [{'name' : '데이터베이스', 'grade' : 'A', 'credit' : 3, 'major' : false},
                {'name' : '교양영어', 'grade' : 'B+', 'credit' : 2, 'major' : true},
                {'name' : '철학', 'grade' : 'B+', 'credit' : 1, 'major' : false}];

    var grade = {'A+': 4.5, 'A' : 4.0, 'B+': 3.5, 'B' : 3.0, 'C+': 2.5, 'C' : 2.0, 'D+': 1.5, 'D' : 1.0, 'F' : 0};
        
    function getCredit(data){
        const credit = data.map(val => val.credit);
        return credit.reduce((a,b) => a+b);
    }

    function getMajorCredit(data){
        const majorCredit = data.filter(val => val.major);
        return getCredit(majorCredit);
    }

    // function getGPA(){

    // }

    // function getmajorGPA(){
        
    // }
    console.log(`4.5기준 총평점 : (4.0기준은 ), 전공평점 : (4.0기준은 ), 이수학점 : ${getCredit(data)}, 전공이수학점 : ${getMajorCredit(data)}`);

}