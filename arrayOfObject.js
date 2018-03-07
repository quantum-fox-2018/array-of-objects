var arr = [];

function creatObj(name, phase, gender) {
    var students = {};
    students.name = arguments[0];
    students.phase = arguments[1];
    students.gender = arguments[2];
    arr.push(students);
}

creatObj('Akbar', 1, 'male');
creatObj('Icha', 1, 'female');
creatObj('Adit', 2, 'male');
creatObj('Tama', 2, 'male');
creatObj('Rifky', 3, 'male');
console.log(arr);

function getData(name) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].name === name) {
            return arr[i];
        }
    }
}

console.log(getData('Icha'));