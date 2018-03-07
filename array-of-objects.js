var arr = [];

function createObj(name, phase, gender) {
  var objStudent = {};

  objStudent.name = name;
  objStudent.phase = phase;
  objStudent.gender = gender;

  arr.push(objStudent);
}

function getData(name) {
  for (let i in arr) {
    let objStudent = arr[i];
    let checkName = objStudent.name;
    if (name === checkName) {
      return objStudent;
    }
  }
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Adhit', 2, 'male');
createObj('Tama', 2, 'male');
createObj('Rifky', 3, 'male');

console.log(arr);
console.log(getData('Icha'));
