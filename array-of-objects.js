var dataOfStudents = [];

function createObj(name, phase, gender){
    let objStudent = {};

    objStudent['name'] = name;
    objStudent['phase'] = phase;
    objStudent['gender'] = gender;

    dataOfStudents.push(objStudent);
}

function getData(name){
    for(let counter = 0; counter<dataOfStudents.length; counter++){
        if(dataOfStudents[counter].name === name){
            return dataOfStudents[counter];
        }
    }
    return 'Data not found!'
}

createObj('Bobby', '1', 'male');
createObj('Siti', '1', 'female');
createObj('Tina', '2', 'female');
createObj('Budi', '3', 'male');

// console.log(dataOfStudents);

console.log(getData('Bob'));