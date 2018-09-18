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

function declareData(data){
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

// 전공 수업 확인 필터

function checkMajor(data){
    let major_grades = data.filter((data) => {return !!(data.major)});
    return major_grades;
}

// 결과 메세지

function showGrade(data){
    let result_message = `4.5기준 총평점 : ${calculateCredit(data)}(4.0기준은 ${exchangeGrades(4.0, calculateCredit(data))}),` +
                        `전공평점:${calculateCredit(checkMajor(data))}(4.0기준은 ${exchangeGrades(4.0, calculateCredit(checkMajor(data)))}),  ` +
                        `이수학점:${checkCreditNumber(data)}, ` +
                        `전공이수학점:${checkCreditNumber(checkMajor(data))}`
    
    console.log(result_message);

    return result_message;
}

// 다른 학점으로 변환(소숫점 둘째 자리까지)

function exchangeGrades(conversionNumber, grade){
    return ((conversionNumber * grade) / 4.5).toFixed(2);
}

// 이수학점

function checkCreditNumber(data){

    let check_result = data.reduce((accum, curr) => { return  accum + curr.credit; },0)
    return check_result;
}

// 학점 연산

function calculateCredit(data){
    
    let calculation_result = data.reduce((accum, curr) => { return  accum + curr.credit * curr.grade; },0) / checkCreditNumber(data);
    return calculation_result;
}

showGrade(declareData(data));