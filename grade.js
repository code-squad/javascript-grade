// 총 학점 데이터

const data =  [ 
    {
        'name' : '데이터베이스', 
        'grade' : 'A', 
        'credit' : 3,
        'major' : false
    },
    {
        'name' : '교양영어', 
        'grade' : 'B+', 
        'credit' : 2,
        'major' : true
    },
    {
        'name' : '철학', 
        'grade' : 'B+', 
        'credit' : 1,
        'major' : false
    }
];   

// 데이터 변환(4.5 만점 기준)

function parseData(data){
    // 4.5기준 학점

    const parse_data =  {
            'A+': 4.5, 
            'A' : 4, 
            'B+': 3.5,
            'B' : 3,
            'C+': 2.5, 
            'C' : 2, 
            'D+': 1.5,
            'D' : 1,
            'F' : 0,
    };

    Object.keys(parse_data).forEach((v) =>{
        for(let value of data){
            if(value.grade === v) value.grade = parse_data[v];
        }
    })

    return data;
}
// 결과 메세지

function showGrade(data){
    let result_message = `4.5기준 총평점 : ${calculateTotalCredit(data)}(4.0기준은 ${exchangeGrades(4.0, calculateTotalCredit(data))}),` +
                        `전공평점:${calculateMajorCredit(data)}(4.0기준은 ${exchangeGrades(4.0, calculateMajorCredit(data))}),  ` +
                        `이수학점:${checkTotalCreditNumber(data)}, ` +
                        `전공이수학점:${checkMajorCreditNumber(data)}`
    
    console.log(result_message);

    return result_message;
}

// 다른 학점으로 변환(소숫점 둘째 자리까지)

function exchangeGrades(conversionNumber, grade){
    return ((conversionNumber * grade) / 4.5).toFixed(2);
}

// 총 이수학점

function checkTotalCreditNumber(data){
    let total_credit = 0;
    data.forEach((v) => {
        total_credit += v.credit;
    })
    
    return total_credit;
}

// 총 전공이수학점

function checkMajorCreditNumber(data){
    let major_credit = 0;
    let major_grades = data.filter((data) => {return !!(data.major)});

    major_grades.forEach((v) => {
        major_credit += v.credit;
    })

    return major_credit;
}

// 총 학점 연산

function calculateTotalCredit(data){
    let total_score = 0;
    const total_grades = checkTotalCreditNumber(data);
    
    data.forEach((v) => {
        total_score += v.credit * v.grade;
    })
    
    return total_score/total_grades;
}

// 전공 학점 연산

function calculateMajorCredit(data){
    let major_score = 0;
    let major_grades = data.filter((data) => {return !!(data.major)});
    const calculation_major_grades = checkMajorCreditNumber(data);
    
    major_grades.forEach((v) => {
            major_score += v.credit * v.grade;
    })

    return major_score/calculation_major_grades;
}

showGrade(parseData(data));