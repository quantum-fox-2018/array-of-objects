var arr = [];

function createObj(name,phase,gender){
  var obj ={};
    obj.name = name;
    obj.phase = phase;
    obj.gender = gender;
    arr.push(obj);
  }
createObj('Akbar',1,'male');
createObj('Icha',1,'female');
createObj('Adhit',1,'male');
createObj('Tama',2,'male');
createObj('Rifki',2,'male');


function getData(name){
  for(var i = 0 ; i < arr.length ; i++){
    if(arr[i].name === name){
      return arr[i];
    }
  }
}

console.log(getData('Icha'));
