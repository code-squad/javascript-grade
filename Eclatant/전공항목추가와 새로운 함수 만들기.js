var grades = [
  {
    name: "데이터베이스",
    grade: "B+",
    credit: 3,
    major: true
  },
  {
    name: "교양영어",
    grade: "A+",
    credit: 3,
    major: false
  },
  {
    name: "네트워크",
    grade: "B+",
    credit: 3,
    major: true
  },
  {
    name: "글쓰기",
    grade: "A+",
    credit: 3,
    major: false
  }
];

function gradeMapping(grade, criteria) {
  var gradeMap = "FDCBA";
  var gradePoint = parseInt(gradeMap.indexOf(grade[0]));
  var result = gradePoint;

  if (grade.length === 2) {
    result = gradePoint + parseFloat(grade[1] + criteria) - 4;
  }

  return result;
}

function getGradeAvg(data, criteria) {
  var sumGrade = data.reduce(function(prev, curr) {
    return prev + gradeMapping(curr.grade, criteria);
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

function calculate(data, anotherStandard) {
  var majorData = data.filter(function(item) {
    return item.major;
  });

  var totalGradePointAvg = getGradeAvg(data, "4.5");
  var totalGradePointAvgAnother = getGradeAvg(data, anotherStandard);
  var totalMajorGradePointAvg = getGradeAvg(majorData, "4.5");

  var totalCredit = getTotalCredit(data);
  var majorTotalCredit = getTotalCredit(majorData);

  return {
    totalGradePointAvg,
    totalGradePointAvgAnother,
    totalMajorGradePointAvg,
    totalCredit,
    majorTotalCredit
  };
}

function getReport(data, anotherStandard) {
  var {
    totalGradePointAvg,
    totalGradePointAvgAnother,
    totalMajorGradePointAvg,
    totalCredit,
    majorTotalCredit
  } = calculate(data, anotherStandard);

  console.log(
    `> 총평점 : ${totalGradePointAvg}, 전공평점 : ${totalMajorGradePointAvg}, 이수학점 : ${totalCredit}, 전공이수학점 : ${majorTotalCredit}`
  );
  console.log(
    `${anotherStandard}  학점으로 변환하는 경우, 총평점은 ${totalGradePointAvgAnother}입니다.`
  );
}

function addLecture(grades, grade) {
  grades.push(grade);

  getReport(grades, "4.0");
}

addLecture(grades, { name: "알고리즘", grade: "B", credit: 3, major: true });
