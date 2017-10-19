var readline = require("readline");

var helper = require("./helper");
var getGradeAvg = helper.getGradeAvg;
var getTotalCredit = helper.getTotalCredit;
var getReport = helper.getReport;

var gradeMap = require("./gradeMap");
var gradeMap40 = gradeMap.gradeMap40;
var gradeMap43 = gradeMap.gradeMap43;
var gradeMap45 = gradeMap.gradeMap45;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var grades = [];

function checkDataFormat(grade) {
  var keys = Object.keys(grade);

  if (
    keys.length === 4 &&
    keys[0] === "name" &&
    keys[1] === "grade" &&
    keys[2] === "credit" &&
    keys[3] === "major"
  ) {
    return true;
  }

  return false;
}

function IO() {
  rl.question("과목을 JSON 형태로 입력해주십시오. : ", function(input) {
    if (input === "end") {
      rl.close();
      getReport(grades, gradeMap40);
    } else if (
      typeof JSON.parse(JSON.stringify(input)) === "object" &&
      checkDataFormat(JSON.parse(input))
    ) {
      grades.push(JSON.parse(input));
      console.log("과목이 추가되었습니다.\n");
      IO();
    } else {
      console.log("다시 입력해주십시오.\n");
      IO();
    }
  });
}

IO();
