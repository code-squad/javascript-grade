var data = [
    {
        'name': '데이터베이스',
        'grade': 'A',
        'credit': 3,
        'major': false
    },
    {
        'name': '교양영어',
        'grade': 'B+',
        'credit': 2,
        'major': true
    },
    {
        'name': '철학',
        'grade': 'B+',
        'credit': 1,
        'major': false
    }
];
//grade의 값을 숫자로 바꿔주는 함수
function changeGrade(grade) {
    var arr = [4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0]
}


//평균학점
var averageCredit = data.forEach(dataObject => {
    //for문을 돌며 object를 모두 찾아냄
    for (value in dataObject) {
        if (value === grade) {
            //object중에서 grade 값을 찾아낸 후 평균계산
        }
    }
})

//전공평군
var averageMajorCredit = data.forEach(dataObject => {
    //for 문을돌며 object를 모두 찾아냄
    if(value) {
        //object중에서 major값이 true일때
        //학점평균계산
    }
})

//학점
var totalCredit = data.forEach(dataObject => {
    //for문을 돌며 object를 모두 찾아냄
    if(value) {
        //object중에서 credit의갑을찾아냄
        //모두더함
    }
})

var totalMajorCredit = data.forEach(dataObject => {
    //for문을 돌며 object를 모두 찾아냄
    if(value) {
        //object중에서 major값이 true일때
        //학점모두더함
    }
})

