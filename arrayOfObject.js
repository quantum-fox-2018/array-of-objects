var arr = [];
function createObj(name, phase, gender){
  let student = {
    name : name,
    phase : phase,
    gender : gender,
  };
  arr.push(student);  
}

createObj('Akbar',1,'male');
createObj('Icha', 1,'female');
createObj('Adhit', 2,'male');
createObj('Tama', 2,'male');
createObj('Rifky', 3,'male');
console.log(arr);


function getData(name){
  for(var i =0; i<arr.length; i++){
    if(arr[i].name === name){
      var getStudent = {
        name : arr[i].name,
        phase : arr[i].phase,
        gender : arr[i].gender,
      };
      return getStudent;
    }
  }
}

console.log(getData('Icha'));