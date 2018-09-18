//data의 값은 사용자에 따라 다를 수 있으므로 var로 할당
var data = [{'name' : '데이터베이스', 'grade' : 'A', 'credit' : 3, 'major' : false},
                {'name' : '교양영어', 'grade' : 'B+', 'credit' : 2, 'major' : true},
                {'name' : '철학', 'grade' : 'B+', 'credit' : 1, 'major' : false}];

function showGrade(data){

    const gradeData = {'A+': 4.5, 'A' : 4.0, 'B+': 3.5, 'B' : 3.0, 'C+': 2.5, 'C' : 2.0, 'D+': 1.5, 'D' : 1.0, 'F' : 0};
    const majorSubject = (data => data.filter(val => val.major))(data);

    function getCredit(data){
        const credit = data.map(val => val.credit);
        return credit.reduce((a,b) => a+b);
    }

    function getGPA(data, grade){
        const multiCreditGrade = data.map(val => val.credit * grade[val.grade]);
        return (multiCreditGrade.reduce((a,b) => a+b) / getCredit(data));           
    }

    function convertGPA(gpa, scoreStandard){
        return scoreStandard === 4.5 ? gpa.toFixed(2) : (scoreStandard * gpa / 4.5).toFixed(2);
    }

    console.log(`4.5기준 총평점 : ${convertGPA(getGPA(data, gradeData), 4.5)}(4.0기준은 ${convertGPA(getGPA(data, gradeData), 4.0)}) 
        전공평점 : ${convertGPA(getGPA(majorSubject, gradeData), 4.5)}(4.0기준은 ${convertGPA(getGPA(majorSubject, gradeData), 4.0)}) 
        이수학점 : ${getCredit(data)} 
        전공이수학점 : ${getCredit(majorSubject)}`);

}