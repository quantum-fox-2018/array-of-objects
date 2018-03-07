var arrObj = []

function createObj(name,phase,gender) {
  let obj={}
  obj.name=name
  obj.phase=phase
  obj.gender=gender
  arrObj.push(obj)
}

createObj('Akbar',1,'male')
createObj('Icha',1,'female')
createObj('Adhit',2,'male')
createObj('Tama',2,'male')
createObj('Rifky',3,'male')

console.log(arrObj);

function getData(name){
  for (var i = 0; i < arrObj.length; i++) {
    if(arrObj[i].name===name){
      return arrObj[i]
    }
  }
}

console.log(getData('Icha'));
