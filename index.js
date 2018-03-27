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

const MyGradeData = [{
        lecture: "데이터베이스",
        grade: "A+",
        credit: 3,
        major: true,
    },
    {
        lecture: "자료구조",
        grade: "A",
        credit: 3,
        major: true,
    },
    {
        lecture: "교양영어",
        grade: "B+",
        credit: 3,
        major: false,
    },
    {
        lecture: "철학",
        grade: "B",
        credit: 3,
        major: false,
    },
]

//요구사항 showGrade는 show만 하도록 \
const Zero = 0;
const NormalMaxPoints = 4.5
const acuurancy = 2;
const normalRatio = 1;
const ErrorMsg = {
    isNotObj: "data 형식은 object형태여야 합니다 example {name: 알고리즘, grade: B, credit: 3, major: true}",
}

class GradeCaculator {
    constructor() {
        gradeData: MyGradeData;
        gradeReport: {}
    }
    validData() {}
    saveData(data = MyGradeData) {
        this.gradeData = data;
        return this.gradeData;
    }
    calcGradeScore(grade, credit) {
        return gradeChart[grade] * credit;
    }
    getAverage(totalGrade, totalCredits, ratio) {
        return (totalGrade / totalCredits * ratio).toFixed(acuurancy)
    }
    updateData(addData) {
        const {
            grade,
            credit,
            major
        } = addData
        const gradeScore = this.calcGradeScore(grade, credit);
        this.gradeReport.totalGrade += gradeScore
        this.gradeReport.totalCredits += credit
        if (major) {
            this.gradeReport.totalMajorGrade += gradeScore
            this.gradeReport.totalMajorCredits += credit
        }
        return this.gradeReport;
    }
    calcSumAll(arr) {
        this.gradeReport = {
            totalGrade: Zero,
            totalCredits: Zero,
            totalMajorGrade: Zero,
            totalMajorCredits: Zero,
        }
        arr.forEach(report => {
            this.updateData(report);
        })
        return this.gradeReport
    }
    caculateGrade(fullPoints = NormalMaxPoints) {
        let GPA = Zero,
            majorGPA = Zero,
            ratio = fullPoints / NormalMaxPoints || normalRatio
        const gradeReport = this.gradeReport ? this.gradeReport : this.calcSumAll(this.gradeData);

        const {
            totalGrade,
            totalCredits,
            totalMajorGrade,
            totalMajorCredits
        } = gradeReport;
        GPA = this.getAverage(totalGrade, totalCredits, ratio)
        majorGPA = this.getAverage(totalMajorGrade, totalMajorCredits, ratio)
        const result = {
            GPA,
            totalCredits,
            majorGPA,
            totalMajorCredits,
            fullPoints,
        };
        return this.showGrade(result);
    }
    showGrade(result) {
        console.log(
            " 총 평점 " +
            result.GPA +
            " 전공평점 " +
            result.majorGPA +
            " 이수학점 " +
            result.totalCredits +
            " 전공 이수학점 " +
            result.totalMajorCredits +
            " 이 기준은 " +
            result.fullPoints +
            " 만점 기준으로 계산한 값입니다"
        );
    }
    addLecture(addData) {
        if (!typeChecks.isObject(addData)) throw new Error(ErrorMsg.isNotObj);
        this.gradeData.push(addData);
        this.updateData(addData);
    }
}


const gradeCaculator = new GradeCaculator();
gradeCaculator.saveData();

gradeCaculator.caculateGrade();
gradeCaculator.caculateGrade(4);

const addData = {
    lecture: "알고리즘",
    grade: "B",
    credit: 3,
    major: false,
}


gradeCaculator.addLecture(addData)

gradeCaculator.caculateGrade();