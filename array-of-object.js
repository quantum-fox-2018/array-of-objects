// Release 1
var arr = []
function createObj(name, phase, gender){
  var Obj = {}
    Obj.name = name,
    Obj.phase = phase,
    Obj.gender = gender
    arr.push(Obj)
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adhit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 2, 'male')

// console.log(arr)

// Release 1
function getData(name){
  // console.log(arr[1])
  for(var i=0; i<arr.length; i++){
    if(arr[i].name===name){
      return arr[i]
    }
  }
}

console.log(getData('Akbar'))
/*
expected
{
  name: "Icha",
  phase: 1,
  gender: 'female'
}
*/
