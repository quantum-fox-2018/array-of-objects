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

console.log(arr)