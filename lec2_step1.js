var data = [
    {
    'name' : '데이터베이스',
    'grade' : 'A',
    'credit' : 3,
    'major' : false
    },
    {
    'name' : '교양영어',
    'grade' : 'B+',
    'major' : true,
    'credit' : 2,
    },
    {
    'name' : '철학',
    'grade' : 'B+',
    'credit' : 1,
    'major' : false
    }
    ,
    {
    'name' : '글쓰기의이해',
    'grade' : 'B',
    'credit' : 2,
    'major' : true
    }
    ,
    {
    'name' : 'DB개론',
    'grade' : 'A', 
    'credit' : 2,
    'major' : true
    }
    ,
    {
    'name' : '교양중국어',
    'grade' : 'A+',
    'credit' : 2,
    'major' : false
    }
];

//Intialize count
const gradingScale = {
'A+':4.5, 'A':4.0, 'B+':3.5, 'B':3.0, 'C+':2.5, 'C':2.0, 'D+':1.5, 'D':1.0,'F':0 };

// add up total credit
function addUpTotalCredit (data) {
    let totalCredit = 0;

    data.forEach ( (v) => {
        totalCredit += v.credit; 
    })
    return totalCredit;
}

// add up major credit
function addUpMajorCredit (data) {
    let majorCredit =0;

    data.filter((v) => v.major).map(v => majorCredit += v.credit);

    return result;
}

// totalScore x totalCredit 
function calculatingTotal (data) {
    let calculatingTotalValue = 0;

    data.forEach( (v) => {
        calculatingTotalValue += gradingScale[v.grade] * v.credit;
    })
    return calculatingTotalValue;
}

function calculatingMajor (data) {
    //let calculatingMajorValue = 0;
    //data.filter( (e) =>  e.major ).forEach( (v) => { 
    //    calculatingMajorValue += gradingScale[v.grade] * v.credit;});
    //return calculatingMajorValue;
    
    const result = data.filter((e) => e.major).map( v => gradingScale[v.grade] * v.credit ).reduce(function (accumulator, currentValue){return accumulator+currentValue;}, 0);

    return result;
}

function calculatingTotalGPA (data) {
    let totalCredit = addUpTotalCredit(data);
    let calculatingTotalValue = calculatingTotal(data);

    return (calculatingTotalValue/totalCredit).toFixed(2);
}

function calculatingMajorGPA (data) {
    let majorCredit = addUpMajorCredit(data);
    let calculatingMajorValue = calculatingMajor(data);

    return (calculatingMajorValue/majorCredit).toFixed(2);
}

function convertStandardTo40 (data) {
    const ratio = 4.5/4.0;

    let totalGPA = (calculatingTotalGPA(data) / ratio).toFixed(2)
    let majorGPA = (calculatingMajorGPA(data) / ratio).toFixed(2);

    return [totalGPA, majorGPA];
}

function showGrade(data, gradingScale) {
    let totalCredit = addUpTotalCredit(data);
    let majorCredit = addUpMajorCredit(data);
    let standard, totalGPA, majorGPA;

    if (gradingScale === 4.5) {
        standard = '4.5';
        totalGPA = calculatingTotalGPA(data);
        majorGPA = calculatingMajorGPA(data);
    } else {
        standard = '4.0';
        [ totalGPA, majorGPA ] = convertStandardTo40(data);
    }

    return `${standard} 기준 - 총평점: ${totalGPA}, 전공평점: ${majorGPA} 이수학점: ${totalCredit}, 이수전공학점: ${majorCredit}`;
} 