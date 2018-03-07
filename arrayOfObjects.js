var arr = [];

function createObj(name, phase, gender) {
  var obj = {};
  obj.name = name;
  obj.phase = phase;
  obj.gender = gender;
  return arr.push(obj);
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Adhit', 2, 'male');
createObj('Tama', 2, 'male');
createObj('Rifky', 3, 'male');

console.log(arr);

function getData(name) {
  for (var j = 0; j < arr.length; j++) {
    if (arr[j].name == name) {
      return arr[j];
    }
  }
}

console.log(getData('Icha'));
