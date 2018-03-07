var arr = []
function createObj(name, phase, gender) {
    //YOUR CODE HERE...
    let user = {}
    user.name = name
    user.phase = phase
    user.gender = gender

    arr.push(user)
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')

console.log('Release 0')
console.log(arr)

function getData(name) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i].name == name) {
            return arr[i]
        }
    }
    return 'Data tidak ada'
}

console.log('Release 1')
console.log(getData('Icha'))
console.log(getData('Wika'))