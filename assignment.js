//feetToMile

function feetToMile(feet) {
  var mile = feet / 5280;
  return mile;
}
var mile = feetToMile(5280);
console.log(mile);

//woodCalculator

function woodCalculator(chair, table, bed) {
  var chair = chair * 1;
  var table = table * 3;
  var bed = bed * 5;
  var total = chair + table + bed;

  return total;
}
var totalWood = woodCalculator(14, 2, 12);
console.log(totalWood);

//brickCalculator

function brickCalcutor(floor) {
  if (floor <= 10) {
    var brick = floor * 15 * 1000;
  } else if (floor <= 20) {
    var floor = floor - 10;
    var brick = floor * 12 * 1000 + 10 * 15 * 1000;
  } else if (floor > 20) {
    var floor = floor - 20;
    var brick = floor * 10 * 1000 + 10 * 12 * 1000 + 10 * 15 * 1000;
  } else {
    console.log("Enter valid number");
  }

  return brick;
}

var result = brickCalcutor(30);
console.log(result);

//tinyFriend

function tinyFriend(name) {
  var tiny = name[0];
  for (var i = 0; i < name.length; i++) {
    var currentName = name[i];

    if (currentName.length < tiny.length) {
      tiny = currentName;
    }
  }
  return tiny;
}
var tinyName = tinyFriend(["najmul", "noman", "riyad",]);
console.log(tinyName);
