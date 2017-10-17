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
