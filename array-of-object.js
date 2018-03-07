var arr = []
function createObj(name, phase, gender){
    let objStudent = {}
    objStudent.name = name;
    objStudent.phase = phase;
    objStudent.gender = gender;

    arr.push(objStudent)
}

createObj('Akbar', 1, 'Male')
createObj('Icha', 1, 'Female')
createObj('Adhit', 2, 'Male')
createObj('Tama', 2, 'Male')
createObj('Rifki', 3, 'Male')

console.log('Release 0')
console.log(arr)


console.log('Release 1')

function getData(name){
    for(let i=0; i<arr.length; i++){
        if(arr[i].name == name){
            return arr[i];
        }
    }
}

console.log(getData('Icha'))