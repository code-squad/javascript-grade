const lectureList = [{'name' : '데이터베이스', 'grade' : 'A', 'credit' : 3, 'major' : false},
            {'name' : 'Java 완전정복', 'grade' : 'D', 'credit' : 3, 'major' : true},
            {'name' : '프로그래밍 설계', 'grade' : 'B', 'credit' : 2, 'major' : false},
            {'name' : '네트워크실습', 'grade' : 'A', 'credit' : 1, 'major' : true},
            {'name' : '자료구조와 알고리즘', 'grade' : 'B', 'credit' : 3, 'major' : false},
            {'name' : 'VIM으로 최강속도 코딩하기', 'grade' : 'D', 'credit' : 1, 'major' : true},
            {'name' : '웹프로그래밍', 'grade' : 'A', 'credit' : 3, 'major' : false},
            {'name' : '이산수학', 'grade' : 'B', 'credit' : 3, 'major' : true}];            

const gradeData = {'A+': 4.5, 'A' : 4.0, 'B+': 3.5, 'B' : 3.0, 'C+': 2.5, 'C' : 2.0, 'D+': 1.5, 'D' : 1.0, 'F' : 0};            

function showGrade(data){
    const majorSubject = (data => data.filter(val => val.major))(data);
    
    function getCredit(data){
        const creditArr = data.map(val => val.credit);
        const sumCredit = creditArr.reduce((a,b) => a+b);
        return sumCredit;
    }

    function getGPA(data, grade){
        const multiCreditGrade = data.map(val => val.credit * grade[val.grade]);
        const gpa = multiCreditGrade.reduce((a,b) => a+b) / getCredit(data); 
        return gpa;           
    }

    function convertGPA(gpa, scoreStandard){
        return scoreStandard === 4.5 ? gpa.toFixed(2) : (scoreStandard * gpa / 4.5).toFixed(2);
    } 
    console.log(`4.5기준 총평점 : ${convertGPA(getGPA(data, gradeData), 4.5)}(4.0기준은 ${convertGPA(getGPA(data, gradeData), 4.0)}) 
        전공평점 : ${convertGPA(getGPA(majorSubject, gradeData), 4.5)}(4.0기준은 ${convertGPA(getGPA(majorSubject, gradeData), 4.0)}) 
        이수학점 : ${getCredit(data)} 
        전공이수학점 : ${getCredit(majorSubject)}`);
}

function addLecture(lectureData){
    lectureList.push(lectureData);
    showGrade(lectureList);
}

function removeLecture(lectureName, time){
    lectureList.forEach((lecture, idx) => {
        if(lecture.name === lectureName) lectureList.splice(idx, 1);
    }); 
    setTimeout(showGrade, time, lectureList);
}

function sortMyGrade(data){
    const lectureListByGrade = {};
    const gradeDataKeys = Object.keys(gradeData);
    
    for(let key of gradeDataKeys){
        lectureListByGrade[key] = data.filter(lec => lec.grade === key);
    }
    for(let grade in lectureListByGrade){
        if(lectureListByGrade.hasOwnProperty(grade)) lectureListByGrade[grade].sort((lecture1, lecture2) => lecture2.credit-lecture1.credit);                
    }
        
    console.log(`-------------${stringfyData(lectureListByGrade)}-------------`);
}

function stringfyData(data){
    let stringData = '';
    for(let grade in data){
        if(data.hasOwnProperty(grade) && data[grade].length){
            stringData += data[grade].reduce((lec1, lec2) => lec1 + `${lec2.name}, ${lec2.grade}, ${lec2.credit}학점\n`, '\n');
        }
    }
    return stringData;
}

/*
console.log(data);
showGrade(data);
addLecture({'name' : '알고리즘', 'grade' : 'B+', 'credit' : 3, 'major' : true});
removeLecture('알고리즘', 1000);
sortMyGrade(data);
*/