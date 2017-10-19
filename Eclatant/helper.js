var gradeMap = require("./gradeMap");
var gradeMap40 = gradeMap.gradeMap40;
var gradeMap43 = gradeMap.gradeMap43;
var gradeMap45 = gradeMap.gradeMap45;

function getGradeAvg(data, gradeMap) {
  var sumGrade = data.reduce(function(prev, curr) {
    return prev + gradeMap[curr.grade];
  }, 0);

  var gradeAvg = (sumGrade / data.length).toFixed(2);

  return gradeAvg;
}

function getTotalCredit(data) {
  var sumCredit = data.reduce(function(prev, curr) {
    return prev + curr.credit;
  }, 0);

  return sumCredit;
}

function getReport(data, anotherStandard) {
  var majorData = data.filter(function(item) {
    return item.major;
  });

  var totalGradePointAvg = getGradeAvg(data, gradeMap45);
  var totalGradePointAvgAnother = getGradeAvg(data, anotherStandard);
  var totalMajorGradePointAvg = getGradeAvg(majorData, gradeMap45);

  var totalCredit = getTotalCredit(data);
  var majorTotalCredit = getTotalCredit(majorData);

  console.log(
    "> 총평점 :",
    totalGradePointAvg,
    "전공평점 :",
    totalMajorGradePointAvg,
    "이수학점 :",
    totalCredit,
    "전공이수학점 :",
    majorTotalCredit
  );

  console.log(
    anotherStandard["A+"].toFixed(1) + " 학점으로 변환하는 경우, 총평점은",
    totalGradePointAvgAnother,
    "입니다."
  );
}

module.exports = {
  getGradeAvg,
  getTotalCredit,
  getReport
};
