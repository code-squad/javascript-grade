const typeChecks = require("./typeChecks");

const gradeChart = {
  "A+": 4.5,
  A: 4.0,
  "B+": 3.5,
  B: 3.0,
  "C+": 2.5,
  C: 2.0,
  "D+": 1.5,
  D: 1,
  F: 0,
};

const LectureNames = {
    DataBase: "데이터베이스",
    DataStructure: "자료구조",
    LiberalEnglish: "교양영어",
    PhiloSophy: "철학",
    Algorithm: "알고리즘",
}

const MyGradeData = {
    id: {
        DataBase: {
            grade: "A+",
            credit: 3,
            major: true,
        },
        DataStructure: {
            grade: "A",
            credit: 3,
            major: true,
        },
        LiberalEnglish: {
            grade: "B+",
            credit: 3,
            major: false,
        },
        PhiloSophy: {
            grade: "B",
            credit: 3,
            major: false,
        },
    }
}

//요구사항 showGrade는 show만 하도록 \
const Zero = 0;
const NormalMaxPoints = 4.5
const acuurancy = 2;
const normalRatio = 1;
const ErrorMsg = {
    isNotObj: "data 형식은 object형태여야 합니다 example {name: 알고리즘, grade: B, credit: 3, major: true}",
}

class GradeCaculator{
    constructor(){
        gradeData: MyGradeData;
    }
    validData(){
    }
    saveData(data = MyGradeData){
        this.gradeData = data;
        return this.gradeData;
    }
    caculateGrade(fullPoints = NormalMaxPoints){
        const gradeData = Object.values(this.gradeData.id);
        console.log(gradeData);
        let totalGrade = Zero, 
            totalCredits = Zero, 
            totalMajorGrade = Zero,
            gpa = Zero,
            majorGpa = Zero,
            totalMajorCredits = Zero,
            ratio = fullPoints/NormalMaxPoints || normalRatio
            

        const caclGradeScore = (grade, credit) => gradeChart[grade]*credit;

        const getAverage = (totalGrade, totalCredits, ratio)=>(totalGrade/totalCredits*ratio).toFixed(acuurancy)

        gradeData.forEach(report => {
            let gradeScore = caclGradeScore(report.grade, report.credit)
            let credits = report.credit;
            totalGrade +=gradeScore;
            totalCredits +=credits;
            if(report.major){
                totalMajorGrade += gradeScore;
                totalMajorCredits +=credits;
            }
        });
        gpa = getAverage(totalGrade, totalCredits, ratio)
        majorGpa = getAverage(totalMajorGrade, totalMajorCredits, ratio)
        const result = {
            gpa,
            totalCredits,
            majorGpa,
            totalMajorCredits,
            fullPoints,
        };
        return this.showGrade(result);
    }
    showGrade(result){
        console.log(
            " 총 평점 " +
              result.gpa +
              " 전공평점 " +
              result.majorGpa +
              " 이수학점 " +
              result.totalCredits +
              " 전공 이수학점 " +
              result.totalMajorCredits +
              " 이 기준은 " +
              result.fullPoints +
              " 만점 기준으로 계산한 값입니다"
          );
    }
    addLecture( addData){
        if(!typeChecks.isObject(addData)) throw new Error(ErrorMsg.isNotObj);
        this.gradeData.id = {...this.gradeData.id, ...addData };
        console.log(this.gradeData.id);
    }
}


const gradeCaculator = new GradeCaculator();
gradeCaculator.saveData();

gradeCaculator.caculateGrade();
gradeCaculator.caculateGrade(4);

const addData = {
    Algorithm: {
        grade: 'B',
        credit: 3,
        major: true
    },
}


gradeCaculator.addLecture(addData)

gradeCaculator.caculateGrade();
