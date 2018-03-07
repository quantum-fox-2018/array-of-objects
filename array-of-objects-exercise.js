var arr = [];

function createObj(name,phase,gender){

  var database = {}

  database.name = name;
  database.phase = phase;
  database.gender = gender;

  return arr.push(database);
}

createObj('Akbar',1,'male');
createObj('Icha',1,'female');
createObj('Adhit',2,'male');

function getData(name){

  for(let i =0;i<arr.length;i++){
    if(name == arr[i].name){
      return arr[i];
    }
  }

  return 'tidak ada';
}

console.log(arr);
console.log(getData('Icha'));
