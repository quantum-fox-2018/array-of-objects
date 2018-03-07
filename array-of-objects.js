//Array of Object

//Release 0
var arr = [];

function createObj(name, phase, gender){
    let objStudents = {};
    objStudents.name = name;
    objStudents.phase = phase;
    objStudents.gender = gender;
    arr.push(objStudents);
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Adhit', 2, 'male');
createObj('Tama', 2, 'male');
createObj('Rifky', 3, 'male');

console.log(arr);

function getData(name){
    for(let i = 0; i < arr.length; i++){
        if(name === arr[i].name){
            return arr[i];
        }
    }

    return 'Students not Found!';
}


console.log(getData('Icha'));
console.log(getData('Rifky'));
console.log(getData('gada'));
