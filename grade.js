// 총 학점 데이터

const data =  [ 
    {
        'name' : '데이터베이스', 
        'grade' : 'B+', 
        'credit' : 1,
        'major' : false
    },
    {
        'name' : '교양영어', 
        'grade' : 'A', 
        'credit' : 3,
        'major' : true
    },
    {
        'name' : '철학', 
        'grade' : 'A-', 
        'credit' : 2,
        'major' : false
    },
    {
        'name' : '데이터베이스', 
        'grade' : 'B-', 
        'credit' : 2,
        'major' : false
    },
    {
        'name' : '교양영어', 
        'grade' : 'A+', 
        'credit' : 2,
        'major' : true
    },
    {
        'name' : '교양영어', 
        'grade' : 'A', 
        'credit' : 2,
        'major' : true
    },
    {
        'name' : '철학', 
        'grade' : 'A-', 
        'credit' : 2,
        'major' : false
    }
];   

// 데이터 변환(4.5 만점 기준)

function declareData(data){
    // 4.5기준 학점
    
    const grade_table =  {
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

    const update_data = (data) => Object.assign({}, data, {
        grade: grade_table[data.grade]
    });

    const new_object = (state) => state.reduce((acc, d, currentIndex) => ({
        ...acc,
        [currentIndex]: update_data(d),
    }), {});

    const make_object = new_object(data);
    
    const new_data = [];
    
    for(let v in make_object){
        new_data.push(make_object[v]);
    }
    
    return new_data;
}

// 전공 수업 확인 필터

function checkMajor(data){
    return data.filter((data) => data.major);
}

// 결과 메세지

function showGrade(data){
    let all_data_calculation = calculateCredit(data),
        major_data_calculation = calculateCredit(data),
        all_data_number = checkCreditNumber(data),
        major_data_number = checkCreditNumber(checkMajor(data)),
        exchanged_all_grades = exchangeGrades(4.0, all_data_calculation),
        exchanged_major_grades = exchangeGrades(4.0, major_data_calculation);
    
    let result_message = 
`4.5기준 총평점 : ${all_data_calculation}(4.0기준은 ${exchanged_all_grades}),
전공평점:${major_data_calculation}(4.0기준은 ${exchanged_major_grades}),  
이수학점:${all_data_number}, 
전공이수학점:${major_data_number}`;
    
    console.log(result_message);
    return result_message;
}

// 다른 학점으로 변환(소숫점 둘째 자리까지)

function exchangeGrades(conversionNumber, grade){
    return ((conversionNumber * grade) / 4.5).toFixed(2);
}

// 이수학점

function checkCreditNumber(data){
    return data.reduce((accum, curr) => { return  accum + curr.credit; },0);
}

// 학점 연산

function calculateCredit(data){    
    return data.reduce((accum, curr) => { 
        return  accum + curr.credit * curr.grade; 
    },0) / checkCreditNumber(data);
}

// 새 과목 추가

function addLecture(newData){
    data.push(newData);
    showGrade(declareData(data));
}

// 기존 과목 제거

function removeLecture(deleteData, timeout){
    setTimeout(() => {

        let update_data = data.filter((d) => d.name !== deleteData);
        showGrade(declareData(update_data));

    }, timeout);
}

// 데이터 정렬

function sortMyGrade(data){
    data.sort((acc, curr) => { 
        if(acc.grade[0] == curr.grade[0] && curr.grade[1] == '+'){
            return 1;
        }
        return  +(acc.grade > curr.grade); 
    });
    data.sort((acc, curr) => { 
        if(acc.grade === curr.grade) return +(acc.credit < curr.credit);
    });
    console.log('-------------');
    data.reduce((acc,curr) => {
        if(acc.grade[0] && acc.grade[0] !== curr.grade[0]) console.log();
        console.log(`${curr.name}, ${curr.grade}, ${curr.credit}학점`);
        return curr;
    },{grade: ''});
    console.log('-------------');
};


// declareData(data);
// console.log(data);
// showGrade(declareData(data));
sortMyGrade(data);
// removeLecture('철학', 2000);
// addLecture({'name' : '알고리즘', 'grade' : 'B', 'credit' : 3, 'major' : true});